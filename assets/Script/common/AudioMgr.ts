export class AudioMgr {
    static bgAudioSource: cc.AudioSource = null;
    static bgmVolume = 1;
    static effectsVolume = 1;

    // static effectMap: Map<cc.AudioClip | string, number>;

    static init() {
        let str = cc.sys.localStorage.getItem("isPaused");
        AudioMgr.isPaused = str=="1"?true:false;
    }
    static isPaused = false;

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
        if(AudioMgr.isPaused){
            return;
        }
        if (typeof sound == "string") {
            cc.resources.load(sound, cc.AudioClip, function (err, clip: cc.AudioClip) {
                cc.audioEngine.playEffect(clip, isLoop);
            });
        } else {
            cc.audioEngine.playEffect(sound, isLoop);
        }
    }

}
