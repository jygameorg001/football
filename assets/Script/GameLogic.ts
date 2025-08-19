import { AudioMgr } from "./common/AudioMgr";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import Game from "./Game";
import { GameCfg } from "./GameConfig";
import { NameConfig } from "./Home";

// 10018710
const Token = GameCfg.token;

export interface IUserInfo {
  appToken: string; // appToken
  authStatus: 0 | 1; // 实名状态：0->未实名，1->已实名
  avatar: string;
  emToken: string; // 环信emToken
  firstLogin: boolean;
  phoneNumber: string;
  registerType: 1 | 2 | 3 | 4; // 注册类型：1->手机登录注册，2->微信登录注册，3->苹果登录注册，4->QQ登录注册
  teenModeSwitch: 1 | 0;
  userId: number;
  userName: string;
  userType: 1 | 2; // 用户类型：1-用户，2-主播
}

export interface IPlayerInfo {
  energy: number;
  currency: number;
  pop: number;
  luckValue: number;
  luckScore: number;
}

export interface IGiftInfo {
  id: number;
  giftId: number;
  giftName: string;
  giftPrice: number;
  giftImage: string;
}

export interface ShootingItemInfo {
  giftId: number;
  giftImage: string;
  id: number;
  reward: number;
}

export interface ShootingInfo {
  rewardList: Array<ShootingItemInfo>;
  sendMoney: number;
  totalMoney: number;
}

export interface IBridgeResponse<T> {
  code: number;
  message: string;
  data: T;
}

export interface IAPPInfo {
  appVersion: string;
  deviceId: string;
  deviceName: string;
  deviceType: number;
  systemVersion: string;
  statusBarHeight: number; // 34
  navigationBarHeight: number;
  safeAreaInsetBottom: number; // 44
}

export class GameLogic {
  private static _instance: GameLogic = new GameLogic();
  gameInfo: any = null;
  queryRatesInfo: any = null;
  token: string;
  roomId: string;
  anchorId: string;
  appInfo: IAPPInfo = null;
  gameShootTime: number = 1;
  loadCount: number = 0;
  isOffLine: boolean;
  isFirstClick: boolean = false;
  isTest: boolean = false;
  public static get instance() {
    return this._instance;
  }
  private _userInfo: IUserInfo = null;
  get userInfo() {
    return this._userInfo;
  }
  set userInfo(data: IUserInfo) {
    this._userInfo = data;
  }
  private _playerInfo: IPlayerInfo = null;
  get playerInfo() {
    return this._playerInfo;
  }
  set playerInfo(data: IPlayerInfo) {
    this._playerInfo = data;
  }

  private _ShootingInfo: ShootingInfo = null;
  get ShootingInfo() {
    return this._ShootingInfo;
  }
  set ShootingInfo(data: ShootingInfo) {
    this._ShootingInfo = data;
  }

  private _giftList: Array<IGiftInfo> = [];
  get giftList() {
    return this._giftList;
  }
  set giftList(data: Array<IGiftInfo>) {
    this._giftList = data;
  }
  isBridgeReady() {
    let WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
    if (WebViewJavascriptBridge) {
      return true;
    }
    return false;
  }
  callBridge(methodName, params, callback) {
    let WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
    console.log("====WebViewJavascriptBridge begin");
    if (WebViewJavascriptBridge) {
      console.log("====WebViewJavascriptBridge   callHandler:" + methodName);
      WebViewJavascriptBridge.callHandler(methodName, params, (res) => {
        console.log("====WebViewJavascriptBridge res:" + methodName, res);
        callback(res);
      });
    }
  }

  initUserInfo() {
    if (!this.isBridgeReady()) {
      HttpHelper.token = Token;
      this.onGetUserInfo();
      return;
    }
    this.callBridge("getAppInfo", {}, (res) => {
      let appInfo: IAPPInfo = res.data;
      GameLogic.instance.appInfo = appInfo;
      this.getUserInfo();
    });
  }
  getUserInfo() {
    this.callBridge("getUserInfo", {}, (res: IBridgeResponse<IUserInfo>) => {
      HttpHelper.token = res.data.appToken;
      this.token = HttpHelper.token;
      console.log("===== token:", HttpHelper.token);
      this.onGetUserInfo();
    });
  }

  onGetUserInfo() {
    this.reqPlayerInfo();
    this.reqQueryGiftList();
    GameLogic.instance.reqGetGameCfg();
    GameLogic.instance.reqGetqueryRates();
  }
  reqPlayerInfo() {
    HttpHelper.httpPost(
      "logic-api/logic/getPlayerInfoV2",
      { gameType: GameCfg.gameType },
      (err, data) => {
        if (err) {
          return;
        }
        console.log("返回getPlayerInfoV2", data);
        GameLogic.instance.playerInfo = data;
        EventMgr.emit("onGetPlayerInfo");
        this.loadCount--;
      }
    );
  }
  reqQueryGiftList() {
    let url = `${GameCfg.url}/queryGiftList`
    HttpHelper.httpGet(url, (err, data) => {
      if (err != 200) {
        return;
      }
      console.log("返回queryGiftList", data.result);
      GameLogic.instance.giftList = data.result;
      EventMgr.emit("onGetGiftList");
      this.loadCount--;
    });
  }

