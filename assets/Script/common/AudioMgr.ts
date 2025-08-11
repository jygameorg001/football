const BGMStoreKey = "bgmVolume";
const EffecStoretKey = "effectsVolume";
const MuteStoreKey = "audioMute";

/**  */
//
const query = new URLSearchParams(window.location.search);
const TEST_EFFECT = query.get("effect")?.split(",");
export interface AudioBaseConfig {
    bgm: string; // 背景音乐
    click: string; // 按钮点击音效
    close: string; // 关闭音效
    musicDir: string; // 背景音乐目录
    effectDir: string; // 音效目录
}

const isIOS = cc.sys.os === cc.sys.OS_IOS;

export class AudioMgr {
    static EventMuteChanged = "EventMuteChanged";
    static bgAudioSource: cc.AudioSource = null;
    static bgmVolume = 1; // 背景音乐音量
    static effectsVolume = 1; // 音效音量
    private static isVolumeLowered = false; // 标记是否是特殊情况降低的音量
    private static currentMusicId: number = -1; // 记录当前播放的音乐ID
    static isPaused: boolean = false;

    static get muted() {
        return AudioMgr._muted;
    }

    static set muted(v) {
        AudioMgr._muted = v;
        // StorageMgr.instance.set(MuteStoreKey, v);
        cc.audioEngine.setMusicVolume(this.musicVolume);
        cc.audioEngine.setEffectsVolume(this.effectVolume);

    }

    private static _muted = false;

    static effectMap: Map<cc.AudioClip | string, number>;
    static tempName = "";

    private static audioConfig: Partial<AudioBaseConfig> = null;
    private static currentMusicClip: cc.AudioClip = null;
    private static currentMusicLoop = false;
    private static isInBackground = false; //标记是否在后台

    /**
     * @description: 上次播放的音乐音量，用于恢复音量
     */
    // private static originMusicVolume;

    static init() {
        
        AudioMgr.effectMap = new Map();
        AudioMgr.isVolumeLowered = false;
        // this.originMusicVolume = 1;
        let str = cc.sys.localStorage.getItem("isPaused","");
        if(str=="1"){
            AudioMgr.isPaused = true;
            this.setMusicVolume(0);
            this.setEffectsVolume(0)
        }else{
            cc.audioEngine.setMusicVolume(AudioMgr.musicVolume);
            cc.audioEngine.setEffectsVolume(AudioMgr.effectVolume);
        }
        cc.game.on(cc.game.EVENT_SHOW, () => {
            AudioMgr.isInBackground = false;

            !AudioMgr.isVolumeLowered && AudioMgr.setMusicVolume(AudioMgr.musicVolume);
            AudioMgr.setEffectsVolume(AudioMgr.effectVolume);

            const ctx = (cc.sys as any).__audioSupport?.context;
            if (!ctx) return;
            if (ctx.state === "suspended" || ctx.state === "interrupted") {
                if (cc.sys.os === cc.sys.OS_IOS) {
                    // iOS 直接重建
                    AudioMgr.rebuildAudioContextAndReplay();
                } else {
                    // 安卓等其它平台，先尝试恢复
                    ctx.resume()
                        .then(() => {
                            // 检查能否正常播放
                            const state = cc.audioEngine.getState(AudioMgr.currentMusicId);
                            if (state !== cc.audioEngine.AudioState.PLAYING) {
                                AudioMgr.rebuildAudioContextAndReplay();
                            }
                        })
                        .catch(() => {
                            AudioMgr.rebuildAudioContextAndReplay();
                        });
                }
            }
        });

        cc.game.on(cc.game.EVENT_HIDE, () => {
            AudioMgr.isInBackground = true;

            // 设置音量为0
            cc.audioEngine.setMusicVolume(0);
            cc.audioEngine.setEffectsVolume(0);
        });
    }

    /**
     * 重建 WebAudio AudioContext，并彻底清理所有音频，自动恢复背景音乐。
     */
    static rebuildAudioContextAndReplay() {
        const support = (cc.sys as any).__audioSupport;
        if (!support?.context) {
            //提示刷新页面，暂未实现
            return;
        }

        try {
            support.context.close();
            support.context = new (window.AudioContext || (window as any).webkitAudioContext)();

            cc.audioEngine.stopAll();
            cc.audioEngine.uncacheAll();

            if (AudioMgr.currentMusicClip) {
                AudioMgr.currentMusicId = cc.audioEngine.playMusic(AudioMgr.currentMusicClip, AudioMgr.currentMusicLoop ?? true);
                cc.audioEngine.setMusicVolume(AudioMgr.musicVolume);
            }
        } catch (e) {
            console.error("[Audio Debug] AudioContext 重建失败", e);
            //提示刷新页面， 暂未实现
        }
    }

