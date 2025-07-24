
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Game');
require('./assets/Script/Home');
require('./assets/Script/Shoot');
require('./assets/Script/common/AudioMgr');
require('./assets/Script/common/EventManager');
require('./assets/Script/common/HttpHelper');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93154W6vktL8ZYJxjcVBQo1', 'Home');
// Script/Home.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Shoot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e17eTsQXlAsIpppjDUATOu', 'Shoot');
// Script/Shoot.ts

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
var Game_1 = require("./Game");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Shoot = /** @class */ (function (_super) {
    __extends(Shoot, _super);
    function Shoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shoot.prototype.start = function () {
    };
    Shoot.prototype.onBtnShoot = function () {
        Game_1.default.instance.play("1.webp");
    };
    Shoot = __decorate([
        ccclass
    ], Shoot);
    return Shoot;
}(cc.Component));
exports.default = Shoot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7O0lBVUEsQ0FBQztJQVJHLHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsMEJBQVUsR0FBVjtRQUNJLGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFQZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQVV6QjtJQUFELFlBQUM7Q0FWRCxBQVVDLENBVmtDLEVBQUUsQ0FBQyxTQUFTLEdBVTlDO2tCQVZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vR2FtZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIG9uQnRuU2hvb3QoKXtcclxuICAgICAgICBHYW1lLmluc3RhbmNlLnBsYXkoXCIxLndlYnBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eb796du0ilEs5Q+bqAMBIPY', 'EventManager');
// Script/common/EventManager.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMgr = exports.EventManager = exports.Singleton = void 0;
function Singleton() {
    var SingletonClass = /** @class */ (function () {
        function SingletonClass() {
        }
        Object.defineProperty(SingletonClass, "instance", {
            get: function () {
                return (this._instance || (this._instance = new this()));
            },
            enumerable: false,
            configurable: true
        });
        SingletonClass._instance = null;
        return SingletonClass;
    }());
    return SingletonClass;
}
exports.Singleton = Singleton;
var EventManager = /** @class */ (function (_super) {
    __extends(EventManager, _super);
    function EventManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.events = new Map();
        return _this;
    }
    /**
     * 监听事件
     * @param event
     * @param listener
     * @param target
     */
    EventManager.prototype.on = function (event, listener, target) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        var list = this.events.get(event);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            if (item.target === target) {
                return;
            }
        }
        list.push({ event: event, listener: listener, target: target });
    };
    /**
     * 注销事件
     * @param event
     * @param listener
     * @param target
     */
    EventManager.prototype.off = function (event, listener, target) {
        if (this.events.has(event)) {
            var index = this.events
                .get(event)
                .findIndex(function (v) { return (!!listener ? v.listener === listener && v.target === target : v.target === target); });
            index > -1 && this.events.get(event).splice(index, 1);
            if (this.events.get(event).length === 0) {
                this.events.delete(event);
            }
        }
    };
    /**
     * 派发事件
     * @param event
     * @param args
     */
    EventManager.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.events.has(event)) {
            this.events.get(event).forEach(function (_a) {
                var listener = _a.listener, target = _a.target;
                target ? listener.apply(target, args) : listener.apply(void 0, args);
            });
        }
    };
    /**
 * 派发事件
 * @param event
 * @param args
 */
    EventManager.prototype.emitCallBack = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (this.events.has(event)) {
            var list = this.events.get(event);
            if (list.length != 1) {
                // console.warn("监听接口超过一个，不能调用这个接口")
                return;
            }
            var target = list[0].target;
            var listener = list[0].listener;
            return target ? listener.apply(target, args) : listener.apply(void 0, args);
        }
    };
    /**
     * 清空事件map
     * @param event
     */
    EventManager.prototype.clear = function (event) {
        var _this = this;
        if (!event) {
            this.events.forEach(function (list, event) {
                for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                    var item = list_2[_i];
                    _this.off(event, item.listener, item.target);
                }
            });
        }
        else {
            this.events.delete(event);
        }
    };
    /**
     * 删除target所有事件
     * @param target
     */
    EventManager.prototype.clearByTarget = function (target) {
        var _this = this;
        this.events.forEach(function (list, event) {
            for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
                var item = list_3[_i];
                if (item.target === target) {
                    _this.off(event, item.listener, item.target);
                }
            }
        });
    };
    /**
     * 清空所有匿名函数事件
     */
    EventManager.prototype.clearAnon = function () {
        var _this = this;
        var clearList = [];
        this.events.forEach(function (list, event) {
            list = list.filter(function (v) { return v.listener.name !== ""; });
            if (list.length > 0) {
                _this.events.set(event, list);
            }
            else {
                clearList.push(event);
            }
        });
        clearList.forEach(function (event) {
            _this.events.delete(event);
        });
    };
    /**
     * 打印事件
     */
    EventManager.prototype.dump = function () {
        var count = 0;
        this.events.forEach(function (list) {
            list.forEach(function (v) {
                count++;
            });
        });
    };
    /**
     * 获取事件所有监听
     * @param event
     * @returns
     */
    EventManager.prototype.getEventDataList = function (event) {
        return this.events.get(event);
    };
    return EventManager;
}(Singleton()));
exports.EventManager = EventManager;
exports.EventMgr = EventManager.instance;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEV2ZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBZ0IsU0FBUztJQUNyQjtRQU9JO1FBQXlCLENBQUM7UUFKMUIsc0JBQVcsMEJBQVE7aUJBQW5CO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQU0sQ0FBQztZQUNsRSxDQUFDOzs7V0FBQTtRQUpjLHdCQUFTLEdBQW1CLElBQUksQ0FBQztRQU9wRCxxQkFBQztLQVJELEFBUUMsSUFBQTtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQzFCLENBQUM7QUFaRCw4QkFZQztBQU1EO0lBQWtDLGdDQUF5QjtJQUEzRDtRQUFBLHFFQW9KQztRQW5KVyxZQUFNLEdBQTZCLElBQUksR0FBRyxFQUFFLENBQUM7O0lBbUp6RCxDQUFDO0lBakpHOzs7OztPQUtHO0lBQ0gseUJBQUUsR0FBRixVQUFHLEtBQWEsRUFBRSxRQUFrQixFQUFFLE1BQWdCO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxLQUFpQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQWxCLElBQUksSUFBSSxhQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsT0FBTzthQUNWO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FB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QUFNO2dCQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQUksR0FBSjtRQUNJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FwSkEsQUFvSkMsQ0FwSmlDLFNBQVMsRUFBZ0IsR0FvSjFEO0FBcEpZLG9DQUFZO0FBc0paLFFBQUEsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZXRvbjxUPigpIHtcclxuICAgIGNsYXNzIFNpbmdsZXRvbkNsYXNzIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNpbmdsZXRvbkNsYXNzID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBUIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpKSkgYXMgVDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFNpbmdsZXRvbkNsYXNzO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnREYXRhIHtcclxuICAgIGV2ZW50Pzogc3RyaW5nO1xyXG4gICAgbGlzdGVuZXI6IEZ1bmN0aW9uO1xyXG4gICAgdGFyZ2V0PzogYW55O1xyXG59XHJcbmV4cG9ydCBjbGFzcyBFdmVudE1hbmFnZXIgZXh0ZW5kcyBTaW5nbGV0b248RXZlbnRNYW5hZ2VyPigpIHtcclxuICAgIHByaXZhdGUgZXZlbnRzOiBNYXA8c3RyaW5nLCBFdmVudERhdGFbXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm5HlkKzkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKi9cclxuICAgIG9uKGV2ZW50OiBzdHJpbmcsIGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogdW5rbm93bikge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudHMuaGFzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIFtdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3QucHVzaCh7IGV2ZW50LCBsaXN0ZW5lciwgdGFyZ2V0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo6ZSA5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBvZmYoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiB1bmtub3duKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1xyXG4gICAgICAgICAgICAgICAgLmdldChldmVudClcclxuICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHYpID0+ICghIWxpc3RlbmVyID8gdi5saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiYgdi50YXJnZXQgPT09IHRhcmdldCA6IHYudGFyZ2V0ID09PSB0YXJnZXQpKTtcclxuICAgICAgICAgICAgaW5kZXggPiAtMSAmJiB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudHMuZ2V0KGV2ZW50KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtL7lj5Hkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGFyZ3NcclxuICAgICAqL1xyXG4gICAgZW1pdChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmdldChldmVudCkuZm9yRWFjaCgoeyBsaXN0ZW5lciwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA/IGxpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJncykgOiBsaXN0ZW5lciguLi5hcmdzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAqIOa0vuWPkeS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gYXJnc1xyXG4gICAgICovXHJcbiAgICBlbWl0Q2FsbEJhY2soZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOmFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggIT0gMSkgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCLnm5HlkKzmjqXlj6PotoXov4fkuIDkuKrvvIzkuI3og73osIPnlKjov5nkuKrmjqXlj6NcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gbGlzdFswXS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IGxpc3RbMF0ubGlzdGVuZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPyBsaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3MpIDogbGlzdGVuZXIoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF56m65LqL5Lu2bWFwXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqL1xyXG4gICAgY2xlYXIoZXZlbnQ/OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIWV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGxpc3QsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZihldmVudCwgaXRlbS5saXN0ZW5lciwgaXRlbS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIoOmZpHRhcmdldOaJgOacieS6i+S7tlxyXG4gICAgICogQHBhcmFtIHRhcmdldFxyXG4gICAgICovXHJcbiAgICBjbGVhckJ5VGFyZ2V0KHRhcmdldDogdW5rbm93bikge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGxpc3QsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZihldmVudCwgaXRlbS5saXN0ZW5lciwgaXRlbS50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnqbrmiYDmnInljL/lkI3lh73mlbDkuovku7ZcclxuICAgICAqL1xyXG4gICAgY2xlYXJBbm9uKCkge1xyXG4gICAgICAgIGxldCBjbGVhckxpc3Q6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGxpc3QsIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcigodikgPT4gdi5saXN0ZW5lci5uYW1lICE9PSBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNldChldmVudCwgbGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckxpc3QucHVzaChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xlYXJMaXN0LmZvckVhY2goKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPljbDkuovku7ZcclxuICAgICAqL1xyXG4gICAgZHVtcCgpIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W5LqL5Lu25omA5pyJ55uR5ZCsXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldEV2ZW50RGF0YUxpc3QoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnRNZ3IgPSBFdmVudE1hbmFnZXIuaW5zdGFuY2U7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/common/HttpHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6c4d5XTq11OI4WYLV2sGh6l', 'HttpHelper');
// Script/common/HttpHelper.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
var EventManager_1 = require("./EventManager");
var HttpHelper = /** @class */ (function () {
    function HttpHelper() {
    }
    HttpHelper.initBaseUrl = function () {
    };
    HttpHelper.get = function (url) {
        return new Promise(function (resole, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        var res = JSON.parse(xhr.responseText);
                        resole(res);
                    }
                    else {
                        reject("get: " + url + " err");
                    }
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            xhr.timeout = 8000;
            xhr.send();
        });
    };
    HttpHelper.httpGet = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var respone = xhr.responseText;
                    var rsp = JSON.parse(respone);
                    callback === null || callback === void 0 ? void 0 : callback(rsp);
                }
                else {
                    callback === null || callback === void 0 ? void 0 : callback(xhr);
                }
            }
            else {
                callback === null || callback === void 0 ? void 0 : callback(null);
            }
        };
        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null);
            }
        };
        xhr.open("GET", url, true);
        xhr.timeout = 8000;
        xhr.send();
    };
    HttpHelper.HttpPost = function (path, params, callback) {
        var url = HttpHelper.BaseURL + path;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var respone = xhr.responseText;
                    var rsp = JSON.parse(respone);
                    console.log("===POST rsp:", path, rsp);
                }
                else {
                    callback === null || callback === void 0 ? void 0 : callback(null, xhr.status);
                }
            }
        };
        xhr.onerror = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null, error);
                EventManager_1.EventMgr.emit("HttpError", path);
            }
        };
        xhr.ontimeout = function (error) {
            if (typeof callback == "function") {
                callback === null || callback === void 0 ? void 0 : callback(null, "timeout");
                EventManager_1.EventMgr.emit("HttpTimeOut", path);
            }
        };
        xhr.open("POST", url, true);
        xhr.timeout = 8000;
        xhr.setRequestHeader("Content-Type", "application/json;charset=Utf-8");
        if (HttpHelper.token) {
            xhr.setRequestHeader("Authorization", HttpHelper.token);
            xhr.setRequestHeader("appVersion", "0.0.0");
            xhr.setRequestHeader("deviceId", "test_123456");
            xhr.setRequestHeader("deviceName", "test_iPhone");
            xhr.setRequestHeader("deviceType", "1");
            xhr.setRequestHeader("systemVersion", "605.1.15");
        }
        var str = JSON.stringify(params);
        if (params) {
            xhr.send(str);
        }
        else {
            xhr.send();
        }
    };
    HttpHelper.BaseURL = "https://test-youyin.daqiezi.cc/game/logic-api/"; // logic/getPlayerInfo
    HttpHelper.token = "";
    return HttpHelper;
}());
exports.HttpHelper = HttpHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25cXEh0dHBIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdDO0FBRXhDO0lBQUE7SUF5R0EsQ0FBQztJQXRHVSxzQkFBVyxHQUFsQjtJQUNBLENBQUM7SUFFTSxjQUFHLEdBQVYsVUFBYyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTtZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLFVBQVEsR0FBRyxTQUFNLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRztnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsUUFBNEI7UUFDcEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztR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LENBQUMsS0FBSyxFQUFDO1lBQ2hCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBRyxNQUFNLEVBQUM7WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUF0R00sa0JBQU8sR0FBRyxnREFBZ0QsQ0FBQyxDQUFBLHNCQUFzQjtJQUNqRixnQkFBSyxHQUFHLEVBQUUsQ0FBQztJQXVHdEIsaUJBQUM7Q0F6R0QsQUF5R0MsSUFBQTtBQXpHWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRNZ3J9IGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBIZWxwZXIge1xyXG4gICAgc3RhdGljIEJhc2VVUkwgPSBcImh0dHBzOi8vdGVzdC15b3V5aW4uZGFxaWV6aS5jYy9nYW1lL2xvZ2ljLWFwaS9cIjsvLyBsb2dpYy9nZXRQbGF5ZXJJbmZvXHJcbiAgICBzdGF0aWMgdG9rZW4gPSBcIlwiO1xyXG4gICAgc3RhdGljIGluaXRCYXNlVXJsKCkge1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0PFQ+KHVybDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2xlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBnZXQ6ICR7dXJsfSBlcnJgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA4MDAwO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBodHRwR2V0KHVybDogc3RyaW5nLCBjYWxsYmFjazogKHJlczogYW55KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s/Lihyc3ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKHhocik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cclxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgSHR0cFBvc3QocGF0aCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB1cmwgPSBIdHRwSGVscGVyLkJhc2VVUkwgKyBwYXRoO1xyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkgeyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT1QT1NUIHJzcDpcIiwgcGF0aCxyc3ApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwsIHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s/LihudWxsLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1nci5lbWl0KFwiSHR0cEVycm9yXCIsIHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwsIFwidGltZW91dFwiKTtcclxuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJIdHRwVGltZU91dFwiLCBwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsgXHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VXRmLThcIik7XHJcbiAgICAgICAgaWYoSHR0cEhlbHBlci50b2tlbil7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBIdHRwSGVscGVyLnRva2VuKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJhcHBWZXJzaW9uXCIgLFwiMC4wLjBcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlSWRcIiAsXCJ0ZXN0XzEyMzQ1NlwiKTtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJkZXZpY2VOYW1lXCIgLFwidGVzdF9pUGhvbmVcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlVHlwZVwiICxcIjFcIik7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwic3lzdGVtVmVyc2lvblwiICwgXCI2MDUuMS4xNVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XHJcbiAgICAgICAgaWYocGFyYW1zKXtcclxuICAgICAgICAgICAgeGhyLnNlbmQoc3RyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
