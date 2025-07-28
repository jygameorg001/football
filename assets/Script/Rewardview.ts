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


    protected start(): void {
        this.setView();
    }


    setView() {
        console.log("奖励界面加载", GameLogic.instance.ShootingInfo);
        if (GameLogic.instance.ShootingInfo) {
            let rewardItem = cc.instantiate(this.rewardItem);
            rewardItem.parent = this.rewardNode;
            (rewardItem.getComponent(RewardItem) as RewardItem).initView(false);
            if (GameLogic.instance.ShootingInfo.reward > 0) {
                let rewardItem = cc.instantiate(this.rewardItem);
                rewardItem.parent = this.rewardNode;
                (rewardItem.getComponent(RewardItem) as RewardItem).initView(true);
            }

        }
    }

    //关闭窗口
    closeWin() {
        EventMgr.emit("closeRewardview")
        this.node.destroy();
    }
}
