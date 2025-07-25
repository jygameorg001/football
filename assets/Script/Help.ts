const {ccclass, property} = cc._decorator;

@ccclass
export default class Help extends cc.Component {

    start () {

    }
    onBtnBack(){
        this.node.destroy();
    }

    // update (dt) {}
}