  randomGift() {
    const giftList = GameLogic.instance.giftList;
    let idx = Math.floor(Math.random() * giftList.length);
    return giftList[idx];
  }

  reqShooting(times: number) {
    let params = {
      roomId: GameLogic.instance.roomId || 1000009,
      anchorId: GameLogic.instance.anchorId || 152,
      num: times,
    };

    if (this.isTest) {
      let rewardList = [];
      for (let i = 0; i < times; i++) {
        let info: any = this.randomGift();
        info.reward = Math.random() > 0.7 ? 1000 : 0;
        rewardList.push(info);
      }
      let data = {
        rewardList: rewardList,
        sendMoney: 500,
        totalMoney: 9999999,
      };
      GameLogic.instance.ShootingInfo = data;
      console.log("返回shooting1", data);
      EventMgr.emit("onShooting", data);
      return;
    }

    let url = `${GameCfg.url}/shooting`
    HttpHelper.httpPost(
      url,
      params,
      (err, data) => {
        if (err) {
          EventMgr.emit("onShootingError");
          return;
        }
        //     // 测试数据
        //     data.rewardList = [
        //     {
        //         "id": 9,
        //         "giftId": 1600074206,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/D36a0fKQ6r3ZBhVSeQp5C1755499645522.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 4,
        //         "giftId": 1600074208,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/RH5iMvbQpUsHW0QzkQwRg1755499708698.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 8,
        //         "giftId": 1600074187,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/LoCuUXEm6JO56kan_q4dr1755180402972.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 5,
        //         "giftId": 1600074209,
        //         "reward": 500000000,
        //         "multiple": 100,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/5TXFmgZT_qbpTYRVnHQAr1755499748739.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 7,
        //         "giftId": 1600074207,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/0WmwVIdiUW_DdmMTpTnND1755499678643.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 7,
        //         "giftId": 1600074207,
        //         "reward": 500,
        //         "multiple": 10,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/0WmwVIdiUW_DdmMTpTnND1755499678643.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 9,
        //         "giftId": 1600074206,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/D36a0fKQ6r3ZBhVSeQp5C1755499645522.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 4,
        //         "giftId": 1600074208,
        //         "reward": 5000,
        //         "multiple": 20,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/RH5iMvbQpUsHW0QzkQwRg1755499708698.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 6,
        //         "giftId": 1600074190,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/e6acZyfdRIKx0mBpvpbpo1755180578459.png",
        //         "giftPrice": 500
        //     },
        //     {
        //         "id": 9,
        //         "giftId": 1600074206,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://oss-test.liveboxs.live/admin/other/D36a0fKQ6r3ZBhVSeQp5C1755499645522.png",
        //         "giftPrice": 500
        //     }
        // ]

        GameLogic.instance.ShootingInfo = data;
        console.log("返回shooting2", data);
        EventMgr.emit("onShooting", data);
      }
    );
  }

  reqGetGameCfg() {
    HttpHelper.httpPost(
      "/logic-api/logic/getGames",
      { gameType: GameCfg.gameType },
      (err, data) => {
        if (err) {
          return;
        }

        const parser = new window.DOMParser();
        const html = parser.parseFromString(data.regulation, "text/html");
        let extractedData = { gameId: data.gameId, pre: [], after: [] };
        console.log("html", html);
        const nodes = html.getElementsByTagName("*");
        let key = "pre";
        let str = "";
        let index = 0;
        for (let i = 0; i < nodes.length; i += 1) {
          const item = nodes[i];
          const tagNameVal = item.tagName?.toUpperCase();
          const isA = tagNameVal === "A";

          if (isA) {
            const attr = item.getAttribute("href");

            if (attr === "概率列表") {
              extractedData["a1"] = item.textContent;
              key = "after";
              i += item.childNodes.length;
            }
          } else if (
            item.childNodes[0]?.nodeName?.toLocaleLowerCase() === "#text"
          ) {
            extractedData[key].push(`${str}${item.textContent}`);
            str = "";
          } else if (tagNameVal === "OL") {
            index = 0;
          } else if (tagNameVal === "LI") {
            ++index;
            str = `${index}. `;
          }
        }

        GameLogic.instance.gameInfo = extractedData;
        EventMgr.emit("onGetGameInfo", extractedData);
        this.loadCount--;
      }
    );
  }
  reqGetqueryRates() {
    let url = `${GameCfg.url}/queryRates`
    HttpHelper.httpGet(url, (err, data) => {
      if (err != 200) {
        return;
      }
      console.log("queryRatesInfo:", data);
      GameLogic.instance.queryRatesInfo = data.result;
      EventMgr.emit("queryRatesInfo", data);
      this.loadCount--;
    });
  }

