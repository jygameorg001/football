import { BallRun } from "./BallRun";
import { AudioMgr } from "./common/AudioMgr";
import { EventMgr } from "./common/EventManager";
import Game from "./Game";
import { GameLogic } from "./GameLogic";
import RewardItemtips from "./RewardItemtips";
import SVGAPlayer from "./svga-cocos/cocos/svga-player";

const { ccclass, property } = cc._decorator;
const isTest = true;
@ccclass
export default class Shoot extends cc.Component {
    @property(cc.Sprite) starName: cc.Sprite = null;
    @property(cc.Node) listNode: cc.Node = null;
    @property(cc.Node) soundBtn: cc.Node = null;
    @property(cc.Node) baiDoor: cc.Node = null;
    @property(sp.Skeleton) ribbon: sp.Skeleton = null;
    @property(cc.Node) football: cc.Node = null;
    @property(cc.Node) giftNode: cc.Node = null;
    @property(cc.Label) currency: cc.Label = null;
    @property(cc.Label) energy: cc.Label = null;
    @property(cc.Label) luckScore: cc.Label = null;
    @property(cc.Node) tuowei: cc.Node = null;
    @property(cc.Prefab) rewardview: cc.Prefab = null;
    @property(cc.Prefab) rewardTenview: cc.Prefab = null;
    @property(cc.Node) rewardViewNode: cc.Node = null;//奖励弹窗
    //自动射门按钮
    @property(cc.Node) autoBtn: cc.Node = null;
    //自动射门窗口
    @property(cc.Node) autoWindow: cc.Node = null;
    //自动射门预制体item
    @property(cc.Prefab) autorewardItem: cc.Prefab = null;
    isauto: boolean = false;
    @property(cc.Node) light: cc.Node = null;
    @property(cc.Node) btnShoot: cc.Node = null;

    @property(cc.ScrollView) scrollView: cc.ScrollView = null;

    @property(SVGAPlayer)
    svga: SVGAPlayer = null;

    @property(cc.Node)
    btnOne: cc.Node = null;
    @property(cc.Node)
    btnTen: cc.Node = null;
    //是否为次数射门
    isTimeshoot: boolean = false;

    timsShoot: number = 0;//射球剩下次数
    timeshootal: number = 1;//总次数



    @property(cc.SpriteAtlas) ballAltlas: cc.SpriteAtlas = null;
    giftList: cc.Node[] = [];
    canShoot: boolean = false;
    ballSprite: cc.Sprite = null;
    isSuperShoot: boolean = false;//十次模式
    protected onLoad(): void {
        EventMgr.on("onGetGiftList", this.updateGifts, this);
        this.initBtnClickHandle();
        this.initGiftNodes();
        this.onEvent();
        const node = new cc.Node();
        node.addComponent(cc.Graphics);
        node.parent = this.giftNode;
        let trailGraphics = node.getComponent(cc.Graphics);
        this.ballSprite = this.football.getChildByName("icon").getComponent(cc.Sprite);
        this.ballSprite.node.zIndex = 1;
        BallRun.getInstance().initFootBall(this.football, this.baiDoor.parent, trailGraphics)
        BallRun.getInstance().liziNode = this.tuowei;
        BallRun.getInstance().giftList = this.giftList;
        this.clearAutoReward();

        //scrollView直接隐藏滑动条





        this.tuowei.active = false;
        this.canShoot = true;
        this.upinfo();
        this.listNode.active = false;

        //初始化按钮
        this.setSheBtnState(this.btnOne, true);
        this.setSheBtnState(this.btnTen, true);


        this.initListItems();
        AudioMgr.playMusic("audio/gameMusic", true);
    }
    onEvent() {
        EventMgr.on("onGetPlayerInfo", this.upinfo, this);
        EventMgr.on("onShooting", this.onShooting, this);
        EventMgr.on("closeRewardview", this.closeRewardview, this);
        EventMgr.on("closeRewardviewShoot", this.closeRewardviewShoot, this);
        EventMgr.on("shootOverTimes", this.shootOverTimes, this);
    }

    protected onDestroy(): void {
        EventMgr.off("onGetPlayerInfo", this.upinfo, this);
        EventMgr.off("onShooting", this.onShooting, this);
        EventMgr.off("closeRewardview", this.closeRewardview, this);
        EventMgr.off("closeRewardviewShoot", this.closeRewardviewShoot, this);
        EventMgr.off("shootOverTimes", this.shootOverTimes, this);
        EventMgr.clearByTarget(this);
    }

