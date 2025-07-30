const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardListview extends cc.Component {

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;

    @property(cc.Node)
    contentView: cc.Node = null;

    start() {

    }

    // update (dt) {}
}
