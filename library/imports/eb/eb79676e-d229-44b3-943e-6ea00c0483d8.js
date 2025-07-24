"use strict";
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