    upinfo() {
        this.energy.string = GameLogic.instance.playerInfo.luckScore + "";
        this.currency.string = GameLogic.instance.playerInfo.currency + "";
        // this.luckScore.string = "消耗: " + GameLogic.instance.playerInfo.luckScore + "U币";
    }


    initGiftNodes() {
        for (let i = 0; i < 9; i++) {
            this.giftList[i] = this.giftNode.getChildByName("gift" + (i + 1));
            let kuang = this.giftList[i].getChildByName("kuang");
            kuang.active = false;
        }
        if (GameLogic.instance.giftList.length > 0) {
            this.updateGifts();
        }
        else {
            GameLogic.instance.reqQueryGiftList();
        }
    }
    updateGifts() {
        for (let i = 0; i < this.giftList.length; i++) {
            let gift = GameLogic.instance.giftList[i];
            let node = this.giftList[i];
            GameLogic.instance.loadRemoteSprite(gift.giftImage, node.getComponent(cc.Sprite));
        }
    }
    protected initBtnClickHandle() {
        this.getComponentsInChildren(cc.Button).forEach((btn) => {
            if (btn.transition === cc.Button.Transition.NONE) {
                btn.transition = cc.Button.Transition.SCALE;
                btn.duration = 0.1;
                btn.zoomScale = 0.9;
            }
            btn.node.on(
                "click",
                () => {
                    this.onBtnClickHandle(btn.node.name, btn);
                },
                this
            );
        });
    }

    start() {
        this.initSoundIcon();
    }

    autoBtnClick() {
        if (this.isTimeshoot) {
            EventMgr.emit("toastview", "正在射门中,请稍后...");
            return;
        }
        // 检查 btn.getComponent(cc.Button).interactable 是否为 false
        this.isauto = !this.isauto;
        this.autoBtn.getChildByName("auto_btn_close").active = !this.isauto;
        this.autoBtn.getChildByName("auto_btn_open").active = this.isauto;
        this.btnShoot.active = this.isauto;
        this.canShoot = !this.isauto;
        if (this.isauto) {
            this.timsShoot = this.timeshootal = 1;
            this.setSheBtnState(this.btnOne, false);
            this.setSheBtnState(this.btnTen, false);
            this.isSuperShoot = false;
            this.clearAutoReward();
            this.autoShoot();
        } else {
            this.setSheBtnState(this.btnOne, true);
            this.setSheBtnState(this.btnTen, true);
        }
    }


    autoShoot() {
        let total = GameLogic.instance.playerInfo.currency;
        let cost = 500;
        if (total < cost) {
            EventMgr.emit("toastview", "余额不足");
            return;
        }
        GameLogic.instance.reqShooting(1)
    }

    onBtnShoot(times: number = 1) {
        console.log("===onBtnShoot====", this.canShoot)
        // 是否可以射击
        if (!this.canShoot) {
            return;
        }
        let total = GameLogic.instance.playerInfo.currency;
        //当前要花费的金额
        let cost = 500 * times;
        //判断余额
        if (total < cost) {
            EventMgr.emit("toastview", "余额不足");
            return;
        }
        this.isSuperShoot = times == 10;
        this.isTimeshoot = true;
        this.setSheBtnState(this.btnOne, false);
        this.setSheBtnState(this.btnTen, false);
        this.canShoot = false;
        GameLogic.instance.reqShooting(times);
        this.clearAutoReward();
    }

    getIdByGiftId(giftId) {
        for (let i = 0; i < GameLogic.instance.giftList.length; i++) {
            let gift = GameLogic.instance.giftList[i];
            if (gift.giftId == giftId) {
                return i;
            }
        }
        return 0;
    }
    onShooting(data) {
        // GameLogic.instance.callBridge("onEnergyChange", {}, (res) => {
        //     const { code, message, data } = res;
        //     console.log("==onEnergyChange res", res)
        // })
        GameLogic.instance.reqPlayerInfo();
        this.shootPlay();
    }
    shootPlay() {
        let data = GameLogic.instance.ShootingInfo;
        let giftId = data.rewardList[0].giftId;
        let id = this.getIdByGiftId(giftId);
        this.beginRunning();
        for (let i = 0; i < 9; i++) {
            let kuang = this.giftList[i].getChildByName("kuang");
            kuang.active = false;
        }
        let shadow = this.football.getChildByName("shadow")
        shadow.active = false;
        BallRun.getInstance().shootGiftId(id, this.isSuperShoot, () => {
            // show win reward
            this.unschedule(this.onBallRunning);
            // 等待奖励完成 射门流程完成 可以继续射击
            let shadow = this.football.getChildByName("shadow")
            shadow.active = true;
            if (this.isauto) {//自动模式
                this.noShowReward();
                this.canShoot = false;
            } else {
                this.shootOver();
            }
        })
    }

