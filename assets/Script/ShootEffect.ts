const {ccclass, property} = cc._decorator;

@ccclass
export default class ShootEffect extends cc.Component {
    @property(sp.Skeleton) spine:sp.Skeleton = null;
    start () {
        this.spine.setAnimation(0,"animation",false);
        this.spine.setCompleteListener(()=>{
            this.node.destroy();
        })
    }

    // update (dt) {}
}
