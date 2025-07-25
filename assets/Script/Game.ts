import { BallRun } from "./BallRun";
import { EventMgr } from "./common/EventManager";
import { HttpHelper } from "./common/HttpHelper";
const Token = "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNjAxODgzLCJsb2dpbl90eXBlIjoxLCJ1c2VyX2tleSI6ImJkM2Y0YjMzLWZlODMtNDk2OS1iZDBkLTdiMWY0NDY5NjhhNyIsInRva2VuX3R5cGUiOiJhcHAiLCJ1c2VybmFtZSI6IuS8mOmfszcwOTgwMiJ9.8ONIlBHAELrLT805m3zlg9ETKiz95prJEQYoNcalTayMrIcVS08H9hCw_cs-Gp-XUibpvO3SNljRhxbMY19P-A";
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
    private giftsList: cc.Node[] = [];
    img: HTMLImageElement;
    trailGraphics: cc.Graphics;
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
        HttpHelper.HttpPost("logic/getPlayerInfoV2", {}, (err, data) => {
            console.log("====获取用户数据", data);
        });
    }

    onQueryGiftList() {
        HttpHelper.httpGet("football/queryGiftList", (data) => {
            console.log("====获取礼物列表");
        })
        // HttpHelper.HttpPost("football/queryGiftList", {}, (err, data)=>{
        //     console.log("====获取用户数据",data);
        // });
    }

    // 房间id 主播id
    onShooting(roomId: number, anchorId: number) {
        let params = {
            roomId: roomId,
            anchorId: anchorId,
        }
        HttpHelper.HttpPost("football/shooting", params, (err, data) => {
            console.log("====投球");
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
        BallRun.getInstance().runCircleEasing(this.football.position, this.giftsList[2].position);
    }
}