    /**
     * 设置自定义配置
     * @param audioConfig
     */
    static setAudioConfig(audioConfig: Partial<AudioBaseConfig>) {
        AudioMgr.audioConfig = audioConfig;
    }

    /**
     * 播放背景音乐
     * @param path 只需要传文件名(不带.后缀)
     * @param isLoop 是否循环播放（默认 true）
     * @param bundleName 资源包名称（默认 "common"）
     */
    static playMusic(path: string, isLoop: boolean = true, bundleName: string = null): void {
        if (!path) return;
        // 加载音频资源
        cc.resources.load(path, cc.AudioClip, (err, clip: cc.AudioClip) => {
                if (!clip) {
                    console.error(`Failed to play music: Resource ${path} could not be loaded.`);
                    return;
                }
                AudioMgr.currentMusicClip = clip;
                AudioMgr.currentMusicLoop = isLoop;
                console.log("====AudioMgr", 'playMusic', AudioMgr.musicVolume,AudioMgr.bgmVolume);
                // WebAudio 正常播放
                AudioMgr.currentMusicId = cc.audioEngine.playMusic(clip, isLoop);
                cc.audioEngine.setMusicVolume(AudioMgr.musicVolume);
                const state = cc.audioEngine.getState(AudioMgr.currentMusicId);
            }
        )
    }
    //停止播放背景音乐
    static stopMusic() {
        this.pauseMusic();
        // cc.audioEngine.stopMusic();
    }

    static pauseMusic() {
        // this.originMusicVolume = cc.audioEngine.getMusicVolume();
        cc.audioEngine.setMusicVolume(0);
        // cc.audioEngine.pauseMusic();
    }

    static resumeMusic() {
        cc.audioEngine.setMusicVolume(1);
        cc.audioEngine.setEffectsVolume(1);
        // cc.audioEngine.resumeMusic();
    }

    static get musicVolume() {
        if (AudioMgr._muted) return 0;
        return AudioMgr.bgmVolume;
    }

    static get effectVolume() {
        if (AudioMgr._muted) return 0;
        return AudioMgr.effectsVolume;
    }

    static setMusicVolume(volume: number) {
        AudioMgr.bgmVolume = volume;
        cc.audioEngine.setMusicVolume(AudioMgr.musicVolume);
    }

    /**
     * 设置音效音量，自动适配 WebAudio 和 H5 Audio 两种模式。
     * @param volume 音效音量（0-1）
     */
    static setEffectsVolume(volume: number) {
        AudioMgr.effectsVolume = volume;
        cc.audioEngine.setEffectsVolume(AudioMgr.effectVolume);
    }

    /**
     * 播放音效
     * @param path 只需要传文件名(不带.后缀)
     * @param isLoop 是否循环播放（默认 true）
     * @param bundleName 资源包名称（默认 "common"）
     */
    static playSound(path: string, isLoop = false, bundleName: string = null, isLowerBackGround = false): void {
        if (!path) return;
        if (AudioMgr.effectsVolume === 0) return;
        cc.resources.load(path,cc.AudioClip,  (err,clip: cc.AudioClip) => {
                if (!clip) {
                    console.error(`Failed to play sound: Resource ${path} could not be loaded.`);
                    return;
                }
                cc.audioEngine.playEffect(clip, isLoop);
            });
    }
    static stopEffect(name: string) {
        if (!AudioMgr.effectMap) return;
        if (!AudioMgr.effectMap.get(name)) return;
        cc.audioEngine.stopEffect(AudioMgr.effectMap.get(name));
        AudioMgr.effectMap.delete(name);
    }

    static stopAllEffect() {
        AudioMgr.effectMap.clear();
        cc.audioEngine.stopAllEffects();
    }

    /**
     * 降低或恢复背景音乐音量
     * @param isLower 是否降低音量，true降低音量，false恢复音量
     * @param volume 要降低到的音量值(0-1)，默认0.3
     */
    static lowerBgmVolume(isLower: boolean, volume: number = 0.3) {
        // WebAudio
        if (isLower) {
            if (AudioMgr.bgmVolume > volume) {
                cc.audioEngine.setMusicVolume(volume);
                AudioMgr.isVolumeLowered = true;
            }
        } else {
            cc.audioEngine.setMusicVolume(AudioMgr.musicVolume);
            AudioMgr.isVolumeLowered = false;
        }
    }

}