    shootOver() {
        this.timsShoot = 0;
        this.svga.playSVGA();
        if (GameLogic.instance.ShootingInfo.rewardList.length > 1) {
            this.showTenReward();
        } else {
            this.showReward();
        }
        this.isTimeshoot = false;
        this.showDoorBlink();
        this.light.active = true;
        this.canShoot = true;
        this.setSheBtnState(this.btnOne, true);
        this.setSheBtnState(this.btnTen, true);
    }

    // 按钮射门按钮状态设置
    setSheBtnState(btn: cc.Node, state: boolean) {
        btn.getComponent(cc.Button).interactable = state;
        btn.children[0].active = state;
        btn.children[1].active = !state;
    }


    closeRewardview() {
        this.light.active = false;
    }

    closeRewardviewShoot() {
        this.light.active = false;
        if (this.timeshootal == 1) {
            this.timsShoot = this.timeshootal = 1;
            this.onBtnShoot(1);
        } else if (this.timeshootal == 10) {
            this.timsShoot = this.timeshootal = 10;
            this.onBtnShoot(10);
        }

    }


    //不弹框显示奖励
    noShowReward() {
        // 检查是不是自动模式
        if (!this.isauto) return;
        // 创建一个奖励节点
        if (GameLogic.instance.ShootingInfo) {
            let rewarTips = cc.instantiate(this.autorewardItem);
            rewarTips.parent = this.autoWindow;
            (rewarTips.getComponent(RewardItemtips) as RewardItemtips).setDataOne();

            this.scheduleOnce(() => {
                //获得this.autoWindow所有子节点的高度
                let height = 0;
                for (let i = 0; i < this.autoWindow.children.length; i++) {
                    height += this.autoWindow.children[i].height;
                }
                if (height > 294) {
                    this.scrollView.scrollToBottom();
                } else {
                    this.scrollView.scrollToTop();

                }

            }, 0.1)
        }
        if (this.isauto) {
            this.autoShoot();
        }
    }
    rewarTips = null;
    noShowRewardTen(times: number) {
        if (times > 10) return
        let num = times - 1;
        if (num == 0 && this.rewarTips == null) {
            this.rewarTips = cc.instantiate(this.autorewardItem);
            this.rewarTips.parent = this.autoWindow;
        }
        if (this.rewarTips) {
            (this.rewarTips.getComponent(RewardItemtips) as RewardItemtips).setDataTen(num);
        }
        //滚动到最下面
        this.scrollView.scrollToBottom();
    }



    //清空自动模式奖励
    clearAutoReward() {
        this.autoWindow.destroyAllChildren();
        if (this.rewarTips) {
            this.rewarTips.destroy();
            this.rewarTips = null;
        }
    }


