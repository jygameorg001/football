import { BallRun } from "./BallRun";
import { AudioMgr } from "./common/AudioMgr";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import { GameLogic } from "./GameLogic";
import Home from "./Home";
import Shoot from "./Shoot";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(cc.Node) playNotice: cc.Node = null;
    public static instance: Game = null;
    bgVolume: number;
    homeView: Home=null;//当前界面
    shootView:Shoot=null;

    viewList:cc.Node[] = [];

    protected onLoad(): void {
        Game.instance = this;
        AudioMgr.init();
        this.initView();
        this.initEvents();
        GameLogic.instance.initUserInfo();
        GameLogic.instance.getLiveRoomInfo();
        // cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);
        // cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
        this.checkNotice();
        EventMgr.on("toastview", this.showToast, this);
        EventMgr.on("goHome", this.goHomeback, this);
        EventMgr.on("HttpError", this.onHttpError, this);
        EventMgr.on("HttpTimeOut", this.onHttpError, this);
        EventMgr.on("offline", this.offline,this);
        window.addEventListener("offline",()=>{
            EventMgr.emit("offline");
        } )
        window.addEventListener("online",()=>{
            GameLogic.instance.isOffLine = false;
        } )
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.onHide();
            } else {
                this.onShow();
            }
        });

    }
    offline(){
        GameLogic.instance.isOffLine = true;
        this.showToast("网络断开")
    }
    onHttpError(){
        this.showToast("网络异常")
    }
    checkNotice() {
        this.playNotice.active = true;
        let str = cc.sys.localStorage.getItem("agree_notice");
        let day = new Date().getDate();
        let dayStr = cc.sys.localStorage.getItem("agree_notice_today");
        if (str && Number(dayStr) == day) {
            this.playNotice.active = false;
        }
    }

    //加载全局飘框
    showToast(msg: string, time: number = 2) {
        this.showView("toastView",null,(node)=>{
            node.getComponent("ToastView").showToast(msg, time);
        })

    }

    onHide() {
        // if(GameLogic.instance.isIosMobile()&&GameLogic.instance.isIOSVersionBig()){
        //     cc.audioEngine.stopAll();
        //     cc.audioEngine.uncacheAll();
        //     return;
        // }
    }
    onShow() {
        // if(GameLogic.instance.isIosMobile()&&GameLogic.instance.isIOSVersionBig()){
        //     cc.audioEngine.stopAll();
        //     cc.audioEngine.uncacheAll();
        //     return;
        // }
        this.refreshPlayerInfo();
    }
    refreshPlayerInfo() {
        GameLogic.instance.callBridge("refreshAmount", {}, (res) => {
            console.log("refreshAmount res", res)
            if (res.code == 0) {
                EventMgr.emit("onGetPlayerInfo", res.data);
            }
        })
        GameLogic.instance.reqPlayerInfo();
    }

    initView() {
    }
    initEvents() {
        // EventMgr.on("onGetUserInfo", this.onGetUserInfo, this);
        // EventMgr.on("onGetPlayerInfo", this.onGetPlayerInfo, this);
        // EventMgr.on("onQueryGiftList", this.onQueryGiftList, this);
        // EventMgr.on("onShooting", this.onShooting, this);
    }

    protected onDestroy(): void {
        EventMgr.off("toastview", this.showToast, this);
        EventMgr.off("goHome", this.goHomeback, this);
        Game.instance = null;
        EventMgr.clearByTarget(this);
    }
    goHomeback() {
        AudioMgr.playMusic("audio/homeMusic");
    }

    start() {
        // if(GameLogic.instance.isIosMobile()){         
        //     return;
        // }
        GameLogic.instance.setClickBG();
    }

    showView(path: string, parent?, callback?) {
        let bundle = cc.assetManager.getBundle("resources");
        bundle.load(path, cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                console.log(err);
                return;
            }
            //设置只有一个
            let oldNode = Game.instance.node.getChildByName(path);
            if(oldNode){
                oldNode.destroy();
            }
            let node = cc.instantiate(prefab);
            let root = parent || Game.instance.node;
            node.parent = root;
            node.name = path;
            if (callback) {
                callback(node);
            }
        })
    }

    // onBtnShoot() {
    //     BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position);
    // }

    shakeNode(node, len = 15,call) {
        function Rand() {
            return Math.random() * len - len / 2;
        }
        // 停止当前节点的其他动画，避免冲突
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x, node.y), scale: 1.0 })      // 回到原位
            .call(()=>{
                if(call){
                    call();
                }
            })
            .start();             // 启动动画
    }
    shakeNode2(node, len = 15) {
        function Rand() {
            return Math.random() * len - len / 2;
        }
        // 停止当前节点的其他动画，避免冲突
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x + + Rand(), node.y + Rand()) })
            .to(0.05, { position: cc.v3(node.x, node.y), scale: 1.0 })      // 回到原位
            .start();             // 启动动画
    }

    beginCheck(){
        this.unschedule(this.onCheckNext)
        this.schedule(this.onCheckNext,2)
    }
    onCheckNext(){
        if(GameLogic.instance.loadCount==0){
            EventMgr.emit("OnCheckOver")
            this.unschedule(this.onCheckNext)
        }
    }

}
