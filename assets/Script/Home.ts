import { AudioMgr } from "./common/AudioMgr";
import Game from "./Game";
import { GameLogic } from "./GameLogic";

export interface IPicItem {
    node: cc.Node;
    id: number;//图片id 0-内马尔,1-C 罗，2-梅西
    index: number;//当前位置 0 -1-2
}
//球星定义
export const NameConfig = [
    {
        id: 0,
        name: "内马尔",
        shootId: 0,//曲线 变速
    },
    {
        id: 1,
        name: "C 罗",
        shootId: 1,//直线匀速
    },
    {
        id: 2,
        name: "梅西",
        shootId: 2,//曲线匀速
    }
]
const MoveTime = 0.5;
const { ccclass, property } = cc._decorator;

@ccclass
export default class Home extends cc.Component {
    @property(cc.Node) soundBtn: cc.Node = null;
    @property(cc.Node) leftBtn: cc.Node = null;
    @property(cc.Node) rightBtn: cc.Node = null;
    @property([cc.Node]) pics: cc.Node[] = [];
    @property(cc.Node) roleChangeEffect: cc.Node = null;//选中球星特效

    @property(cc.Node) goBtn: cc.Node = null;

    // private currentIndex: number = 1; // 当前中间图片索引
    private readonly totalPics: number = 3; // 总共三张图片
    private isAnimating: boolean = false; // 动画是否在播放

    private positions: cc.Vec2[] = []; // 存储图片的初始位置
    private picItems: IPicItem[] = [];
    start() {
        this.initPicsPosition();
        this.addBreathingEffect(this.leftBtn, -1);
        this.addBreathingEffect(this.rightBtn, 1);
        this.initSoundIcon();
        this.showRoleChangeEffect();
        AudioMgr.playMusic("audio/homeMusic", true);

        this.schedule(() => {
            this.playGoBtn();
        }, 1.2);
        this.playGoBtn();

        this.schedule(()=>{
            this.roleChangeEffect.active = !this.isAnimating;
        },0.5)
    }
    addBreathingEffect(btn: cc.Node, scaleX) {
        cc.tween(btn).repeatForever(
            cc.tween().to(0.5, { scaleX: 1.2 * scaleX, scaleY: 1.2, opacity: 180 })
                .to(0.5, { scale: scaleX, scaleY: 1, opacity: 255 }))
            .start();
    }

    // 初始化图片位置
    initPicsPosition() {
        if (this.pics.length !== 3) return;

        // 设置中间图片放大1倍
        this.pics[1].setScale(1);

        // 记录初始位置
        this.positions = [
            this.pics[0].getPosition(),
            this.pics[1].getPosition(),
            this.pics[2].getPosition()
        ];
        for (let i = 0; i < this.pics.length; i++) {
            this.picItems[i] = {
                node: this.pics[i],
                id: i,
                index: i
            }
        }
    }

    move2Index(picItem: IPicItem, toIndex) {
        let index = toIndex;
        let moveType = 0;
        if (index < 0) {
            index = this.totalPics - 1;
            moveType = 1;
        }
        if (index == this.totalPics) {
            index = 0;
            moveType = 2;
        }

        let toPos = this.positions[index];
        picItem.index = index;
        let scale = (index == 1) ? 1 : 0.62;

        if (moveType == 0) {
            cc.tween(picItem.node)
                .to(MoveTime, { position: cc.v3(toPos.x, toPos.y), scale: scale })
                .call(() => {
                    // this.pics[1].setScale(0.62);
                })
                .start();
        }
        if (moveType == 1) {
            // 左边图片先左移出屏幕，再从右边进入右边位置
            cc.tween(picItem.node)
                .to(0.25, { position: cc.v3(-cc.view.getVisibleSize().width / 2, picItem.node.y) })
                .call(() => {
                    picItem.node.x = cc.view.getVisibleSize().width / 2;
                })
                .to(0.25, { position: cc.v3(toPos.x, toPos.y) })
                .call(() => {
                    // this.pics[0].setPosition(cc.v2(this.screenMidX * 2, this.pics[0].y));
                    this.isAnimating = false

                })
                .start();
        }
        if (moveType == 2) {
            cc.tween(picItem.node)
                .to(0.25, { position: cc.v3(cc.view.getVisibleSize().width / 2, picItem.node.y) })
                .call(() => {
                    picItem.node.x = -cc.view.getVisibleSize().width / 2;
                })
                .to(0.25, { position: cc.v3(toPos.x, toPos.y) })
                .call(() => {
                    // this.pics[0].setPosition(cc.v2(this.screenMidX * 2, this.pics[0].y));
                    this.isAnimating = false
                })
                .start();
        }

    }
    //选中球星底图要闪动
    showRoleChangeEffect() {
        this.roleChangeEffect.opacity = 150;
        this.roleChangeEffect.scale = 1;
        AudioMgr.playSound("audio/roleChange");
        cc.tween(this.roleChangeEffect)
            .to(0.2, { opacity: 255, scale: 1.05 })
            .to(0.2, { opacity: 150, scale: 1 })
            .union()
            .repeatForever()
            .start();
    }

