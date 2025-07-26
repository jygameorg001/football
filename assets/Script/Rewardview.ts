const { ccclass, property } = cc._decorator;

@ccclass
export default class Rewardview extends cc.Component {

    private data = null;

    initData(data) {
        this.data = data;
        console.log(this.data,"一个流程");
        
    }


    //关闭窗口
    closeWin() {
        this.node.destroy();
    }
}
