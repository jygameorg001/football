
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