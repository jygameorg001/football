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
            this.nameLabel.string = "幸运分x" + GameLogic.instance.ShootingInfo.reward;
            // 设置nameLabel的颜色
            this.nameLabel.node.color = new cc.Color(255, 239, 64);
        } else {
            this.nameLabel.string = "天鹅相会x1";
            GameLogic.instance.loadRemoteSprite(GameLogic.instance.ShootingInfo.giftImage, this.icon.getComponent(cc.Sprite));
            this.icon.scale = 0.4;
            this.nameLabel.node.color = new cc.Color(255, 255, 255);
        }

    }

    // update (dt) {}
}
