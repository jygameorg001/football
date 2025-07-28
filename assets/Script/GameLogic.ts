import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import { NameConfig } from "./Home";

const Token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNjAxODgzLCJsb2dpbl90eXBlIjoxLCJ1c2VyX2tleSI6IjE0MDk4ODNhLTY2NTEtNGVlZC1hNTA0LWY1ZjBhZmZkZGRjZiIsInRva2VuX3R5cGUiOiJhcHAiLCJ1c2VybmFtZSI6IuS8mOmfszcwOTgwMiJ9.NK80IJrDndV9ZINXi69Iq2J3YomS3FlbCWWm6jwDFZ5X9Ls3UZkwREUCy3ail5XvgBd-E787cYMkl7tCEIVNXA";

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
    energy: number,
    currency: number,
    pop: number,
    luckValue: number,
    luckScore: number // 幸运分
}

export interface IGiftInfo {
    id: number;
    giftId: number;
    giftName: string;
    giftPrice: number;
    giftImage: string;
}

export interface ShootingInfo {
    giftId: number;
    giftImage: string;
    id: number;
    reward: number;
}

export interface IBridgeResponse<T> {
    code: number;
    message: string;
    data: T;
}

export class GameLogic {
    private static _instance: GameLogic = new GameLogic();
    gameInfo: any;
    queryRatesInfo: any;
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
        console.log("====WebViewJavascriptBridge begin")
        if (WebViewJavascriptBridge) {
            console.log("====WebViewJavascriptBridge   callHandler:" + methodName)
            WebViewJavascriptBridge.callHandler(methodName, params, (res) => {
                console.log("====WebViewJavascriptBridge res:" + methodName + "," + JSON.stringify(res));
                callback(res);
            });
        }
    }

    initUserInfo() {
        if (!this.isBridgeReady()) {
            HttpHelper.token = Token;
            EventMgr.emit("onGetUserInfo")
            this.onGetUserInfo();
            return;
        }
        this.callBridge("getUserInfo", {}, (res: IBridgeResponse<IUserInfo>) => {
            if (typeof res == "object") {
                HttpHelper.token = res.data.appToken;
            }
            if (typeof res == "string") {
                let userInfo = JSON.parse(res);
                HttpHelper.token = userInfo.data.appToken;
            }
            EventMgr.emit("onGetUserInfo")
        });

    }
    onGetUserInfo() {
        this.reqPlayerInfo();
        this.reqQueryGiftList();
    }
    reqPlayerInfo() {
        HttpHelper.httpPost("logic-api/logic/getPlayerInfoV2", {}, (err, data) => {
            if (err) {
                return;
            }
            console.log("返回getPlayerInfoV2", data);
            GameLogic.instance.playerInfo = data;
            EventMgr.emit("onGetPlayerInfo")
        });
    }
    reqQueryGiftList() {
        HttpHelper.httpGet("football-api/football/queryGiftList", (err, data) => {
            if (err != 200) {
                return;
            }
            console.log("返回queryGiftList", data.result);
            GameLogic.instance.giftList = data.result;
            EventMgr.emit("onGetGiftList")
        })
    }

    reqShooting(roomId: number, anchorId: number) {
        let params = {
            roomId: roomId,
            anchorId: anchorId,
        }
        HttpHelper.httpPost("football-api/football/shooting", params, (err, data) => {
            if (err) {
                return;
            }
            GameLogic.instance.ShootingInfo = data;
            console.log("返回shooting", data);
            EventMgr.emit("onShooting", data)
        })
    }

  reqGetGameCfg() {
    HttpHelper.httpPost("/logic-api/logic/getGames", { gameType: 114 }, (err, data) => {
        if (err) {
            return;
        }
        GameLogic.instance.gameInfo = data;
        console.log("onGetGameInfo:", data);

        // 提取 regulation 属性
        let regulation = data.regulation;

        // 使用正则表达式匹配 <span> 标签及其后的内容，直到下一个 <span> 标签或字符串结束
        let spanMatches = regulation.match(/<span[^>]*>([\s\S]*?)<\/span>/g);
        // 使用正则表达式匹配 <a> 标签及其后的内容，直到下一个 <a> 标签或字符串结束
        let aMatches = regulation.match(/<a[^>]*href="(.*?)"[^>]*>([\s\S]*?)<\/a>/g);
        let extractedData = { gameId: data.gameId };

        if (spanMatches) {
            spanMatches.forEach((match, index) => {
                // 去除 <span> 和 </span> 标签，得到纯文本
                let text = match.replace(/<[^>]*>/g, '');
                // 将文本作为属性添加到 extractedData 对象中
                extractedData[`span${index + 1}`] = text;
            });
        }

        if (aMatches) {
            aMatches.forEach((match, index) => {
                // 去除 <a> 和 </a> 标签，得到纯文本
                let text = match.replace(/<[^>]*>/g, '');
                // 将文本作为属性添加到 extractedData 对象中
                extractedData[`a${index + 1}`] = text;
            });
        }

        console.log("Extracted Data:", extractedData);

        EventMgr.emit("onGetGameInfo", extractedData);
    });
}









    reqGetqueryRates() {
        HttpHelper.httpGet("/football-api/football/queryRates", (err, data) => {
            if (err != 200) {
                return;
            }
            console.log("queryRatesInfo:", data);
            GameLogic.instance.queryRatesInfo = data;
            EventMgr.emit("queryRatesInfo", data)
        })
    }

    loadRemoteSprite(url, spriteNode: cc.Sprite) {
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
                preventDeferredLoadDependents: false
            };
            out = _map[curUuid];
        }
        if (out.deps.indexOf(depUuid) < 0) {
            out.deps.push(depUuid)
        }
    }

    closeGame() {
        this.callBridge("goBack", {}, () => { })
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

}