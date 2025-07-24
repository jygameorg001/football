
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMzQixVQUFVO1FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELG1CQUFJLEdBQUosVUFBSyxHQUFHO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3JDLENBQUM7O0lBOURhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFEbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtFeEI7SUFBRCxXQUFDO0NBbEVELEFBa0VDLENBbEVpQyxFQUFFLENBQUMsU0FBUyxHQWtFN0M7a0JBbEVvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudE1ncn0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHtIdHRwSGVscGVyfSBmcm9tIFwiLi9jb21tb24vSHR0cEhlbHBlclwiO1xuY29uc3QgVG9rZW4gPVwiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKMWMyVnlYMmxrSWpveE5qQXhPRGd6TENKc2IyZHBibDkwZVhCbElqb3hMQ0oxYzJWeVgydGxlU0k2SWpsa09EVTFORGcwTFdSaFpHUXRORGd4TUMwNFlUZzNMVE0xT0dKa016Um1ZbVZpWlNJc0luUnZhMlZ1WDNSNWNHVWlPaUpoY0hBaUxDSjFjMlZ5Ym1GdFpTSTZJdVM4bU9tZnN6Y3dPVGd3TWlKOS5TRmxKUEJ1aDluYTlKVzdQNXBXSlRIZFdyaWJFTjI4SlZ2ZnE0YTV6THIyMnF5ZWgyVmZrcTIyWjZLaXFLQjJRc3pPTXRFb0pxbE1FYnYxbC04cVBQZ1wiO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJbmZvIHtcbiAgYXBwVG9rZW46IHN0cmluZzsgLy8gYXBwVG9rZW5cbiAgYXV0aFN0YXR1czogMCB8IDE7IC8vIOWunuWQjeeKtuaAge+8mjAtPuacquWunuWQje+8jDEtPuW3suWunuWQjVxuICBhdmF0YXI6IHN0cmluZztcbiAgZW1Ub2tlbjogc3RyaW5nOyAvLyDnjq/kv6FlbVRva2VuXG4gIGZpcnN0TG9naW46IGJvb2xlYW47XG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gIHJlZ2lzdGVyVHlwZTogMSB8IDIgfCAzIHwgNDsgLy8g5rOo5YaM57G75Z6L77yaMS0+5omL5py655m75b2V5rOo5YaM77yMMi0+5b6u5L+h55m75b2V5rOo5YaM77yMMy0+6Iu55p6c55m75b2V5rOo5YaM77yMNC0+UVHnmbvlvZXms6jlhoxcbiAgdGVlbk1vZGVTd2l0Y2g6IDEgfCAwO1xuICB1c2VySWQ6IG51bWJlcjtcbiAgdXNlck5hbWU6IHN0cmluZztcbiAgdXNlclR5cGU6IDEgfCAyOyAvLyDnlKjmiLfnsbvlnovvvJoxLeeUqOaIt++8jDIt5Li75pKtXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lID0gbnVsbDtcbiAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgICAgICB0aGlzLmluaXRXZWJwSW1nKCk7XG4gICAgICAgIHRoaXMuaW5pdFVzZXJJbmZvKCk7XG4gICAgfVxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgRXZlbnRNZ3Iub24oXCJvbkdldFVzZXJJbmZvXCIsdGhpcy5vbkdldFVzZXJJbmZvLHRoaXMpO1xuICAgIH1cbiAgICBpbml0VXNlckluZm8oKXtcbiAgICAgICAgbGV0IFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlID0gd2luZG93W1wiV2ViVmlld0phdmFzY3JpcHRCcmlkZ2VcIl07XG4gICAgICAgIGlmKFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlKXtcbiAgICAgICAgICAgIFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlLmNhbGxIYW5kbGVyKFwiZ2V0VXNlckluZm9cIiwge30sIGZ1bmN0aW9uKHJlczogSVVzZXJJbmZvKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PVwiLHJlcyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHJlcyA9PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgSHR0cEhlbHBlci50b2tlbj1yZXMuYXBwVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAgcmVzID09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIEh0dHBIZWxwZXIudG9rZW49dXNlckluZm8uYXBwVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJvbkdldFVzZXJJbmZvXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBIdHRwSGVscGVyLnRva2VuPVRva2VuO1xuICAgICAgICBFdmVudE1nci5lbWl0KFwib25HZXRVc2VySW5mb1wiKVxuICAgIH1cbiAgICBvbkdldFVzZXJJbmZvKCl7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+aVsOaNrlxuICAgICAgICBIdHRwSGVscGVyLkh0dHBQb3N0KFwibG9naWMvZ2V0UGxheWVySW5mb1wiLCB7fSwgKGVyciwgZGF0YSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PeiOt+WPlueUqOaIt+aVsOaNrlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIEdhbWUuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICBFdmVudE1nci5jbGVhckJ5VGFyZ2V0KHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIGluaXRXZWJwSW1nKCl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAvLyBpbWcuc3JjID0gJ3dlYnAvMS53ZWJwJztcbiAgICAgICAgLy8g6K6+572u5qC35byP5bGe5oCn77yI5Y+v6YCJ77yJXG4gICAgICAgIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBpbWcuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAnMzc1JztcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgLy8g6buY6K6k6ZqQ6JePXG4gICAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbiAgICAgICAgLy8g5re75Yqg5YiwIERPTVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgIH1cbiAgICBwbGF5KHNyYyl7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwid2VicC9cIitzcmM7XG4gICAgICAgIHRoaXMuaW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=