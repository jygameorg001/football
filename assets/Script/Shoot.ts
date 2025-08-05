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
    // @property(cc.Prefab) rewardview: cc.Prefab = null;
    // @property(cc.Prefab) rewardTenview: cc.Prefab = null;
    @property(cc.Node) rewardViewNode: cc.Node = null;//奖励弹窗
    //自动射门按钮
    @property(cc.Node) autoBtn: cc.Node = null;
    //自动射门窗口
    @property(cc.Node) autoWindow: cc.Node = null;
    //自动射门预制体item
    // @property(cc.Prefab) autorewardItem: cc.Prefab = null;//rewardItemtips
    isAuto: boolean = false;
    @property(cc.Node) light: cc.Node = null;
    @property(cc.Node) btnShoot: cc.Node = null;

    @property(cc.ScrollView) scrollView: cc.ScrollView = null;

    @property(SVGAPlayer)
    svga: SVGAPlayer = null;

    @property(cc.Node)
    Jinzhong: cc.Node = null;

    @property(cc.Node)
    btnOne: cc.Node = null;
    @property(cc.Node)
    btnTen: cc.Node = null;

    @property(cc.Node) xingxingTips: cc.Node = null;

    //是否为次数射门
    isTimeshoot: boolean = false;

    timsShoot: number = 0;//射球剩下次数
    @property(cc.SpriteAtlas) ballAltlas: cc.SpriteAtlas = null;
    giftList: cc.Node[] = [];
    canShoot: boolean = false;
    ballSprite: cc.Sprite = null;
    isSuperShoot: boolean = false;//十次模式
    shootByAuto: boolean;
    protected onLoad(): void {
        EventMgr.on("onGetGiftList", this.updateGifts, this);
        this.initBtnClickHandle();
        this.initGiftNodes();
        this.onEvent();
        this.ballSprite = this.football.getChildByName("icon").getComponent(cc.Sprite);
        this.ballSprite.node.zIndex = 1;
        BallRun.getInstance().initFootBall(this.football, this.baiDoor.parent)
        BallRun.getInstance().liziNode = this.tuowei;
        BallRun.getInstance().giftList = this.giftList;
        BallRun.getInstance().initGiftPos();
        this.clearAutoReward();
        this.Jinzhong.active = false;

        //scrollView直接隐藏滑动条

        this.tuowei.active = false;
        this.xingxingTips.active = false;
        this.isAuto = false;
        this.upinfo();
        this.energy.string = GameLogic.instance.playerInfo.luckScore + "";
        this.listNode.active = false;
        this.resetShootBtns(false);
        this.shootByAuto = false;
        this.initListItems();
    }
    onEvent() {
        EventMgr.on("onGetPlayerInfo", this.upinfo, this);
        EventMgr.on("onShooting", this.onShooting, this);
        EventMgr.on("closeRewardview", this.closeRewardview, this);
        EventMgr.on("closeRewardviewShoot", this.closeRewardviewShoot, this);
        EventMgr.on("shootOverTimes", this.shootOverTimes, this);
        EventMgr.on("kuangAni", this.kuangAni, this);
        EventMgr.on("onShootingError", this.onShootingError,this)
    }

    protected onDestroy(): void {
        EventMgr.off("onGetPlayerInfo", this.upinfo, this);
        EventMgr.off("onShooting", this.onShooting, this);
        EventMgr.off("closeRewardview", this.closeRewardview, this);
        EventMgr.off("closeRewardviewShoot", this.closeRewardviewShoot, this);
        EventMgr.off("shootOverTimes", this.shootOverTimes, this);
        EventMgr.off("kuangAni", this.kuangAni, this);
        EventMgr.clearByTarget(this);
    }

    upinfo() {
        // this.energy.string = GameLogic.instance.playerInfo.luckScore + "";
        this.currency.string = GameLogic.instance.playerInfo.currency + "";
        // this.luckScore.string = "消耗: " + GameLogic.instance.playerInfo.luckScore + "U币";
    }
    upLuck() {
        this.energy.string = GameLogic.instance.playerInfo.luckScore + "";
        cc.tween(this.energy.node).to(0.2, { scale: 1.2 }).to(0.2, { scale: 1 }).start();
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
            GameLogic.instance.loadRemoteSprite(gift.giftImage, node.getComponent(cc.Sprite),90);
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
        // 检查 btn.getComponent(cc.Button).interactable 是否为 false
        this.isAuto = !this.isAuto;
        this.setAutoViews();
    }

    setAutoViews(){
        this.autoBtn.getChildByName("auto_btn_close").active = !this.isAuto;
        this.autoBtn.getChildByName("auto_btn_open").active = this.isAuto;
        this.btnShoot.active = this.isAuto;
        if (this.isAuto) {
            this.timsShoot =1;
            this.isSuperShoot = false;
            this.clearAutoReward();
            //准备射击
            this.beginAutoShoot();
        }
    }
    beginAutoShoot(){
        //正在射击中 不用处理
        if(!this.canShoot){
            return;
        }
        this.autoShoot();
    }
    autoShoot() {  
        this.resetShootBtns(true);
        this.shootByAuto = true;  
        let total = GameLogic.instance.playerInfo.currency;
        let cost = 500;
        if (total < cost) {
            EventMgr.emit("toastview", "余额不足");
            this.resetShootBtns(false);
            this.shootByAuto = false;
            return;
        }
        this.isSuperShoot = false;
        GameLogic.instance.reqShooting(1)
    }

    onBtnShoot(times: number = 1) {
        // 是否可以射击
        if (!this.canShoot) {
            return;
        }
        let total = GameLogic.instance.playerInfo.currency;
        //当前要花费的金额
        let cost = 500 * times;
        //判断余额
        if (total < cost) {
            Game.instance.showToast("余额不足")
            return;
        }
        this.isSuperShoot = times == 10;
        this.isTimeshoot = true;
        this.resetShootBtns(true);
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
    isHasReward(rewardList) {
        for (let i = 0; i < rewardList.length; i++) {
            let rewardInfo = rewardList[i];
            if (rewardInfo.reward > 0) {
                return true
            }
        }
        return false;
    }
    onShooting(data) {
        GameLogic.instance.reqPlayerInfo();
        this.shootPlay();
    }
    onShootingError(){
        this.resetShootBtns();
        this.shootByAuto = false;
    }
    resetShootBtns(isShoot=false){
        this.canShoot = !isShoot;
        this.setSheBtnState(this.btnOne, !isShoot);
        this.setSheBtnState(this.btnTen, !isShoot);
        this.isTimeshoot = isShoot;
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
            if (this.isHasReward(GameLogic.instance.ShootingInfo.rewardList)) {
                this.upLuck();
            }
            this.unschedule(this.onBallRunning);
            // 等待奖励完成 射门流程完成 可以继续射击
            let shadow = this.football.getChildByName("shadow")
            shadow.active = true;
            // 1 自动射门中
            if(this.shootByAuto){
                this.noShowReward();
                return;
            }
            // 非自动射门
            this.shootByAuto = false;
            this.shootOver();
        })
    }
    checkAutoShoot(){
        if(this.isAuto){
            this.beginAutoShoot();
        }
    }

    //播放击中中奖效果
    kuangAni(index: number) {
        console.log("击中", index);
        // 先判断是不是有序列帧，播放前清空
        this.Jinzhong.active = false;
        this.Jinzhong.getComponent(cc.Animation).stop();
        //改成播放序列帧动画
        this.Jinzhong.active = true;
        this.Jinzhong.getComponent(cc.Animation).play();
        //    设置位置
        this.Jinzhong.setPosition(this.giftList[index].getPosition().x, this.giftList[index].getPosition().y + 167);
        AudioMgr.playSound("audio/jinzhongClick");
    }


    shootOver() {
        this.timsShoot = 0;
        if (GameLogic.instance.ShootingInfo.rewardList.length > 1) {
            this.showTenReward();
            this.svga.playSVGA();
            this.showDoorBlink();
            this.light.active = true;
        } else {
            this.showReward();
            if (GameLogic.instance.ShootingInfo.rewardList[0].reward > 0) {
                this.svga.playSVGA();
                this.showDoorBlink();
                this.light.active = true;
            }
        }
    }

    // 按钮射门按钮状态设置
    setSheBtnState(btn: cc.Node, state: boolean) {
        btn.getComponent(cc.Button).interactable = state;
        btn.children[0].active = state;
        btn.children[1].active = !state;
    }


    closeRewardview() {
        this.light.active = false;
        this.scheduleOnce(()=>{
            this.checkAutoShoot();
        },0)
    }

    closeRewardviewShoot(time) {
        this.timsShoot = time;
        this.onBtnShoot(time);
    }

    //不弹框显示奖励
    noShowReward() {
        // 创建一个奖励节点
        if (GameLogic.instance.ShootingInfo) {
            const rewardInfo = GameLogic.instance.ShootingInfo.rewardList[0];
            Game.instance.showView("rewardItemtips", this.autoWindow, (node) => {
                let item: RewardItemtips = node.getComponent(RewardItemtips);
                item.setDataOne(rewardInfo)
                this.scheduleOnce(() => {
                    this.scrollView.scrollToBottom(0.1);
                }, 0.1)
            })
        }
        
        this.scheduleOnce(()=>{
            // 检测是否能开启自动射门
            if(this.isAuto){
                this.autoShoot();
            }else{
                this.shootByAuto = false;
                this.resetShootBtns();
            }   
        },0.15);
    }
    tenRewardItemTips: RewardItemtips = null;
    noShowRewardTen(times: number) {
        if (times > 10) return
        let str = this.getRewardStr(times);
        if (this.tenRewardItemTips) {
            const layout = this.autoWindow.getComponent(cc.Layout)
            layout.enabled = false;

            this.tenRewardItemTips.setString(str);

            this.scheduleOnce(() => {
                layout.enabled = true;
                layout.updateLayout();
            }, 0)
            if (times > 8) {
                this.scheduleOnce(() => {
                    this.scrollView.scrollToBottom(0.1);
                }, 0.1)
            }
        } else {
            Game.instance.showView("rewardItemtips", this.autoWindow, (node) => {
                let item: RewardItemtips = node.getComponent(RewardItemtips);
                item.setString(str);
                this.tenRewardItemTips = item;
            })
        }

        // let layout = this.autoWindow.getComponent(cc.Layout);
        // layout.updateLayout();

        // if (this.scrollView) {
        //     // 注意：updateScrollView方法在旧版本中可能没有参数，新版本有参数表示是否立即刷新
        //     // 如果是新版本，可以传入true立即刷新
        //     this.scrollView.updateScrollView();
        // }

    }

    getRewardStr(num) {
        let rewardList = GameLogic.instance.ShootingInfo.rewardList;
        let header = "太棒了!恭喜获得 \n"
        let str = "";
        for (let i = 0; i < num; i++) {
            let rewardInfo = rewardList[i];
            let names1 = this.getGiftNameById(rewardInfo.giftId) + "x1 ";
            if (rewardInfo.reward > 0) {
                let names2 = " 幸运分x" + rewardInfo.reward;
                str += "<color=#ffffff>" + names1 + "</color><color=#FFEF40>" + names2 + "</color>";
            } else {
                str += "<color=#ffffff>" + names1 + "</color>";
            }
            if (i != num - 1) {
                str += "\n"
            }
        }
        header += str;
        return header;
    }
    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.giftId === id);
        return gift ? gift.giftName : null;
    }
    //清空自动模式奖励
    clearAutoReward() {
        this.autoWindow.destroyAllChildren();
        this.tenRewardItemTips = null;
    }


    //弹框显示奖励
    showReward() {
        this.rewardViewNode.destroyAllChildren();
        Game.instance.showView("rewardview", this.rewardViewNode, (node) => {
            let bg = node.getChildByName("bg");
            bg.scale = 0;
            cc.tween(bg).to(0.3, { scale: 1.1 }).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).call(
                () => {
                    this.resetShootBtns();
                }
            ).start();
        });

    }

    //显示10局奖励
    showTenReward() {
        this.rewardViewNode.destroyAllChildren();
        Game.instance.showView("rewardListview", this.rewardViewNode, (node) => {
            let bg = node.getChildByName("bg");
            bg.scale = 0;
            cc.tween(bg).to(0.3, { scale: 1.1 }).to(0.2, { scale: 0.9 }).to(0.2, { scale: 1 }).call(()=>{
                this.resetShootBtns();
            }).start();
        })
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
        // console.log("==onBtnClickHandle==", name);
        GameLogic.instance.setClickEnable(0.5);
        switch (name) {
            case "btnBuy":
                if (this.isTimeshoot) {
                    EventMgr.emit("toastview", "正在射门中,请稍后...");
                    return;
                }
                this.go2Buy();
                break;
            case "btnBack":
                EventMgr.emit("goHome");
                this.node.active = false;
                Game.instance.homeView.node.active =true;
                Game.instance.homeView.initView();
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
                this.timsShoot = 1;
                this.onBtnShoot(1);
                break;
            case "btnShootTen":
                this.timsShoot = 10;
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
            case "btnAuto":
                this.autoBtnClick();
                break;
            case "btnLuckStar":
                if (GameLogic.instance.playerInfo.luckScore > 0) {
                    this.xingxingTips.active = true;
                    this.xingxingTips.opacity = 255;
                    cc.tween(this.xingxingTips).delay(2).to(0.5, { opacity: 0 }).call(() => {
                        this.xingxingTips.active = false;
                        this.xingxingTips.opacity = 255;
                    }).start()
                }
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
