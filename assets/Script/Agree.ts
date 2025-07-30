const {ccclass, property} = cc._decorator;

@ccclass
export default class Agree extends cc.Component {
    @property(cc.Node)content:cc.Node = null;
    protected onLoad(): void {
        this.content.y =-1080;
        cc.tween(this.content).to(0.3,{position:cc.v3(0,0,0)}).start();
    }
    onClose(){
        cc.tween(this.content).to(0.3,{position:cc.v3(0,-1080,0)}).call(()=>{
            this.node.destroy();
        }).start();
    }

    // update (dt) {}
}