    getChooseId() {
        for (let i = 0; i < this.picItems.length; i++) {
            if (this.picItems[i].index == 1) {
                return this.picItems[i].id;
            }
        }
        return 1;
    }

    onBtnLeft() {
        AudioMgr.playSound("audio/btn_click");
        if (this.isAnimating) return;
        this.isAnimating = true;
        for (let index = 0; index < this.picItems.length; index++) {
            const picItem = this.picItems[index];
            this.move2Index(picItem, picItem.index - 1)
        }
        
    }

    onBtnRight() {
        AudioMgr.playSound("audio/btn_click");
        if (this.isAnimating) return;
        this.isAnimating = true;
        for (let index = 0; index < this.picItems.length; index++) {
            const picItem = this.picItems[index];
            this.move2Index(picItem, picItem.index + 1)
        }
    
    }

    onBtnBack() {
        GameLogic.instance.closeGame();
    }

    getChooseNode() {
        for (let i = 0; i < this.picItems.length; i++) {
            if (this.picItems[i].index == 1) {
                return this.picItems[i].node;
            }
        }
    }

    onBtnGo() {
        let node = this.getChooseNode();
        if (node) {
            cc.tween(node)
                .to(0.2, { scale: 1.2 })
                .to(0.2, { scale: 1 })
                .call(() => {
                    if (GameLogic.instance.playerInfo) {
                        let id = this.getChooseId();
                        GameLogic.instance.setChooseStar(id);
                        Game.instance.showView("Shoot");
                    }
                })
                .start();
        }
    }

    onBtnHelp() {
        Game.instance.showView("FootHelp");
    }

    onBtnSound() {
        AudioMgr.isPaused = !AudioMgr.isPaused;
        cc.sys.localStorage.setItem("isPaused", AudioMgr.isPaused ? "1" : "0");
        this.initSoundIcon();
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

    onBtnHome() {
        GameLogic.instance.closeGame();
    }

    playGoBtn() {
        let kuang = this.goBtn.getChildByName("kuang");
        let bg = this.goBtn.getChildByName("bg");
        let text = this.goBtn.getChildByName("text");
        cc.tween(this.goBtn)
            .to(0.1, { scale: 0.8 })
            .to(0.1, { scale: 1 })
            .call(() => {
                this.startKuangEffect();
            })
            .start();
    }
    startKuangEffect() {
        let kuang = this.goBtn.getChildByName("kuang");
        let k1 = cc.instantiate(kuang);
        k1.parent = kuang;
        cc.tween(k1).to(0.3, { scale: 1.35, opacity: 10 }).call(() => {
            k1.destroy();
        }).start();

        let k2 = cc.instantiate(kuang);
        k2.parent = kuang;

        cc.tween(k2).delay(0.13).to(0.3, { scale: 1.4, opacity: 20 }).call(() => {
            k2.destroy();
        }).start();

        let k3 = cc.instantiate(kuang);
        k3.parent = kuang;
        cc.tween(k3).delay(0.25).to(0.3, { scale: 1.35, opacity: 30 }).call(() => {
            k3.destroy();
        }).start();

        // let bg = this.goBtn.getChildByName("bg");
        let text = this.goBtn.getChildByName("text");
        let text1 = cc.instantiate(text);
        text1.parent = text;
        cc.tween(text1).to(0.5, { scale: 1.5, opacity: 0 }).removeSelf().start();
    }

    // update (dt) {}
}
