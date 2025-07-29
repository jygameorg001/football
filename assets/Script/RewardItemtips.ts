import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItemtips extends cc.Component {


    // @property(cc.Label) winlabel: cc.Label = null;

    //改成富文本
    @property(cc.RichText) winlabel: cc.RichText = null;

    setData(isstar: boolean = false) {
        let names = ""

        if (GameLogic.instance.ShootingInfo.reward > 0) {
            names = "太棒了!恭喜获得 \n";
            let names1 = this.getGiftNameById(GameLogic.instance.ShootingInfo.id) + "x1 ";
            let names2 = " 幸运分x" + GameLogic.instance.ShootingInfo.reward;
            //前面的names names1文字颜色为白色，后面的names2文字颜色FFEF40;
            // this.winlabel.string = names + "<color=#ffffff>" + names1 + "</color>" + "<color=#FFEF40>" + names2 + "</color>";
            this.winlabel.string = names + "<color=#ffffff>" + names1 + "</color><color=#FFEF40>" + names2 + "</color>";

        } else {
            names = "恭喜获得 ";
            //都是白色
            this.winlabel.string = names + "<color=#ffffff>" + this.getGiftNameById(GameLogic.instance.ShootingInfo.id) + "x1" + "</color>";
        }
    }

    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.id === id);
        return gift ? gift.giftName : null;
    }

    // update (dt) {}
}
