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
      console.log(info);
      let str = "";
      for (let i = 0; i < info.pre.length; i += 1) {
        if (i > 0) {
          str += "\n";
        }
        str += info.pre[i];
      }
      this.toptxt.string = str;

      let str2 = "";
      for (let i = 1; i < info.after.length; i += 1) {
        if (i > 1) {
          str2 += "\n";
        }
        str2 += info.after[i];
      }
      this.bottomtxt.string = str2;
      this.title1.string = "機率";
      this.title2.string = info.after[0];
    }
  }

  setItemtXT() {
    let list = GameLogic.instance.queryRatesInfo;
    console.log("============setItemtXT==============",list);
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
