import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItemtips extends cc.Component {


    @property(cc.Label) winlabel: cc.Label = null;

    setData(isstar: boolean = false) {
        if (isstar) {
            this.winlabel.string = "幸运分x" + GameLogic.instance.ShootingInfo.reward;
        } else {
            this.winlabel.string = "天鹅相会x1";
        }
    }


    // update (dt) {}
}
