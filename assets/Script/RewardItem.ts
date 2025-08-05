import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItem extends cc.Component {

    @property(cc.Label) nameLabel: cc.Label = null;
    @property(cc.Node) icon: cc.Node = null;

    start() {
        // GameLogic.instance.ShootingInfo
        // this.initView();
    }

    initView(isstar: boolean = false) {
        console.log("initView----------------", isstar);
        if (isstar) {
            this.nameLabel.string = "幸运分x" + GameLogic.instance.ShootingInfo.rewardList[0].reward;
             this.icon.scale = 1;
            // 设置nameLabel的颜色
            this.nameLabel.node.color = new cc.Color(255, 239, 64);
        } else {
            this.nameLabel.string = this.getGiftNameById(GameLogic.instance.ShootingInfo.rewardList[0].id) + "x1";
            GameLogic.instance.loadRemoteSprite(GameLogic.instance.ShootingInfo.rewardList[0].giftImage, this.icon.getComponent(cc.Sprite),70);
            this.icon.scale = 0.4;
            this.nameLabel.node.color = new cc.Color(255, 255, 255);
        }

    }

     getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.id === id);
        return gift ? gift.giftName : null;
    }

    // update (dt) {}
}
