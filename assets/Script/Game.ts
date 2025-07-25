import { BallRun } from "./BallRun";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import {GameLogic} from "./GameLogic";

const { ccclass, property } = cc._decorator;



@ccclass
export default class Game extends cc.Component {
    public static instance: Game = null;
    protected onLoad(): void {
        Game.instance = this;
        this.initView();
        this.initEvents();
        GameLogic.instance.initUserInfo();
        // const node = new cc.Node();
        // node.addComponent(cc.Graphics);
        // node.parent = this.gifts;
        // this.trailGraphics = node.getComponent(cc.Graphics);
        // BallRun.getInstance().initFootBall(this.football, this.trailGraphics)
    }
    initView() {
        // for (let i = 1; i <= 9; i++) {
        //     let node = this.gifts.getChildByName("gift" + i);
        //     this.giftsList[i - 1] = node;
        // }
    }
    initEvents() {
        // EventMgr.on("onGetUserInfo", this.onGetUserInfo, this);
        // EventMgr.on("onGetPlayerInfo", this.onGetPlayerInfo, this);
        // EventMgr.on("onQueryGiftList", this.onQueryGiftList, this);
        // EventMgr.on("onShooting", this.onShooting, this);
    }
   
    protected onDestroy(): void {
        Game.instance = null;
        EventMgr.clearByTarget(this);
    }

    start() {

    }

    showView(path: string,callback?){
        let bundle = cc.assetManager.getBundle("resources");
        bundle.load(path, cc.Prefab, (err,prefab: cc.Prefab)=>{
            if (err) {
                console.log(err);
                return;
            }
            let node = cc.instantiate(prefab);
            node.parent = Game.instance.node;
            if (callback) {
                callback(node);
            }
        })
    }
    
    // onBtnShoot() {
    //     BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position);
    // }
}
