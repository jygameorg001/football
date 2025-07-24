
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY29tbW9uL0F1ZGlvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrRUEsQ0FBQztJQTNEVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7SUFDSCxrQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sb0JBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1QkFBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0seUJBQWdCLEdBQXZCLFVBQXdCLE1BQWM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQVMsR0FBaEIsVUFBaUIsS0FBNEIsRUFBRSxNQUFjLEVBQUUsTUFBa0IsRUFBRSxVQUF5QjtRQUE3RCx1QkFBQSxFQUFBLGNBQWM7UUFBRSx1QkFBQSxFQUFBLGFBQWtCO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7UUFDeEcsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBa0I7Z0JBQ3BFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNELHVCQUFjLEdBQXJCLFVBQXNCLGNBQXFCO1FBQXJCLCtCQUFBLEVBQUEscUJBQXFCO1FBQ3ZDLElBQUksY0FBYyxJQUFJLElBQUksRUFBRTtZQUN4QixjQUFjLEdBQUcsbUJBQW1CLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQWhFTSxzQkFBYSxHQUFtQixJQUFJLENBQUM7SUFDckMsa0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxzQkFBYSxHQUFHLENBQUMsQ0FBQztJQStEN0IsZUFBQztDQWxFRCxBQWtFQyxJQUFBO0FBbEVZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1ZGlvTWdyIHtcbiAgICBzdGF0aWMgYmdBdWRpb1NvdXJjZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIHN0YXRpYyBiZ21Wb2x1bWUgPSAxO1xuICAgIHN0YXRpYyBlZmZlY3RzVm9sdW1lID0gMTtcblxuICAgIHN0YXRpYyBlZmZlY3RNYXA6IE1hcDxjYy5BdWRpb0NsaXAgfCBzdHJpbmcsIG51bWJlcj47XG5cbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy/lgZzmraLmkq3mlL7og4zmma/pn7PkuZBcbiAgICBzdGF0aWMgc3RvcE11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGF1c2VNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuYmdtVm9sdW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RWZmZWN0c1ZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVmZmVjdHNWb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5lZmZlY3RzVm9sdW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldCDot5/pmo/nm67moIfoioLngrnph4rmlL7otYTmupBcbiAgICAgKi9cbiAgICBzdGF0aWMgcGxheVNvdW5kKHNvdW5kOiBjYy5BdWRpb0NsaXAgfCBzdHJpbmcsIGlzTG9vcCA9IGZhbHNlLCB0YXJnZXQ6IGFueSA9IG51bGwsIGJ1bmRsZU5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VuZCA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChzb3VuZCwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzTG9vcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc291bmQsIGlzTG9vcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aMiemSrueCueWHu+WjsOmfs1xuICAgIHN0YXRpYyBwbGF5Q2xpY2tBdWRpbyhjbGlja1NvdW5kTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGNsaWNrU291bmROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIGNsaWNrU291bmROYW1lID0gXCJzb3VuZC9zb3VuZF9jbGlja1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheVNvdW5kKGNsaWNrU291bmROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RvcEVmZmVjdChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVmZmVjdE1hcCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuZWZmZWN0TWFwLmdldChuYW1lKSkgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuZWZmZWN0TWFwLmdldChuYW1lKSk7XG4gICAgICAgIHRoaXMuZWZmZWN0TWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RvcEFsbEVmZmVjdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RNYXAuY2xlYXIoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICB9XG59XG4iXX0=