import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItemtips extends cc.Component {


    @property(cc.Label) winlabel: cc.Label = null;

    setData(isstar: boolean = false) {
        let names = "恭喜获得"
        if (isstar) {
            this.winlabel.string = names + " 幸运分x" + GameLogic.instance.ShootingInfo.reward;
        } else {
            this.winlabel.string = names + this.getGiftNameById(GameLogic.instance.ShootingInfo.id) + "x1"
        }
    }

    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.id === id);
        return gift ? gift.giftName : null;
    }

    // update (dt) {}
}
