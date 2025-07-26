import {BallRun} from "./BallRun";
import {EventMgr} from "./common/EventManager";
import Game from "./Game";
import { GameLogic } from "./GameLogic";

const {ccclass, property} = cc._decorator;
const isTest = true;
@ccclass
export default class Shoot extends cc.Component {
    @property(cc.Node) football: cc.Node = null;
    @property(cc.Node) giftNode: cc.Node = null;
    @property(cc.Label) currency: cc.Label = null;
    @property(cc.Label) energy: cc.Label = null;

    giftList: cc.Node[] = [];
    canShoot: boolean = false;
    protected onLoad(): void {
        EventMgr.on("onGetGiftList", this.updateGifts, this);
        this.initBtnClickHandle();
        this.initGiftNodes();
        const node = new cc.Node();
        node.addComponent(cc.Graphics);
        node.parent = this.giftNode;
        let trailGraphics = node.getComponent(cc.Graphics);
        BallRun.getInstance().initFootBall(this.football, trailGraphics)

        EventMgr.on("onShooting", this.onShooting, this);

        this.canShoot = true;
    }
    protected onDestroy(): void {
        EventMgr.clearByTarget(this);
    }

    setinfoview() {
        console.log(GameLogic.instance.giftList, "玩家信息2");
        this.energy.string = GameLogic.instance.playerInfo.energy + "";
        this.currency.string = GameLogic.instance.playerInfo.currency + "";
    }


    initGiftNodes() {
        for (let i = 0; i < 9; i++) {
            this.giftList[i] = this.giftNode.getChildByName("gift" + (i + 1));
        }
        if (GameLogic.instance.giftList.length > 0) {
            this.updateGifts();
        }
        else {
            GameLogic.instance.reqQueryGiftList();
        }
    }
    updateGifts() {
        for (let i = 0; i < this.giftList.length; i++) {
            let gift = GameLogic.instance.giftList[i];
            let node = this.giftList[i];
            GameLogic.instance.loadRemoteSprite(gift.giftImage, node.getComponent(cc.Sprite));
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

    start() {

    }
    
    onBtnShoot(){
        console.log("===onBtnShoot====",this.canShoot)
        // 是否可以射击
        if(!this.canShoot){
            return;
        }
         this.canShoot = false;
        if(isTest){
            this.onShooting({giftId:1})
            return;
        }
       
        GameLogic.instance.reqShooting(1000152, 1601096)
    }

    getIdByGiftId(giftId){
        for(let i=0;i<GameLogic.instance.giftList.length;i++){
            let gift =GameLogic.instance.giftList[i];
            if(gift.giftId == giftId){
                return i;
            }
        }
        return 0;
    }
    onShooting(data){
        let giftId = data.giftId;
        let id = this.getIdByGiftId(giftId);
        let position = this.giftList[id].position;
        BallRun.getInstance().runFootBall(position,()=>{
            // show win reward

            // 等待奖励完成 射门流程完成 可以继续射击
            this.canShoot = true;
        })
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
                this.onBtnShoot();
                break;
        }
    }

    // update (dt) {}
}
