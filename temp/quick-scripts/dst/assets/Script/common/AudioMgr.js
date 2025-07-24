
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/AudioMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEF1ZGlvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrRUEsQ0FBQztJQTNEVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7SUFDSCxrQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sb0JBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1QkFBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0seUJBQWdCLEdBQXZCLFVBQXdCLE1BQWM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQVMsR0FBaEIsVUFBaUIsS0FBNEIsRUFBRSxNQUFjLEVBQUUsTUFBa0IsRUFBRSxVQUF5QjtRQUE3RCx1QkFBQSxFQUFBLGNBQWM7UUFBRSx1QkFBQSxFQUFBLGFBQWtCO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7UUFDeEcsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBa0I7Z0JBQ3BFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNELHVCQUFjLEdBQXJCLFVBQXNCLGNBQXFCO1FBQXJCLCtCQUFBLEVBQUEscUJBQXFCO1FBQ3ZDLElBQUksY0FBYyxJQUFJLElBQUksRUFBRTtZQUN4QixjQUFjLEdBQUcsbUJBQW1CLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQWhFTSxzQkFBYSxHQUFtQixJQUFJLENBQUM7SUFDckMsa0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxzQkFBYSxHQUFHLENBQUMsQ0FBQztJQStEN0IsZUFBQztDQWxFRCxBQWtFQyxJQUFBO0FBbEVZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1ZGlvTWdyIHtcclxuICAgIHN0YXRpYyBiZ0F1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XHJcbiAgICBzdGF0aWMgYmdtVm9sdW1lID0gMTtcclxuICAgIHN0YXRpYyBlZmZlY3RzVm9sdW1lID0gMTtcclxuXHJcbiAgICBzdGF0aWMgZWZmZWN0TWFwOiBNYXA8Y2MuQXVkaW9DbGlwIHwgc3RyaW5nLCBudW1iZXI+O1xyXG5cclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0TWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5YGc5q2i5pKt5pS+6IOM5pmv6Z+z5LmQXHJcbiAgICBzdGF0aWMgc3RvcE11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwYXVzZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVzdW1lTXVzaWMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmJnbVZvbHVtZSA9IHZvbHVtZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh0aGlzLmJnbVZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEVmZmVjdHNWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmVmZmVjdHNWb2x1bWUgPSB2b2x1bWU7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh0aGlzLmVmZmVjdHNWb2x1bWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHsqfSB0YXJnZXQg6Lef6ZqP55uu5qCH6IqC54K56YeK5pS+6LWE5rqQXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBwbGF5U291bmQoc291bmQ6IGNjLkF1ZGlvQ2xpcCB8IHN0cmluZywgaXNMb29wID0gZmFsc2UsIHRhcmdldDogYW55ID0gbnVsbCwgYnVuZGxlTmFtZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc291bmQgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChzb3VuZCwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgaXNMb29wKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChzb3VuZCwgaXNMb29wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/mjInpkq7ngrnlh7vlo7Dpn7NcclxuICAgIHN0YXRpYyBwbGF5Q2xpY2tBdWRpbyhjbGlja1NvdW5kTmFtZSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoY2xpY2tTb3VuZE5hbWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGlja1NvdW5kTmFtZSA9IFwic291bmQvc291bmRfY2xpY2tcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5U291bmQoY2xpY2tTb3VuZE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdG9wRWZmZWN0KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5lZmZlY3RNYXApIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuZWZmZWN0TWFwLmdldChuYW1lKSkgcmV0dXJuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodGhpcy5lZmZlY3RNYXAuZ2V0KG5hbWUpKTtcclxuICAgICAgICB0aGlzLmVmZmVjdE1hcC5kZWxldGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN0b3BBbGxFZmZlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lZmZlY3RNYXAuY2xlYXIoKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==