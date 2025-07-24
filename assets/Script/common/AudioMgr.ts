export class AudioMgr {
    static bgAudioSource: cc.AudioSource = null;
    static bgmVolume = 1;
    static effectsVolume = 1;

    static effectMap: Map<cc.AudioClip | string, number>;

    static init() {
        this.effectMap = new Map();
    }

    //停止播放背景音乐
    static stopMusic() {
        cc.audioEngine.stopMusic();
    }

    static pauseMusic() {
        cc.audioEngine.pauseMusic();
    }

    static resumeMusic() {
        cc.audioEngine.resumeMusic();
    }

    static setMusicVolume(volume: number) {
        this.bgmVolume = volume;
        cc.audioEngine.setMusicVolume(this.bgmVolume);
    }

    static setEffectsVolume(volume: number) {
        this.effectsVolume = volume;
        cc.audioEngine.setEffectsVolume(this.effectsVolume);
    }

    /**
     * @param {*} target 跟随目标节点释放资源
     */
    static playSound(sound: cc.AudioClip | string, isLoop = false, target: any = null, bundleName: string = null) {
        if (typeof sound == "string") {
            cc.resources.load(sound, cc.AudioClip, function (err, clip: cc.AudioClip) {
                cc.audioEngine.playEffect(clip, isLoop);
            });
        } else {
            cc.audioEngine.playEffect(sound, isLoop);
        }
    }

    //按钮点击声音
    static playClickAudio(clickSoundName = null) {
        if (clickSoundName == null) {
            clickSoundName = "sound/sound_click";
        }
        this.playSound(clickSoundName);
    }

    static stopEffect(name: string) {
        if (!this.effectMap) return;
        if (!this.effectMap.get(name)) return;
        cc.audioEngine.stopEffect(this.effectMap.get(name));
        this.effectMap.delete(name);
    }

    static stopAllEffect() {
        this.effectMap.clear();
        cc.audioEngine.stopAllEffects();
    }
}
