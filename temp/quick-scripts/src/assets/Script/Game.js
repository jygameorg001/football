"use strict";
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