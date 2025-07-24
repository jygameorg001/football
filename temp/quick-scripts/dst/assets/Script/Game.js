
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1fe1frOruxLYp0rgisVHu/c', 'Game');
// Script/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var EventManager_1 = require("./common/EventManager");
var HttpHelper_1 = require("./common/HttpHelper");
var Token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNjAxODgzLCJsb2dpbl90eXBlIjoxLCJ1c2VyX2tleSI6IjlkODU1NDg0LWRhZGQtNDgxMC04YTg3LTM1OGJkMzRmYmViZSIsInRva2VuX3R5cGUiOiJhcHAiLCJ1c2VybmFtZSI6IuS8mOmfszcwOTgwMiJ9.SFlJPBuh9na9JW7P5pWJTHdWribEN28JVvfq4a5zLr22qyeh2Vfkq22Z6KiqKB2QszOMtEoJqlMEbv1l-8qPPg";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game_1 = Game;
    Game.prototype.onLoad = function () {
        Game_1.instance = this;
        this.initEvents();
        this.initWebpImg();
        this.initUserInfo();
    };
    Game.prototype.initEvents = function () {
        EventManager_1.EventMgr.on("onGetUserInfo", this.onGetUserInfo, this);
    };
    Game.prototype.initUserInfo = function () {
        var WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
        if (WebViewJavascriptBridge) {
            WebViewJavascriptBridge.callHandler("getUserInfo", {}, function (res) {
                console.log("====", res);
                if (typeof res == "object") {
                    HttpHelper_1.HttpHelper.token = res.appToken;
                }
                if (typeof res == "string") {
                    var userInfo = JSON.parse(res);
                    HttpHelper_1.HttpHelper.token = userInfo.appToken;
                }
                EventManager_1.EventMgr.emit("onGetUserInfo");
            });
            return;
        }
        HttpHelper_1.HttpHelper.token = Token;
        EventManager_1.EventMgr.emit("onGetUserInfo");
    };
    Game.prototype.onGetUserInfo = function () {
        // 获取用户数据
        HttpHelper_1.HttpHelper.HttpPost("logic/getPlayerInfo", {}, function (err, data) {
            console.log("====获取用户数据");
        });
    };
    Game.prototype.onDestroy = function () {
        Game_1.instance = null;
        EventManager_1.EventMgr.clearByTarget(this);
    };
    Game.prototype.start = function () {
    };
    Game.prototype.initWebpImg = function () {
        var img = document.createElement('img');
        // img.src = 'webp/1.webp';
        // 设置样式属性（可选）
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.width = '375';
        img.style.height = 'auto';
        // 默认隐藏
        img.style.display = 'none';
        // 添加到 DOM
        document.body.appendChild(img);
        this.img = img;
    };
    Game.prototype.play = function (src) {
        this.img.src = "webp/" + src;
        this.img.style.display = 'block';
    };
    var Game_1;
    Game.instance = null;
    Game = Game_1 = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUErQztBQUMvQyxrREFBK0M7QUFDL0MsSUFBTSxLQUFLLEdBQUUsMFJBQTBSLENBQUM7QUFDbFMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFpQjFDO0lBQWtDLHdCQUFZO0lBQTlDOztJQWtFQSxDQUFDO2FBbEVvQixJQUFJO0lBR1gscUJBQU0sR0FBaEI7UUFDSSxNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QseUJBQVUsR0FBVjtRQUNJLHVCQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDRCwyQkFBWSxHQUFaO1FBQ0ksSUFBSSx1QkFBdUIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNoRSxJQUFHLHVCQUF1QixFQUFDO1lBQ3ZCLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxFQUFFLFVBQVMsR0FBYztnQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUcsT0FBTyxHQUFHLElBQUksUUFBUSxFQUFDO29CQUN0Qix1QkFBVSxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUNqQztnQkFDRCxJQUFHLE9BQVEsR0FBRyxJQUFJLFFBQVEsRUFBQztvQkFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsdUJBQVUsQ0FBQyxLQUFLLEdBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDdEM7Z0JBQ0QsdUJBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7UUFDRCx1QkFBVSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7UUFDdkIsdUJBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUNELDRCQUFhLEdBQWI7UUFDSSxTQUFTO1FBQ1QsdUJBQVUsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDUyx3QkFBUyxHQUFuQjtRQUNJLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHVCQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFXLEdBQVg7UUFDSSxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLDJCQUEyQjtRQUMzQixhQUFhO1FBQ2IsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNyQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDcEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMxQixPQUFPO1FBQ1AsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzNCLFVBQVU7UUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBQ0QsbUJBQUksR0FBSixVQUFLLEdBQUc7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUMsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDckMsQ0FBQzs7SUE5RGEsYUFBUSxHQUFTLElBQUksQ0FBQztJQURuQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa0V4QjtJQUFELFdBQUM7Q0FsRUQsQUFrRUMsQ0FsRWlDLEVBQUUsQ0FBQyxTQUFTLEdBa0U3QztrQkFsRW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50TWdyfSBmcm9tIFwiLi9jb21tb24vRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7SHR0cEhlbHBlcn0gZnJvbSBcIi4vY29tbW9uL0h0dHBIZWxwZXJcIjtcclxuY29uc3QgVG9rZW4gPVwiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKMWMyVnlYMmxrSWpveE5qQXhPRGd6TENKc2IyZHBibDkwZVhCbElqb3hMQ0oxYzJWeVgydGxlU0k2SWpsa09EVTFORGcwTFdSaFpHUXRORGd4TUMwNFlUZzNMVE0xT0dKa016Um1ZbVZpWlNJc0luUnZhMlZ1WDNSNWNHVWlPaUpoY0hBaUxDSjFjMlZ5Ym1GdFpTSTZJdVM4bU9tZnN6Y3dPVGd3TWlKOS5TRmxKUEJ1aDluYTlKVzdQNXBXSlRIZFdyaWJFTjI4SlZ2ZnE0YTV6THIyMnF5ZWgyVmZrcTIyWjZLaXFLQjJRc3pPTXRFb0pxbE1FYnYxbC04cVBQZ1wiO1xyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJbmZvIHtcclxuICBhcHBUb2tlbjogc3RyaW5nOyAvLyBhcHBUb2tlblxyXG4gIGF1dGhTdGF0dXM6IDAgfCAxOyAvLyDlrp7lkI3nirbmgIHvvJowLT7mnKrlrp7lkI3vvIwxLT7lt7Llrp7lkI1cclxuICBhdmF0YXI6IHN0cmluZztcclxuICBlbVRva2VuOiBzdHJpbmc7IC8vIOeOr+S/oWVtVG9rZW5cclxuICBmaXJzdExvZ2luOiBib29sZWFuO1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XHJcbiAgcmVnaXN0ZXJUeXBlOiAxIHwgMiB8IDMgfCA0OyAvLyDms6jlhoznsbvlnovvvJoxLT7miYvmnLrnmbvlvZXms6jlhozvvIwyLT7lvq7kv6HnmbvlvZXms6jlhozvvIwzLT7oi7nmnpznmbvlvZXms6jlhozvvIw0LT5RUeeZu+W9leazqOWGjFxyXG4gIHRlZW5Nb2RlU3dpdGNoOiAxIHwgMDtcclxuICB1c2VySWQ6IG51bWJlcjtcclxuICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gIHVzZXJUeXBlOiAxIHwgMjsgLy8g55So5oi357G75Z6L77yaMS3nlKjmiLfvvIwyLeS4u+aSrVxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEdhbWUgPSBudWxsO1xyXG4gICAgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBHYW1lLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmluaXRXZWJwSW1nKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VXNlckluZm8oKTtcclxuICAgIH1cclxuICAgIGluaXRFdmVudHMoKXtcclxuICAgICAgICBFdmVudE1nci5vbihcIm9uR2V0VXNlckluZm9cIix0aGlzLm9uR2V0VXNlckluZm8sdGhpcyk7XHJcbiAgICB9XHJcbiAgICBpbml0VXNlckluZm8oKXtcclxuICAgICAgICBsZXQgV2ViVmlld0phdmFzY3JpcHRCcmlkZ2UgPSB3aW5kb3dbXCJXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZVwiXTtcclxuICAgICAgICBpZihXZWJWaWV3SmF2YXNjcmlwdEJyaWRnZSl7XHJcbiAgICAgICAgICAgIFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlLmNhbGxIYW5kbGVyKFwiZ2V0VXNlckluZm9cIiwge30sIGZ1bmN0aW9uKHJlczogSVVzZXJJbmZvKSB7IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09XCIscmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiByZXMgPT0gXCJvYmplY3RcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cEhlbHBlci50b2tlbj1yZXMuYXBwVG9rZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgIHJlcyA9PSBcInN0cmluZ1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSBKU09OLnBhcnNlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgSHR0cEhlbHBlci50b2tlbj11c2VySW5mby5hcHBUb2tlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJvbkdldFVzZXJJbmZvXCIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEh0dHBIZWxwZXIudG9rZW49VG9rZW47XHJcbiAgICAgICAgRXZlbnRNZ3IuZW1pdChcIm9uR2V0VXNlckluZm9cIilcclxuICAgIH1cclxuICAgIG9uR2V0VXNlckluZm8oKXtcclxuICAgICAgICAvLyDojrflj5bnlKjmiLfmlbDmja5cclxuICAgICAgICBIdHRwSGVscGVyLkh0dHBQb3N0KFwibG9naWMvZ2V0UGxheWVySW5mb1wiLCB7fSwgKGVyciwgZGF0YSk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT096I635Y+W55So5oi35pWw5o2uXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBHYW1lLmluc3RhbmNlID0gbnVsbDtcclxuICAgICAgICBFdmVudE1nci5jbGVhckJ5VGFyZ2V0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGluaXRXZWJwSW1nKCl7XHJcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgLy8gaW1nLnNyYyA9ICd3ZWJwLzEud2VicCc7XHJcbiAgICAgICAgLy8g6K6+572u5qC35byP5bGe5oCn77yI5Y+v6YCJ77yJXHJcbiAgICAgICAgaW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBpbWcuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICBpbWcuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIGltZy5zdHlsZS53aWR0aCA9ICczNzUnO1xyXG4gICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgLy8g6buY6K6k6ZqQ6JePXHJcbiAgICAgICAgaW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IFxyXG4gICAgICAgIC8vIOa3u+WKoOWIsCBET01cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBpbWc7XHJcbiAgICB9XHJcbiAgICBwbGF5KHNyYyl7XHJcbiAgICAgICAgdGhpcy5pbWcuc3JjID0gXCJ3ZWJwL1wiK3NyYztcclxuICAgICAgICB0aGlzLmltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==