import { EventMgr } from "./common/EventManager";
import Game from "./Game";
import {GameLogic} from "./GameLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayNotice extends cc.Component {
    @property(cc.Toggle)agreeTog:cc.Toggle = null;
    @property(cc.Toggle)todayTog:cc.Toggle = null;
    @property(cc.Label)explainTxt:cc.Label = null;

    start () {
        let str = cc.sys.localStorage.getItem("agree_notice");
        if(str){
            this.agreeTog.isChecked = true;
        }
        // this.explainTxt.string="";
        // EventMgr.on("onGetGameInfo", this.onGetGameInfo, this);
    }

    protected onDestroy(): void {
        // EventMgr.off("onGetGameInfo", this.onGetGameInfo, this);
    }

    onGetGameInfo(info){
        // this.explainTxt.string = info
        let str=info["span1"]+"\n"+"1."+info["span2"]+"\n"+"2."+info["span3"];
        this.explainTxt.string = str;
    }
    onBtnAgree(){
        if(!this.agreeTog.isChecked){
            // toast
            EventMgr.emit("toastview", "还未同意协议！");
            return;
        }
        if(this.todayTog.isChecked){
            let date = new Date();
            cc.sys.localStorage.setItem("agree_notice_today", ""+date.getDate());
        }
        cc.sys.localStorage.setItem("agree_notice", "1");
        
        cc.tween(this.node).to(0.2, {position:cc.v3(0,-1080,0)}).call(()=>{
            this.node.destroy();
        }).start();
    }
    onBtnNotAgree(){   
        GameLogic.instance.callBridge("goBack", {}, () => { })
    }
    onBtnNotice(){ 
        Game.instance.showView("Agree");
    }
    onBtnHelp(){
        Game.instance.showView("FootHelp");
    }

    // update (dt) {}
}
