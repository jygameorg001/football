const {ccclass, property} = cc._decorator;

@ccclass
export default class rewardListview extends cc.Component {

    @property(cc.Prefab)
    rewardItem:cc.Prefab = null;

    start () {

    }

    // update (dt) {}
}
