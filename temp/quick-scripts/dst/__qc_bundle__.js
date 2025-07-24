
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2hvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBRXBCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW1DLHlCQUFZO0lBQS9DOztJQVVBLENBQUM7SUFSRyxxQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFVLEdBQVY7UUFDSSxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBUGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FVekI7SUFBRCxZQUFDO0NBVkQsQUFVQyxDQVZrQyxFQUFFLENBQUMsU0FBUyxHQVU5QztrQkFWb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG9vdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgb25CdG5TaG9vdCgpe1xuICAgICAgICBHYW1lLmluc3RhbmNlLnBsYXkoXCIxLndlYnBcIik7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY29tbW9uL0V2ZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBZ0IsU0FBUztJQUNyQjtRQU9JO1FBQXlCLENBQUM7UUFKMUIsc0JBQVcsMEJBQVE7aUJBQW5CO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQU0sQ0FBQztZQUNsRSxDQUFDOzs7V0FBQTtRQUpjLHdCQUFTLEdBQW1CLElBQUksQ0FBQztRQU9wRCxxQkFBQztLQVJELEFBUUMsSUFBQTtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQzFCLENBQUM7QUFaRCw4QkFZQztBQU1EO0lBQWtDLGdDQUF5QjtJQUEzRDtRQUFBLHFFQW9KQztRQW5KVyxZQUFNLEdBQTZCLElBQUksR0FBRyxFQUFFLENBQUM7O0lBbUp6RCxDQUFDO0lBakpHOzs7OztPQUtHO0lBQ0gseUJBQUUsR0FBRixVQUFHLEtBQWEsRUFBRSxRQUFrQixFQUFFLE1BQWdCO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxLQUFpQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQWxCLElBQUksSUFBSSxhQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDeEIsT0FBTzthQUNWO1NBQ0o7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxP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O2dCQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQUksR0FBSjtRQUNJLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHVDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FwSkEsQUFvSkMsQ0FwSmlDLFNBQVMsRUFBZ0IsR0FvSjFEO0FBcEpZLG9DQUFZO0FBc0paLFFBQUEsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBTaW5nbGV0b248VD4oKSB7XG4gICAgY2xhc3MgU2luZ2xldG9uQ2xhc3Mge1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNpbmdsZXRvbkNsYXNzID0gbnVsbDtcblxuICAgICAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFQge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9pbnN0YW5jZSB8fCAodGhpcy5faW5zdGFuY2UgPSBuZXcgdGhpcygpKSkgYXMgVDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIFNpbmdsZXRvbkNsYXNzO1xufVxuZXhwb3J0IGludGVyZmFjZSBFdmVudERhdGEge1xuICAgIGV2ZW50Pzogc3RyaW5nO1xuICAgIGxpc3RlbmVyOiBGdW5jdGlvbjtcbiAgICB0YXJnZXQ/OiBhbnk7XG59XG5leHBvcnQgY2xhc3MgRXZlbnRNYW5hZ2VyIGV4dGVuZHMgU2luZ2xldG9uPEV2ZW50TWFuYWdlcj4oKSB7XG4gICAgcHJpdmF0ZSBldmVudHM6IE1hcDxzdHJpbmcsIEV2ZW50RGF0YVtdPiA9IG5ldyBNYXAoKTtcblxuICAgIC8qKlxuICAgICAqIOebkeWQrOS6i+S7tlxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBvbihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IHVua25vd24pIHtcbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5zZXQoZXZlbnQsIFtdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5ldmVudHMuZ2V0KGV2ZW50KTtcblxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnRhcmdldCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKHsgZXZlbnQsIGxpc3RlbmVyLCB0YXJnZXQgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rOo6ZSA5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHRhcmdldFxuICAgICAqL1xuICAgIG9mZihldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IHVua25vd24pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmhhcyhldmVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNcbiAgICAgICAgICAgICAgICAuZ2V0KGV2ZW50KVxuICAgICAgICAgICAgICAgIC5maW5kSW5kZXgoKHYpID0+ICghIWxpc3RlbmVyID8gdi5saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiYgdi50YXJnZXQgPT09IHRhcmdldCA6IHYudGFyZ2V0ID09PSB0YXJnZXQpKTtcbiAgICAgICAgICAgIGluZGV4ID4gLTEgJiYgdGhpcy5ldmVudHMuZ2V0KGV2ZW50KS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudHMuZ2V0KGV2ZW50KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5kZWxldGUoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rS+5Y+R5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBlbWl0KGV2ZW50OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpLmZvckVhY2goKHsgbGlzdGVuZXIsIHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID8gbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBhcmdzKSA6IGxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICog5rS+5Y+R5LqL5Lu2XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBlbWl0Q2FsbEJhY2soZXZlbnQ6IHN0cmluZywgLi4uYXJnczogYW55W10pOmFueSB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50cy5oYXMoZXZlbnQpKSB7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZXZlbnRzLmdldChldmVudCk7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggIT0gMSkgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKFwi55uR5ZCs5o6l5Y+j6LaF6L+H5LiA5Liq77yM5LiN6IO96LCD55So6L+Z5Liq5o6l5Y+jXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGxpc3RbMF0udGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gbGlzdFswXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQgPyBsaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3MpIDogbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuIXnqbrkuovku7ZtYXBcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKi9cbiAgICBjbGVhcihldmVudD86IHN0cmluZykge1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChsaXN0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZihldmVudCwgaXRlbS5saXN0ZW5lciwgaXRlbS50YXJnZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZGVsZXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIoOmZpHRhcmdldOaJgOacieS6i+S7tlxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBjbGVhckJ5VGFyZ2V0KHRhcmdldDogdW5rbm93bikge1xuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChsaXN0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmYoZXZlbnQsIGl0ZW0ubGlzdGVuZXIsIGl0ZW0udGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4heepuuaJgOacieWMv+WQjeWHveaVsOS6i+S7tlxuICAgICAqL1xuICAgIGNsZWFyQW5vbigpIHtcbiAgICAgICAgbGV0IGNsZWFyTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChsaXN0LCBldmVudCkgPT4ge1xuICAgICAgICAgICAgbGlzdCA9IGxpc3QuZmlsdGVyKCh2KSA9PiB2Lmxpc3RlbmVyLm5hbWUgIT09IFwiXCIpO1xuXG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGV2ZW50LCBsaXN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJMaXN0LnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjbGVhckxpc3QuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmRlbGV0ZShldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJk+WNsOS6i+S7tlxuICAgICAqL1xuICAgIGR1bXAoKSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluS6i+S7tuaJgOacieebkeWQrFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZ2V0RXZlbnREYXRhTGlzdChldmVudDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5nZXQoZXZlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50TWdyID0gRXZlbnRNYW5hZ2VyLmluc3RhbmNlO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlCQztRQWRHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVE7MENBQ2M7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBaUI1QjtJQUFELGVBQUM7Q0FqQkQsQUFpQkMsQ0FqQnFDLEVBQUUsQ0FBQyxTQUFTLEdBaUJqRDtrQkFqQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHRleHQ6IHN0cmluZyA9ICdoZWxsbyc7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY29tbW9uL0h0dHBIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdDO0FBRXhDO0lBQUE7SUF5R0EsQ0FBQztJQXRHVSxzQkFBVyxHQUFsQjtJQUNBLENBQUM7SUFFTSxjQUFHLEdBQVYsVUFBYyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsTUFBTTtZQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1lBRS9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxJQUFJLEVBQUU7b0JBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsTUFBTSxDQUFDLFVBQVEsR0FBRyxTQUFNLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBRztnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO1lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTNCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsUUFBNEI7UUFDcEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMv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QUMsS0FBSyxFQUFDO1lBQ2hCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNoRCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBRyxNQUFNLEVBQUM7WUFDTixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUk7WUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNMLENBQUM7SUF0R00sa0JBQU8sR0FBRyxnREFBZ0QsQ0FBQyxDQUFBLHNCQUFzQjtJQUNqRixnQkFBSyxHQUFHLEVBQUUsQ0FBQztJQXVHdEIsaUJBQUM7Q0F6R0QsQUF5R0MsSUFBQTtBQXpHWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRNZ3J9IGZyb20gXCIuL0V2ZW50TWFuYWdlclwiO1xuXG5leHBvcnQgY2xhc3MgSHR0cEhlbHBlciB7XG4gICAgc3RhdGljIEJhc2VVUkwgPSBcImh0dHBzOi8vdGVzdC15b3V5aW4uZGFxaWV6aS5jYy9nYW1lL2xvZ2ljLWFwaS9cIjsvLyBsb2dpYy9nZXRQbGF5ZXJJbmZvXG4gICAgc3RhdGljIHRva2VuID0gXCJcIjtcbiAgICBzdGF0aWMgaW5pdEJhc2VVcmwoKSB7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBnZXQ8VD4odXJsOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbGUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sZShyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBnZXQ6ICR7dXJsfSBlcnJgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gODAwMDtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBodHRwR2V0KHVybDogc3RyaW5nLCBjYWxsYmFjazogKHJlczogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IEpTT04ucGFyc2UocmVzcG9uZSk7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4ocnNwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKHhocik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIEh0dHBQb3N0KHBhdGgsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHVybCA9IEh0dHBIZWxwZXIuQmFzZVVSTCArIHBhdGg7XG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkgeyAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbmUgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgcnNwID0gSlNPTi5wYXJzZShyZXNwb25lKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT1QT1NUIHJzcDpcIiwgcGF0aCxyc3ApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCwgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz8uKG51bGwsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBFdmVudE1nci5lbWl0KFwiSHR0cEVycm9yXCIsIHBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrPy4obnVsbCwgXCJ0aW1lb3V0XCIpO1xuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJIdHRwVGltZU91dFwiLCBwYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnRpbWVvdXQgPSA4MDAwOyBcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VXRmLThcIik7XG4gICAgICAgIGlmKEh0dHBIZWxwZXIudG9rZW4pe1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIEh0dHBIZWxwZXIudG9rZW4pO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJhcHBWZXJzaW9uXCIgLFwiMC4wLjBcIik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZUlkXCIgLFwidGVzdF8xMjM0NTZcIik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImRldmljZU5hbWVcIiAsXCJ0ZXN0X2lQaG9uZVwiKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiZGV2aWNlVHlwZVwiICxcIjFcIik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInN5c3RlbVZlcnNpb25cIiAsIFwiNjA1LjEuMTVcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gICAgICAgIGlmKHBhcmFtcyl7XG4gICAgICAgICAgICB4aHIuc2VuZChzdHIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY29tbW9uL0F1ZGlvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrRUEsQ0FBQztJQTNEVSxhQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7SUFDSCxrQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLG1CQUFVLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sb0JBQVcsR0FBbEI7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFTSx1QkFBYyxHQUFyQixVQUFzQixNQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0seUJBQWdCLEdBQXZCLFVBQXdCLE1BQWM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDNUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQVMsR0FBaEIsVUFBaUIsS0FBNEIsRUFBRSxNQUFjLEVBQUUsTUFBa0IsRUFBRSxVQUF5QjtRQUE3RCx1QkFBQSxFQUFBLGNBQWM7UUFBRSx1QkFBQSxFQUFBLGFBQWtCO1FBQUUsMkJBQUEsRUFBQSxpQkFBeUI7UUFDeEcsSUFBSSxPQUFPLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBa0I7Z0JBQ3BFLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNELHVCQUFjLEdBQXJCLFVBQXNCLGNBQXFCO1FBQXJCLCtCQUFBLEVBQUEscUJBQXFCO1FBQ3ZDLElBQUksY0FBYyxJQUFJLElBQUksRUFBRTtZQUN4QixjQUFjLEdBQUcsbUJBQW1CLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxtQkFBVSxHQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU87UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sc0JBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQWhFTSxzQkFBYSxHQUFtQixJQUFJLENBQUM7SUFDckMsa0JBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxzQkFBYSxHQUFHLENBQUMsQ0FBQztJQStEN0IsZUFBQztDQWxFRCxBQWtFQyxJQUFBO0FBbEVZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1ZGlvTWdyIHtcbiAgICBzdGF0aWMgYmdBdWRpb1NvdXJjZTogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuICAgIHN0YXRpYyBiZ21Wb2x1bWUgPSAxO1xuICAgIHN0YXRpYyBlZmZlY3RzVm9sdW1lID0gMTtcblxuICAgIHN0YXRpYyBlZmZlY3RNYXA6IE1hcDxjYy5BdWRpb0NsaXAgfCBzdHJpbmcsIG51bWJlcj47XG5cbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RNYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy/lgZzmraLmkq3mlL7og4zmma/pn7PkuZBcbiAgICBzdGF0aWMgc3RvcE11c2ljKCkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcGF1c2VNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2VNdXNpYygpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZXN1bWVNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lTXVzaWMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5iZ21Wb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuYmdtVm9sdW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0RWZmZWN0c1ZvbHVtZSh2b2x1bWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmVmZmVjdHNWb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5lZmZlY3RzVm9sdW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldCDot5/pmo/nm67moIfoioLngrnph4rmlL7otYTmupBcbiAgICAgKi9cbiAgICBzdGF0aWMgcGxheVNvdW5kKHNvdW5kOiBjYy5BdWRpb0NsaXAgfCBzdHJpbmcsIGlzTG9vcCA9IGZhbHNlLCB0YXJnZXQ6IGFueSA9IG51bGwsIGJ1bmRsZU5hbWU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VuZCA9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChzb3VuZCwgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGlzTG9vcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3Qoc291bmQsIGlzTG9vcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aMiemSrueCueWHu+WjsOmfs1xuICAgIHN0YXRpYyBwbGF5Q2xpY2tBdWRpbyhjbGlja1NvdW5kTmFtZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGNsaWNrU291bmROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIGNsaWNrU291bmROYW1lID0gXCJzb3VuZC9zb3VuZF9jbGlja1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheVNvdW5kKGNsaWNrU291bmROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RvcEVmZmVjdChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVmZmVjdE1hcCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuZWZmZWN0TWFwLmdldChuYW1lKSkgcmV0dXJuO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHRoaXMuZWZmZWN0TWFwLmdldChuYW1lKSk7XG4gICAgICAgIHRoaXMuZWZmZWN0TWFwLmRlbGV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3RvcEFsbEVmZmVjdCgpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RNYXAuY2xlYXIoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMzQixVQUFVO1FBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUNELG1CQUFJLEdBQUosVUFBSyxHQUFHO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxHQUFDLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3JDLENBQUM7O0lBOURhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFEbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtFeEI7SUFBRCxXQUFDO0NBbEVELEFBa0VDLENBbEVpQyxFQUFFLENBQUMsU0FBUyxHQWtFN0M7a0JBbEVvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudE1ncn0gZnJvbSBcIi4vY29tbW9uL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IHtIdHRwSGVscGVyfSBmcm9tIFwiLi9jb21tb24vSHR0cEhlbHBlclwiO1xuY29uc3QgVG9rZW4gPVwiZXlKaGJHY2lPaUpJVXpVeE1pSjkuZXlKMWMyVnlYMmxrSWpveE5qQXhPRGd6TENKc2IyZHBibDkwZVhCbElqb3hMQ0oxYzJWeVgydGxlU0k2SWpsa09EVTFORGcwTFdSaFpHUXRORGd4TUMwNFlUZzNMVE0xT0dKa016Um1ZbVZpWlNJc0luUnZhMlZ1WDNSNWNHVWlPaUpoY0hBaUxDSjFjMlZ5Ym1GdFpTSTZJdVM4bU9tZnN6Y3dPVGd3TWlKOS5TRmxKUEJ1aDluYTlKVzdQNXBXSlRIZFdyaWJFTjI4SlZ2ZnE0YTV6THIyMnF5ZWgyVmZrcTIyWjZLaXFLQjJRc3pPTXRFb0pxbE1FYnYxbC04cVBQZ1wiO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJbmZvIHtcbiAgYXBwVG9rZW46IHN0cmluZzsgLy8gYXBwVG9rZW5cbiAgYXV0aFN0YXR1czogMCB8IDE7IC8vIOWunuWQjeeKtuaAge+8mjAtPuacquWunuWQje+8jDEtPuW3suWunuWQjVxuICBhdmF0YXI6IHN0cmluZztcbiAgZW1Ub2tlbjogc3RyaW5nOyAvLyDnjq/kv6FlbVRva2VuXG4gIGZpcnN0TG9naW46IGJvb2xlYW47XG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gIHJlZ2lzdGVyVHlwZTogMSB8IDIgfCAzIHwgNDsgLy8g5rOo5YaM57G75Z6L77yaMS0+5omL5py655m75b2V5rOo5YaM77yMMi0+5b6u5L+h55m75b2V5rOo5YaM77yMMy0+6Iu55p6c55m75b2V5rOo5YaM77yMNC0+UVHnmbvlvZXms6jlhoxcbiAgdGVlbk1vZGVTd2l0Y2g6IDEgfCAwO1xuICB1c2VySWQ6IG51bWJlcjtcbiAgdXNlck5hbWU6IHN0cmluZztcbiAgdXNlclR5cGU6IDEgfCAyOyAvLyDnlKjmiLfnsbvlnovvvJoxLeeUqOaIt++8jDIt5Li75pKtXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBHYW1lID0gbnVsbDtcbiAgICBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgICAgICB0aGlzLmluaXRXZWJwSW1nKCk7XG4gICAgICAgIHRoaXMuaW5pdFVzZXJJbmZvKCk7XG4gICAgfVxuICAgIGluaXRFdmVudHMoKXtcbiAgICAgICAgRXZlbnRNZ3Iub24oXCJvbkdldFVzZXJJbmZvXCIsdGhpcy5vbkdldFVzZXJJbmZvLHRoaXMpO1xuICAgIH1cbiAgICBpbml0VXNlckluZm8oKXtcbiAgICAgICAgbGV0IFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlID0gd2luZG93W1wiV2ViVmlld0phdmFzY3JpcHRCcmlkZ2VcIl07XG4gICAgICAgIGlmKFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlKXtcbiAgICAgICAgICAgIFdlYlZpZXdKYXZhc2NyaXB0QnJpZGdlLmNhbGxIYW5kbGVyKFwiZ2V0VXNlckluZm9cIiwge30sIGZ1bmN0aW9uKHJlczogSVVzZXJJbmZvKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PVwiLHJlcyk7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHJlcyA9PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgICAgICAgICAgSHR0cEhlbHBlci50b2tlbj1yZXMuYXBwVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiAgcmVzID09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIEh0dHBIZWxwZXIudG9rZW49dXNlckluZm8uYXBwVG9rZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEV2ZW50TWdyLmVtaXQoXCJvbkdldFVzZXJJbmZvXCIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBIdHRwSGVscGVyLnRva2VuPVRva2VuO1xuICAgICAgICBFdmVudE1nci5lbWl0KFwib25HZXRVc2VySW5mb1wiKVxuICAgIH1cbiAgICBvbkdldFVzZXJJbmZvKCl7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+aVsOaNrlxuICAgICAgICBIdHRwSGVscGVyLkh0dHBQb3N0KFwibG9naWMvZ2V0UGxheWVySW5mb1wiLCB7fSwgKGVyciwgZGF0YSk9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PeiOt+WPlueUqOaIt+aVsOaNrlwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIEdhbWUuaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICBFdmVudE1nci5jbGVhckJ5VGFyZ2V0KHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIGluaXRXZWJwSW1nKCl7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAvLyBpbWcuc3JjID0gJ3dlYnAvMS53ZWJwJztcbiAgICAgICAgLy8g6K6+572u5qC35byP5bGe5oCn77yI5Y+v6YCJ77yJXG4gICAgICAgIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBpbWcuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBpbWcuc3R5bGUud2lkdGggPSAnMzc1JztcbiAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgICAgLy8g6buY6K6k6ZqQ6JePXG4gICAgICAgIGltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyBcbiAgICAgICAgLy8g5re75Yqg5YiwIERPTVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIHRoaXMuaW1nID0gaW1nO1xuICAgIH1cbiAgICBwbGF5KHNyYyl7XG4gICAgICAgIHRoaXMuaW1nLnNyYyA9IFwid2VicC9cIitzcmM7XG4gICAgICAgIHRoaXMuaW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
