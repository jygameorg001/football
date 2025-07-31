import { EventMgr } from "./common/EventManager";
import { GameLogic } from "./GameLogic";
import RewardItem from "./RewardItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Rewardview extends cc.Component {



    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;
    @property(cc.Node)
    rewardNode: cc.Node = null;

    @property(cc.Node)
    topnamebg1: cc.Node = null;

    @property(cc.Node)
    topnamebg2: cc.Node = null;


    protected start(): void {
        this.setView();
    }


    setView() {
        console.log("奖励界面加载", GameLogic.instance.ShootingInfo);
        if (GameLogic.instance.ShootingInfo.rewardList.length > 1) {


        } else {
            let rewardItem = cc.instantiate(this.rewardItem);
            rewardItem.parent = this.rewardNode;
            (rewardItem.getComponent(RewardItem) as RewardItem).initView(false);
            this.topnamebg1.active = true;
            this.topnamebg2.active = false;
            if (GameLogic.instance.ShootingInfo.rewardList[0].reward > 0) {
                let rewardItem = cc.instantiate(this.rewardItem);
                rewardItem.parent = this.rewardNode;
                (rewardItem.getComponent(RewardItem) as RewardItem).initView(true);
                this.topnamebg1.active = false;
                this.topnamebg2.active = true;
            }
        }
    }

    //关闭窗口
    closeWin() {
        EventMgr.emit("closeRewardview")
        this.node.destroy();
    }

    closeWin2() {
        EventMgr.emit("closeRewardviewShoot")
        this.node.destroy();
    }
}
