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


    start() {
        this.setText();
        EventMgr.on("onGetGameInfo", this.setText, this);
         EventMgr.on("queryRatesInfo", this.setItemtXT, this);
        this.setItemtXT();
    }

    onDestroy() {
        EventMgr.off("onGetGameInfo", this.setText, this)
        EventMgr.off("queryRatesInfo", this.setItemtXT, this)
    }
    setText() {
        if (GameLogic.instance.gameInfo) {
            let info = GameLogic.instance.gameInfo;
            let str = info["span1"] + "\n" + "1." + info["span2"] + "\n" + "2." + info["span3"];
            this.toptxt.string = str;
            let str2 = info["span6"] + "\n" + info["span7"];
            this.bottomtxt.string = str2;
            this.title1.string = info["span4"];
            this.title2.string = info["span5"];
        }
    }

    setItemtXT() {
        if (GameLogic.instance.queryRatesInfo) {
            for (let i = 0; i < this.itemGAI.children.length; i++) {
                let item = this.itemGAI.children[i];
                let rate = GameLogic.instance.queryRatesInfo[i];
                for (let j = 0; j < item.children.length; j++) {
                    let items = item.children[j];
                    let keys = Object.keys(rate);
                    items.getComponent(cc.Label).string = rate[keys[j]];
                }

            }
        }
    }





    onBtnBack() {
        this.node.destroy();
    }

    // update (dt) {}
}
