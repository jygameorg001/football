import {AudioMgr} from "./common/AudioMgr";
import Game from "./Game";
import {GameLogic} from "./GameLogic";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Home extends cc.Component {
    @property([cc.Node])pics:cc.Node[] = [];
    start () {

    }
    onBtnLeft(){}
    onBtnRight(){}
    onBtnBack(){
        GameLogic.instance.closeGame();
    }
    onBtnGo(){
        Game.instance.showView("Shoot");
    }
    onBtnHelp(){
        Game.instance.showView("Help");
    }
    onBtnSound(){
        AudioMgr.isPaused = !AudioMgr.isPaused;
        if(AudioMgr.isPaused){
            AudioMgr.pauseMusic();
        }else{
            AudioMgr.resumeMusic();
        }
        // 切换图标
    }

    onBtnHome(){
        GameLogic.instance.closeGame();
    }

    // update (dt) {}
}
