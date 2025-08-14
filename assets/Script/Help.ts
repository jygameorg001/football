import { EventMgr } from "./common/EventManager";
import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Help extends cc.Component {
  @property(cc.Label) toptxt: cc.Label = null;
  @property(cc.Label) bottomtxt: cc.Label = null;

  @property(cc.Label) title1: cc.Label = null;
  @property(cc.Label) title2: cc.Label = null;

  @property(cc.Node) itemGAI: cc.Node = null;

  @property(cc.Prefab)
  itemG: cc.Prefab = null;

  @property(cc.Node)
  itemParent: cc.Node = null;

  start() {
    this.setText();
    EventMgr.on("onGetGameInfo", this.setText, this);
    EventMgr.on("queryRatesInfo", this.setItemtXT, this);
    this.setItemtXT();
  }

  onDestroy() {
    EventMgr.off("onGetGameInfo", this.setText, this);
    EventMgr.off("queryRatesInfo", this.setItemtXT, this);
  }
  setText() {
    if (GameLogic.instance.gameInfo) {
      let info = GameLogic.instance.gameInfo;
      let str =
        info["span1"] +
        "\n" +
        "1." +
        info["span2"] +
        "\n" +
        "2." +
        info["span3"];
      this.toptxt.string = str;
      let str2 = info["span6"] + "\n" + info["span7"];
      this.bottomtxt.string = str2;
      this.title1.string = info["span4"];
      this.title2.string = info["span5"];
    }
  }

  setItemtXT() {
    let list = GameLogic.instance.queryRatesInfo;

    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        let temp = cc.instantiate(this.itemG);
        this.itemParent.addChild(temp);
        let com = temp.getComponent("HelpItem");
        if (com) {
          let isUp = true;
          let isDown = true;
          if (i !== 0) {
            isUp = false;
          }

          com.setData(list[i], isUp, isDown);
        }
      }
    }
  }

  onBtnBack() {
    this.node.destroy();
  }

  // update (dt) {}
}
