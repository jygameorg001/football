import { BallRun } from "./BallRun";
import { AudioMgr } from "./common/AudioMgr";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    @property(cc.Node) audioBtn: cc.Node = null;
    @property(cc.Node) playNotice: cc.Node = null;
    public static instance: Game = null;
    @property(cc.Prefab) toast: cc.Prefab = null;
    bgVolume: number;

    protected onLoad(): void {
        Game.instance = this;
        AudioMgr.init();
        this.initView();
        this.initEvents();
        GameLogic.instance.initUserInfo();
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);
        // cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
        this.checkNotice();
        EventMgr.on("toastview", this.showToast, this);
        // const node = new cc.Node();
        // node.addComponent(cc.Graphics);
        // node.parent = this.gifts;
        // this.trailGraphics = node.getComponent(cc.Graphics);
        // BallRun.getInstance().initFootBall(this.football, this.trailGraphics)

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                console.log('页面进入后台');
            } else {
                console.log('页面回到前台2');
                //    window.location.reload()
                this.onShow();
                // this.audioBtn.active = true;
                // // AudioMgr.setMusicVolume(this.bgVolume);
                // // AudioMgr.resumeMusic();
                // this.onShow();
                // console.log('页面回到前台2');

                //重启游戏
                // GameLogic.instance.callBridge("restartGame", {}, (res) => {

            }
        });


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
        let node = cc.instantiate(this.toast);
        node.parent = Game.instance.node;
        node.getComponent("ToastView").showToast(msg, time);
    }

    onHide() {
        this.bgVolume = AudioMgr.getMusicVolume();
    }
    onShow() {
     console.log("====on Game show==="+AudioMgr.getMusicVolume().toFixed(3)+","+this.bgVolume.toFixed(3))
        this.audioBtn.active = true;
        AudioMgr.stopMusic();
        cc.audioEngine.stopAll();
        cc.audioEngine.uncacheAll();
        const audio = document.getElementById('customAudio') as HTMLAudioElement;
        if(audio){
            console.log("=====audio=="+audio.muted)
        }

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
        cc.game.off(cc.game.EVENT_HIDE, this.onHide, this);
        cc.game.off(cc.game.EVENT_SHOW, this.onShow, this);
        EventMgr.off("toastview", this.showToast, this);
        Game.instance = null;
        EventMgr.clearByTarget(this);
    }

    start() {

    }

    showView(path: string, parent?, callback?) {
        let bundle = cc.assetManager.getBundle("resources");
        bundle.load(path, cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                console.log(err);
                return;
            }
            let node = cc.instantiate(prefab);
            let root = parent || Game.instance.node;
            node.parent = root;
            if (callback) {
                callback(node);
            }
        })
    }

    // onBtnShoot() {
    //     BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position);
    // }

    shakeNode(node, len = 15) {
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
    onAudioPlay(sender: cc.Button) {
        const audio = document.getElementById('customAudio') as HTMLAudioElement;
        if (audio) {
            // audio.muted = true;
            audio.play();
        }
        AudioMgr.playMusic("audio/homeMusic");
        this.audioBtn.active = false;

    }
}
