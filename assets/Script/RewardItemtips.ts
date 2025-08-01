import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItemtips extends cc.Component {


    // @property(cc.Label) winlabel: cc.Label = null;

    //改成富文本
    @property(cc.RichText) winlabel: cc.RichText = null;

    setDataOne(times: number = 0) {
        let names = ""
        if (GameLogic.instance.ShootingInfo.rewardList[times].reward > 0) {
            names = "太棒了!恭喜获得 \n";
            let names1 = this.getGiftNameById(GameLogic.instance.ShootingInfo.rewardList[times].giftId) + "x1 ";
            let names2 = " 幸运分x" + GameLogic.instance.ShootingInfo.rewardList[0].reward;
            this.winlabel.string = names + "<color=#ffffff>" + names1 + "</color><color=#FFEF40>" + names2 + "</color>";
        } else {
            names = "恭喜获得 ";
            this.winlabel.string = names + "<color=#ffffff>" + this.getGiftNameById(GameLogic.instance.ShootingInfo.rewardList[0].giftId) + "x1" + "</color>";
        }
    }
    setDataTen(times: number = 0) {
        //    区别于上面，this.winlabel.string,会随着次数变化，累加到一起
        let names = ""
        if (GameLogic.instance.ShootingInfo.rewardList[times].reward > 0) {
            names = "太棒了!恭喜获得 \n";
            let names1 = this.getGiftNameById(GameLogic.instance.ShootingInfo.rewardList[times].giftId) + "x1 ";
            let names2 = " 幸运分x" + GameLogic.instance.ShootingInfo.rewardList[times].reward;
            this.winlabel.string = this.winlabel.string + "\n" + names + "<color=#ffffff>" + names1 + "</color><color=#FFEF40>" + names2 + "</color>";
        } else {
            names = "恭喜获得 ";
            this.winlabel.string = this.winlabel.string + "\n" + names + "<color=#ffffff>" + this.getGiftNameById(GameLogic.instance.ShootingInfo.rewardList[times].giftId) + "x1" + "</color>";
        }
    }

    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.giftId === id);
        return gift ? gift.giftName : null;
    }

    // update (dt) {}
}
