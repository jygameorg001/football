import { EventMgr } from "./common/EventManager";
import { GameLogic, ShootingItemInfo } from "./GameLogic";
import RewardItem from "./RewardItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RewardItemtips extends cc.Component {
  // @property(cc.Label) winlabel: cc.Label = null;

  //改成富文本
  @property(cc.RichText) winlabel: cc.RichText = null;

  setDataOne(rewardInfo: ShootingItemInfo) {
    console.log("=========RewardItemtips.setDataOne=========", rewardInfo.reward);
    let names = "";
    if (rewardInfo.reward > 0) {
      names = "太棒了!恭喜獲得 \n";
      let names1 = this.getGiftNameById(rewardInfo.giftId) + "x1 ";
      let names2 =
        GameLogic.instance.getCurrencyName() + " x" + rewardInfo.reward;
      this.winlabel.string =
        names +
        "<color=#ffffff>" +
        names1 +
        "</color><color=#FFEF40>" +
        names2 +
        "</color>";
    } else {
      names = "恭喜獲得 ";
      this.winlabel.string =
        names +
        "<color=#ffffff>" +
        this.getGiftNameById(rewardInfo.giftId) +
        "x1" +
        "</color>";
    }

    let width = this.winlabel.node.getContentSize().width;
    let size = this.node.getContentSize();
    this.node.setContentSize(width + 30, size.height);
    console.log("=========RewardItemtips.setDataOne1=========", width);

    // let widget = this.winlabel.node.getComponent(cc.Widget);
    // widget.left = 15;
    // widget.updateAlignment();
  }

  setString(str) {
    // console.log("=========RewardItemtips.setString=========", str);
    this.winlabel.string = str;

    //更新尺寸
    let width = this.winlabel.node.getContentSize().width;
    let size = this.node.getContentSize();
    this.node.setContentSize(width + 30, size.height);

    let widget = this.winlabel.node.getComponent(cc.Widget);
    widget.left = 15;
    widget.updateAlignment();

  }

  getGiftNameById(id) {
    let gift = GameLogic.instance.giftList.find((gift) => gift.giftId === id);
    return gift ? gift.giftName : null;
  }

  // update (dt) {}
}
