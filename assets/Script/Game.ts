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
  homeView: Home = null; //当前界面
  shootView: Shoot = null;

  viewList: cc.Node[] = [];

  protected onLoad(): void {
    let str = window.location.href;
    console.log("=====Game onLoad", window.location.href);
    let info = str.split("?");
    if (info.length > 1) {
      let param = info[1].split("&");
      for (let i = 0; i < param.length; i++) {
        let kv = param[i].split("=");
        if (kv[0] == "test") {
          GameLogic.instance.isTest = true;
        }
      }
    }

    Game.instance = this;
    AudioMgr.init();
    this.initView();
    this.initEvents();
    GameLogic.instance.initUserInfo();
    GameLogic.instance.getLiveRoomInfo();
    // cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);
    // cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
    EventMgr.on("toastview", this.showToast, this);
    EventMgr.on("goHome", this.goHomeback, this);
    EventMgr.on("HttpError", this.onHttpError, this);
    EventMgr.on("HttpTimeOut", this.onHttpError, this);
    EventMgr.on("offline", this.offline, this);
    EventMgr.on("onGetPlayerInfo", this.onGetPlayerInfo, this);
    window.addEventListener("offline", () => {
      EventMgr.emit("offline");
    });
    window.addEventListener("online", () => {
      GameLogic.instance.isOffLine = false;
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        this.onHide();
      } else {
        this.onShow();
      }
    });
  }
  onGetPlayerInfo() {
    if (GameLogic.instance.playerInfo.pop == 0) {
      //不弹
      this.playNotice.active = false;
    }
    if (GameLogic.instance.playerInfo.pop == 1) {
      //每次弹
      this.playNotice.active = true;
      this.checkNotice(1);
    }
    if (GameLogic.instance.playerInfo.pop == 2) {
      //每天弹一次
      this.checkNotice(2);
    }
    if (GameLogic.instance.playerInfo.pop == 3) {
      //每周弹一次
      this.checkNotice(3);
    }
    if (GameLogic.instance.playerInfo.pop == 4) {
      //每天弹一次
      this.checkNotice(4);
    }
  }
  getISOWeek(date: Date): { year: number; week: number } {
    const tempDate = new Date(date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    // 调整到本周的星期四
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7));

    const yearStart = new Date(tempDate.getFullYear(), 0, 4);
    // 调整到当年第一个星期四
    yearStart.setDate(yearStart.getDate() + 3 - ((yearStart.getDay() + 6) % 7));

    const weekNumber =
      Math.round(
        (tempDate.getTime() - yearStart.getTime()) / (7 * 24 * 3600000)
      ) + 1;

    return {
      year: tempDate.getFullYear(),
      week: weekNumber,
    };
  }
  checkNotice(flag) {
    this.playNotice.active = true;
    let lastTime = cc.sys.localStorage.getItem("agree_notice_pop");
    let oldDate = null;
    if (lastTime) {
      oldDate = new Date(Number(lastTime));
    }
    console.log("====lastTime", lastTime, oldDate);
    let date = new Date();
    if (flag == 1) {
      if (oldDate && date.getDate() == oldDate.getDate()) {
        this.playNotice.active = false;
      }
    }
    // 判断是否是同一天
    if (flag == 2) {
      if (oldDate && date.getDate() == oldDate.getDate()) {
        this.playNotice.active = false;
      }
    }
    if (flag == 3) {
      // 使用ISO周标准比较
      const dateWeek = this.getISOWeek(date);
      const oldDateWeek = this.getISOWeek(oldDate);

      if (
        dateWeek.year === oldDateWeek.year &&
        dateWeek.week === oldDateWeek.week
      ) {
        this.playNotice.active = false;
      }
    }
    //判断是否是同一月
    if (flag == 4) {
      if (oldDate && date.getMonth() == oldDate.getMonth()) {
        this.playNotice.active = false;
      }
    }
  }

  offline() {
    GameLogic.instance.isOffLine = true;
    this.showToast("網絡斷開");
  }
  onHttpError() {
    this.showToast("網絡異常");
  }

  //加载全局飘框
  showToast(msg: string, time: number = 2) {
    this.showView("toastView", null, (node) => {
      node.getComponent("ToastView").showToast(msg, time);
    });
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
      console.log("refreshAmount res", res);
      if (res.code == 0) {
        EventMgr.emit("onGetPlayerInfo", res.data);
      }
    });
    GameLogic.instance.reqPlayerInfo();
  }

  initView() {}
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
      if (oldNode) {
        oldNode.destroy();
      }
      let node = cc.instantiate(prefab);
      let root = parent || Game.instance.node;
      node.parent = root;
      node.name = path;
      if (callback) {
        callback(node);
      }
    });
  }

  // onBtnShoot() {
  //     BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position);
  // }

  shakeNode(node, len = 15, call) {
    function Rand() {
      return Math.random() * len - len / 2;
    }
    // 停止当前节点的其他动画，避免冲突
    cc.Tween.stopAllByTarget(node);
    cc.tween(node)
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + +Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x + +Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x, node.y), scale: 1.0 }) // 回到原位
      .call(() => {
        if (call) {
          call();
        }
      })
      .start(); // 启动动画
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
      .to(0.05, { position: cc.v3(node.x + +Rand(), node.y + Rand()) })
      .to(0.05, { position: cc.v3(node.x, node.y), scale: 1.0 }) // 回到原位
      .start(); // 启动动画
  }

  beginCheck() {
    this.unschedule(this.onCheckNext);
    this.schedule(this.onCheckNext, 2);
  }
  onCheckNext() {
    if (GameLogic.instance.loadCount == 0) {
      EventMgr.emit("OnCheckOver");
      this.unschedule(this.onCheckNext);
    }
  }
}
