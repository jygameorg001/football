
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