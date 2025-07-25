import { BallRun } from "./BallRun";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
import SVGAPlayer from "./svga-cocos/cocos/svga-player";
const Token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNjAxODgzLCJsb2dpbl90eXBlIjoxLCJ1c2VyX2tleSI6IjE0MDk4ODNhLTY2NTEtNGVlZC1hNTA0LWY1ZjBhZmZkZGRjZiIsInRva2VuX3R5cGUiOiJhcHAiLCJ1c2VybmFtZSI6IuS8mOmfszcwOTgwMiJ9.NK80IJrDndV9ZINXi69Iq2J3YomS3FlbCWWm6jwDFZ5X9Ls3UZkwREUCy3ail5XvgBd-E787cYMkl7tCEIVNXA";
const { ccclass, property } = cc._decorator;

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

@ccclass
export default class Game extends cc.Component {
    public static instance: Game = null;

    @property(cc.Node) football: cc.Node = null;
    @property(cc.Node) gifts: cc.Node = null;
    @property(cc.Prefab) winPrefab: cc.Prefab = null;

    @property(SVGAPlayer)
    svga1: SVGAPlayer = null;

    private giftsList: cc.Node[] = [];
    img: HTMLImageElement;
    trailGraphics: cc.Graphics;
    private winresult=null;


    protected onLoad(): void {
        Game.instance = this;
        this.initView();
        this.initEvents();
        // this.initWebpImg();
        this.initUserInfo();
        const node = new cc.Node();
        node.addComponent(cc.Graphics);
        node.parent = this.gifts;
        this.trailGraphics = node.getComponent(cc.Graphics);
        BallRun.getInstance().initFootBall(this.football, this.trailGraphics)
        // this.svga1.playSVGA();//示例
        // this.svga1.setFrame(100,100,200,200);

    }
    initView() {
        for (let i = 1; i <= 9; i++) {
            let node = this.gifts.getChildByName("gift" + i);
            this.giftsList[i - 1] = node;
        }
    }
    initEvents() {
        EventMgr.on("onGetUserInfo", this.onGetUserInfo, this);
        EventMgr.on("onQueryGiftList", this.onQueryGiftList, this);
        EventMgr.on("onShooting", this.onShooting, this);
    }
    initUserInfo() {
        let WebViewJavascriptBridge = window["WebViewJavascriptBridge"];
        if (WebViewJavascriptBridge) {
            WebViewJavascriptBridge.callHandler("getUserInfo", {}, function (res: IUserInfo) {
                console.log("====", res);
                if (typeof res == "object") {
                    HttpHelper.token = res.appToken;
                }
                if (typeof res == "string") {
                    let userInfo = JSON.parse(res);
                    HttpHelper.token = userInfo.appToken;
                }
                EventMgr.emit("onGetUserInfo")
            });
            return;
        }
        HttpHelper.token = Token;
        EventMgr.emit("onGetUserInfo")
        EventMgr.emit("onQueryGiftList")

    }
    onGetUserInfo() {
        // 获取用户数据
        HttpHelper.HttpPost("logic-api/logic/getPlayerInfoV2", {}, (err, data) => {
            console.log("====获取用户数据", data);
            this.setUserInfo(data);
        });
    }

    // 设置用户信息
    setUserInfo(data) {
        if (!data) return;
        let userInfo = data.result;
        // this.userNameLabel.string = userInfo.userName;
        // this.userAvatar.spriteFrame = userInfo.avatar;
    }

    onQueryGiftList() {
        HttpHelper.httpGet("football-api/football/queryGiftList", (data) => {
            console.log("====获取礼物列表", data);
            this.setGiftsList(data);
        })
    }

    // 设置礼物列表
    setGiftsList(data) {
        if (!data) return;
        let dataList = data.result;
        for (let i = 0; i < dataList.length; i++) {
            let node = this.giftsList[i];
            // 根据图片地址获取图片
            let imageUrl = dataList[i].giftImage;
            cc.loader.load({ url: imageUrl, type: 'png' }, (err, texture) => {
                if (err) {
                    cc.error(err.message || err);
                    return;
                }
                let spriteFrame = new cc.SpriteFrame(texture);
                node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                node.scale = 0.5;
            });
        }

    }


    // 房间id 主播id
    onShooting(roomId: number, anchorId: number) {
        let params = {
            roomId: roomId,
            anchorId: anchorId,
        }
        HttpHelper.HttpPost("football-api/football/shooting", params, (err, data) => {
            console.log("====投球");
            this.winresult=data.result;
        })
    }
    protected onDestroy(): void {
        Game.instance = null;
        EventMgr.clearByTarget(this);
    }

    start() {

    }
    initWebpImg() {
        const img = document.createElement('img');
        // img.src = 'webp/1.webp';
        // 设置样式属性（可选）
        img.style.position = 'absolute';
        img.style.left = '0';
        img.style.top = '0';
        img.style.width = '375';
        img.style.height = 'auto';
        // 默认隐藏
        img.style.display = 'none';
        // 添加到 DOM
        document.body.appendChild(img);
        this.img = img;
    }
    play(src) {
        this.img.src = "webp/" + src;
        this.img.style.display = 'block';
    }

    onBtnShoot() {
        this.onShooting(1000152, 1601096);//射门
        BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position, this.showWin);
    }
    // 结束显示中奖物品
    showWin() {
       if(!this.winresult) return;
       //加载结算预制体
       let node = cc.instantiate(this.winPrefab);
       node.parent = this.node;
       //传参
       node.getComponent("WinView").initData(this.winresult);
       
    }
}
