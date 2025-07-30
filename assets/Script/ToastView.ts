
const { ccclass, property } = cc._decorator;

@ccclass
export default class ToastView extends cc.Component {

    @property(cc.Label) label: cc.Label = null;

    showToast(msg: string, time: number = 2) {
        this.label.string = msg;
        this.scheduleOnce(() => {
            this.node.destroy();
        }, time);
    }

    // update (dt) {}
}
