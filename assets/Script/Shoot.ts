import {EventMgr} from "./common/EventManager";
import Game from "./Game";
import {GameLogic} from "./GameLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Shoot extends cc.Component {
    @property(cc.Node) football: cc.Node = null;
    @property(cc.Node)giftNode: cc.Node = null;
    giftList: cc.Node[] = [];
    protected onLoad(): void {
        EventMgr.on("onGetGiftList", this.updateGifts, this);
        this.initBtnClickHandle();
        this.initGiftNodes();
    }
    initGiftNodes(){
        for(let i=0;i<9;i++){
            this.giftList[i] = this.giftNode.getChildByName("gift"+(i+1));
        }
        if(GameLogic.instance.giftList.length>0){
            this.updateGifts();
        }
        else{
            GameLogic.instance.reqQueryGiftList();
        }
    }
    updateGifts(){
        for(let i=0;i<this.giftList.length;i++){
            let gift = GameLogic.instance.giftList[i];
            let node = this.giftList[i];
            GameLogic.instance.loadRemoteSprite(gift.giftImage,node.getComponent(cc.Sprite));
        }
    }
    protected initBtnClickHandle() {
        this.getComponentsInChildren(cc.Button).forEach((btn) => {
            if (btn.transition === cc.Button.Transition.NONE) {
                btn.transition = cc.Button.Transition.SCALE;
                btn.duration = 0.1;
                btn.zoomScale = 0.9;
            }
            btn.node.on(
                "click",
                () => {
                    this.onBtnClickHandle(btn.node.name, btn);
                },
                this
            );
        });
    }
    

    start () {

    }
    
    onBtnShoot(){
        
    }
    onBtnClickHandle(name, btn) {
        switch (name) {
            case "btnBack":
                this.node.destroy();
                break;
            case "btnHelp":
                Game.instance.showView("Help");
                break;
            case "btnSound":
                
                break;
            case "btnName":
                
                break;
            case "btnShoot":
                break;
        }
    }

    // update (dt) {}
}