  checkCanEnterGame() {
    if (
      this.playerInfo &&
      this.giftList.length > 0 &&
      this.gameInfo &&
      this.queryRatesInfo
    ) {
      return true;
    }
    this.loadCount = 0;
    if (!this.playerInfo) {
      this.reqPlayerInfo();
      this.loadCount++;
    }
    if (this.giftList && this.giftList.length == 0) {
      this.reqQueryGiftList();
      this.loadCount++;
    }
    if (!this.gameInfo) {
      this.reqGetGameCfg();
      this.loadCount++;
    }
    if (!this.queryRatesInfo) {
      this.reqGetqueryRates();
      this.loadCount++;
    }
    Game.instance.beginCheck();
    return false;
  }

  isCheckOver() {
    return this.loadCount == 0;
  }

  loadRemoteSprite(url, spriteNode: cc.Sprite, width = 0, height = 0) {
    cc.assetManager.loadRemote(url, (err: Error, asset: cc.Texture2D) => {
      if (err) {
        return;
      }
      if (asset && cc.isValid(spriteNode)) {
        let frame: any = cc.assetManager.assets.get(url + "_f");
        if (!frame) {
          frame = new cc.SpriteFrame(asset);
          frame["_uuid"] = url + "_f";
          frame.addRef();
        }
        let scale = 1;
        if (width > 0) {
          scale = width / asset.width;
          if (height > 0) {
            let scale1 = height / asset.height;
            scale = Math.min(scale, scale1);
          }
          spriteNode.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          spriteNode.node.setContentSize(width, scale * asset.height);
        }
        spriteNode.spriteFrame = frame;
        cc.assetManager.assets.add(frame["_uuid"], frame);
        GameLogic.addRemoteDeps(frame["_uuid"], asset["_uuid"]);
      }
    });
  }

  public static addRemoteDeps(curUuid, depUuid) {
    let dependUtil = cc.assetManager.dependUtil;
    let _depends: any = dependUtil["_depends"];
    let _map = _depends._map;
    var out = _map[curUuid];
    if (!out) {
      _map[curUuid] = {
        deps: [],
        parsedFromExistAsset: true,
        preventPreloadNativeObject: false,
        preventDeferredLoadDependents: false,
      };
      out = _map[curUuid];
    }
    if (out.deps.indexOf(depUuid) < 0) {
      out.deps.push(depUuid);
    }
  }

  closeGame() {
    this.callBridge("goBack", {}, () => { });
  }
  getLiveRoomInfo() {
    this.callBridge("getLiveRoomInfo", {}, (res) => {
      if (res.code == 0) {
        let data = res.data;
        GameLogic.instance.roomId = data.roomId;
        GameLogic.instance.anchorId = data.anchorId;
      }
    });
  }

  private currentStar = null;
  setChooseStar(id) {
    for (let key in NameConfig) {
      let cfg = NameConfig[key];
      if (cfg.id == id) {
        this.currentStar = cfg;
      }
    }
  }
  getCurrentStar() {
    return this.currentStar;
  }

  isIOSVersionBig() {
    const userAgent = navigator.userAgent;
    let version = userAgent.match(/OS (\d+)_(\d+)(?:_(\d+))?/);
    if (version && version.length > 1) {
      var versionStr =
        version[1] + "." + version[2] + "." + (version[3] || "0");
      if (Number(versionStr[1]) == 18 && Number(versionStr[2]) >= 5) {
        return true;
      }
    }
    return false;
  }

  isIosMobile() {
    if (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX) {
      if (cc.sys.isBrowser && cc.sys.isMobile) {
        return true;
      }
    }
    return false;
  }

  static isClickEnable = false;
  setClickEnable(dt = 0.3) {
    if (GameLogic.isClickEnable) {
      return;
    }
    GameLogic.isClickEnable = true;
    setTimeout(() => {
      GameLogic.isClickEnable = false;
    }, dt * 1000);
  }

  setClickBG() {
    if (GameLogic.instance.isFirstClick) {
      return;
    }
    GameLogic.instance.isFirstClick = true;
    this.onAudioPlay();
  }
  onAudioPlay() {
    // AudioMgr.playMusic("audio/homeMusic");
    setTimeout(() => {
      AudioMgr.playMusic("audio/homeMusic");
    }, 200);
  }

  getCurrencyName() {
    return "金幣";
  }
}
window["GLogic"] = window["GLogic"] || GameLogic.instance;
