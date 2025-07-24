"use strict";
cc._RF.push(module, 'd904azS9+9C5rH/a6dsOXTK', 'AudioMgr');
// Script/common/AudioMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioMgr = void 0;
var AudioMgr = /** @class */ (function () {
    function AudioMgr() {
    }
    AudioMgr.init = function () {
        this.effectMap = new Map();
    };
    //停止播放背景音乐
    AudioMgr.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    AudioMgr.pauseMusic = function () {
        cc.audioEngine.pauseMusic();
    };
    AudioMgr.resumeMusic = function () {
        cc.audioEngine.resumeMusic();
    };
    AudioMgr.setMusicVolume = function (volume) {
        this.bgmVolume = volume;
        cc.audioEngine.setMusicVolume(this.bgmVolume);
    };
    AudioMgr.setEffectsVolume = function (volume) {
        this.effectsVolume = volume;
        cc.audioEngine.setEffectsVolume(this.effectsVolume);
    };
    /**
     * @param {*} target 跟随目标节点释放资源
     */
    AudioMgr.playSound = function (sound, isLoop, target, bundleName) {
        if (isLoop === void 0) { isLoop = false; }
        if (target === void 0) { target = null; }
        if (bundleName === void 0) { bundleName = null; }
        if (typeof sound == "string") {
            cc.resources.load(sound, cc.AudioClip, function (err, clip) {
                cc.audioEngine.playEffect(clip, isLoop);
            });
        }
        else {
            cc.audioEngine.playEffect(sound, isLoop);
        }
    };
    //按钮点击声音
    AudioMgr.playClickAudio = function (clickSoundName) {
        if (clickSoundName === void 0) { clickSoundName = null; }
        if (clickSoundName == null) {
            clickSoundName = "sound/sound_click";
        }
        this.playSound(clickSoundName);
    };
    AudioMgr.stopEffect = function (name) {
        if (!this.effectMap)
            return;
        if (!this.effectMap.get(name))
            return;
        cc.audioEngine.stopEffect(this.effectMap.get(name));
        this.effectMap.delete(name);
    };
    AudioMgr.stopAllEffect = function () {
        this.effectMap.clear();
        cc.audioEngine.stopAllEffects();
    };
    AudioMgr.bgAudioSource = null;
    AudioMgr.bgmVolume = 1;
    AudioMgr.effectsVolume = 1;
    return AudioMgr;
}());
exports.AudioMgr = AudioMgr;

cc._RF.pop();