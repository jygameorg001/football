
export function Singleton<T>() {
    class SingletonClass {
        private static _instance: SingletonClass = null;

        static get instance(): T {
            return (this._instance || (this._instance = new this())) as T;
        }

        protected constructor() {}
    }

    return SingletonClass;
}
export interface EventData {
    event?: string;
    listener: Function;
    target?: any;
}
export class EventManager extends Singleton<EventManager>() {
    private events: Map<string, EventData[]> = new Map();

    /**
     * 监听事件
     * @param event
     * @param listener
     * @param target
     */
    on(event: string, listener: Function, target?: unknown) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }

        let list = this.events.get(event);

        for (let item of list) {
            if (item.target === target) {
                return;
            }
        }

        list.push({ event, listener, target });
    }

    /**
     * 注销事件
     * @param event
     * @param listener
     * @param target
     */
    off(event: string, listener: Function, target?: unknown) {
        if (this.events.has(event)) {
            const index = this.events
                .get(event)
                .findIndex((v) => (!!listener ? v.listener === listener && v.target === target : v.target === target));
            index > -1 && this.events.get(event).splice(index, 1);

            if (this.events.get(event).length === 0) {
                this.events.delete(event);
            }
        }
    }

    /**
     * 派发事件
     * @param event
     * @param args
     */
    emit(event: string, ...args: any[]) {
        if (this.events.has(event)) {
            this.events.get(event).forEach(({ listener, target }) => {
                target ? listener.apply(target, args) : listener(...args);
            });
        }
    }

        /**
     * 派发事件
     * @param event
     * @param args
     */
    emitCallBack(event: string, ...args: any[]):any {
        if (this.events.has(event)) {
            let list = this.events.get(event);
            if (list.length != 1)   {
                // console.warn("监听接口超过一个，不能调用这个接口")
                return;
            }
            let target = list[0].target;
            let listener = list[0].listener;
            return target ? listener.apply(target, args) : listener(...args);
        }
    }

    /**
     * 清空事件map
     * @param event
     */
    clear(event?: string) {
        if (!event) {
            this.events.forEach((list, event) => {
                for (let item of list) {
                    this.off(event, item.listener, item.target);
                }
            });
        } else {
            this.events.delete(event);
        }
    }

    /**
     * 删除target所有事件
     * @param target
     */
    clearByTarget(target: unknown) {
        this.events.forEach((list, event) => {
            for (let item of list) {
                if (item.target === target) {
                    this.off(event, item.listener, item.target);
                }
            }
        });
    }

    /**
     * 清空所有匿名函数事件
     */
    clearAnon() {
        let clearList: string[] = [];

        this.events.forEach((list, event) => {
            list = list.filter((v) => v.listener.name !== "");

            if (list.length > 0) {
                this.events.set(event, list);
            } else {
                clearList.push(event);
            }
        });

        clearList.forEach((event) => {
            this.events.delete(event);
        });
    }

    /**
     * 打印事件
     */
    dump() {
        let count = 0;

        this.events.forEach((list) => {
            list.forEach((v) => {
                count++;
            });
        });

    }

    /**
     * 获取事件所有监听
     * @param event
     * @returns
     */
    getEventDataList(event: string) {
        return this.events.get(event);
    }
}

export const EventMgr = EventManager.instance;