    //弹框显示奖励
    showReward() {
        let rewardView = cc.instantiate(this.rewardview);
        rewardView.parent = this.rewardViewNode;
        let bg = rewardView.getChildByName("bg");
        bg.scale = 0;
        cc.tween(bg).to(0.3, { scale: 1.1 }).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).start();
        AudioMgr.playSound("audio/bigwin");
    }

    //显示10局奖励
    showTenReward() {
        let rewardtenView = cc.instantiate(this.rewardTenview);
        rewardtenView.parent = this.rewardViewNode;
        let bg = rewardtenView.getChildByName("bg");
        bg.scale = 0;
        cc.tween(bg).to(0.3, { scale: 1.1 }).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).start();
        AudioMgr.playSound("audio/bigwin");
    }

    private ballIdx: number = 1;
    private dxIdx = 10;
    beginRunning() {
        this.dxIdx = 10;
        this.ballIdx = Math.floor(Math.random() * 60) + 1;
        // console.log("===beginRunning===",this.dxIdx,this.ballIdx)
        this.unschedule(this.onBallRunning);
        this.schedule(this.onBallRunning);
    }
    onBallRunning(dt) {
        this.ballIdx = this.ballIdx + this.dxIdx;

        this.ballIdx = this.ballIdx % 60 + 1;
        if (this.ballIdx > 60) {
            this.ballIdx = this.ballIdx % 60;
        }
        let idx = this.ballIdx;
        let key = idx < 10 ? "0" + idx : "" + idx;
        let frameName = "images-ball-000" + key;
        // console.log("====frameName====",frameName)
        let spriteFrame = this.ballAltlas.getSpriteFrame(frameName);
        this.ballSprite.spriteFrame = spriteFrame;
        if (this.dxIdx > 5 && Math.random() > 0.7) {
            this.dxIdx--;
        }
        if (this.dxIdx < 5) {
            this.dxIdx = 5;
        }
        // console.log("======",this.dxIdx,this.ballIdx)
    }
    onBtnClickHandle(name, btn) {
        console.log("==onBtnClickHandle==", name);
        switch (name) {
            case "btnBuy":
                if (this.isTimeshoot) {
                    EventMgr.emit("toastview", "正在射门中,请稍后...");
                    return;
                }
                this.go2Buy();
                break;
            case "btnBack":
                this.node.destroy();
                break;
            case "btnHelp":
                Game.instance.showView("FootHelp");
                break;
            case "btnSound":
                if (this.isTimeshoot) {
                    EventMgr.emit("toastview", "正在射门中,请稍后...");
                    return;
                }
                AudioMgr.isPaused = !AudioMgr.isPaused;
                cc.sys.localStorage.setItem("isPaused", AudioMgr.isPaused ? "1" : "0");
                this.initSoundIcon();
                break;
            case "btnName":
                if (this.isTimeshoot) {
                    EventMgr.emit("toastview", "正在射门中,请稍后...");
                    return;
                }
                this.listNode.active = true;
                break;
            case "listNode":
                this.listNode.active = false;
                break;
            case "btnShoot":
                this.onBtnShoot();
                break;
            case "btnShootOne":
                this.timsShoot = this.timeshootal = 1;
                this.onBtnShoot(1);
                break;
            case "btnShootTen":
                this.timsShoot = this.timeshootal = 10;
                this.onBtnShoot(10);
                break;
            case "item0":
                this.onClickItem(0)
                break;
            case "item1":
                this.onClickItem(1)
                break;
            case "item2":
                this.onClickItem(2)
                break;
        }
    }
    initListItems() {
        let id = GameLogic.instance.getCurrentStar().id;
        let content = this.listNode.getChildByName("content");

        let item = content.getChildByName("item" + id);
        let sprite = item.getChildByName("name_m").getComponent(cc.Sprite);
        this.starName.spriteFrame = sprite.spriteFrame;
        for (let i = 0; i < content.children.length; i++) {
            let item = content.children[i];
            let check = item.getChildByName("check");
            check.active = item.name == "item" + id
        }
    }
    onClickItem(id) {
        this.listNode.active = false;
        GameLogic.instance.setChooseStar(id);
        this.initListItems();
    }


    showDoorBlink() {
        // cc.tween(this.baiDoor)
        // .repeatForever(
        //     cc.tween().blink(2, 10)
        // )
        // .start(); 
        cc.tween(this.baiDoor).blink(1.5, 15).start();
        this.ribbon.node.active = true;
        this.ribbon.setAnimation(0, "Ribbon", false);
    }
    stopShowDoor() {
        cc.Tween.stopAllByTarget(this.baiDoor);
    }

    initSoundIcon() {
        if (AudioMgr.isPaused) {
            AudioMgr.pauseMusic();
        } else {
            AudioMgr.resumeMusic();
        }
        // 切换图标
        let on = this.soundBtn.getChildByName("on");
        let off = this.soundBtn.getChildByName("off");
        on.active = !AudioMgr.isPaused;
        off.active = AudioMgr.isPaused;
    }
    go2Buy() {
        GameLogic.instance.callBridge("navigateNativeRoute", { to: "customerChargeCenter" }, (res) => {
        })
    }
    //弹球次数 从1到10
    shootOverTimes(times: number) {
        this.ballIdx = Math.floor(Math.random() * 60) + 1;
        this.noShowRewardTen(times);
    }

    // update (dt) {}
}
