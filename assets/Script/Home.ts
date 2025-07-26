import {AudioMgr} from "./common/AudioMgr";
import Game from "./Game";
import {GameLogic} from "./GameLogic";

export interface IPicItem{
    node:cc.Node;
    id:number;//图片id 0-内马尔,1-C 罗，2-梅西
    index:number;//当前位置 0 -1-2
}
const MoveTime = 0.5;
const {ccclass, property} = cc._decorator;

@ccclass
export default class Home extends cc.Component {
    @property(cc.Node)leftBtn:cc.Node = null;
    @property(cc.Node)rightBtn:cc.Node =null;
    @property([cc.Node]) pics: cc.Node[] = [];
    // private currentIndex: number = 1; // 当前中间图片索引
    private readonly totalPics: number = 3; // 总共三张图片
    private isAnimating: boolean = false; // 动画是否在播放

    private positions: cc.Vec2[] = []; // 存储图片的初始位置
    private picItems:IPicItem[] =[];
    start () {
        this.initPicsPosition();
        this.addBreathingEffect(this.leftBtn);
        this.addBreathingEffect(this.rightBtn);
    }
    addBreathingEffect(btn: cc.Node) {
        cc.tween(btn).repeatForever(
            cc.tween().to(0.5, { scale: 1.2,opacity: 180})
                    .to(0.5, { scale: 1,opacity: 255}))
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
        for(let i=0;i<this.pics.length;i++){
            this.picItems[i] ={
                node:this.pics[i],
                id:i,
                index:i
            }
        }
    }

    move2Index(picItem:IPicItem,toIndex){
        let index = toIndex;
        let moveType =0;
        if(index<0){
            index = this.totalPics-1;
            moveType=1;
        }
        if(index==this.totalPics){
            index = 0;
            moveType=2;
        }
        
        let toPos = this.positions[index];
        picItem.index = index;
        let scale = (index==1)?1:0.62;

        if(moveType==0){
            cc.tween(picItem.node)
                .to(MoveTime, { position: cc.v3(toPos.x, toPos.y),scale:scale})
                .call(() => {
                    // this.pics[1].setScale(0.62);
                })
                .start();
        }
        if(moveType==1){
            // 左边图片先左移出屏幕，再从右边进入右边位置
            cc.tween(picItem.node)
                .to(0.25, { position: cc.v3(-cc.view.getVisibleSize().width/2,picItem.node.y) })
                .call(()=>{
                    picItem.node.x =cc.view.getVisibleSize().width/2;
                })
                .to(0.25, { position: cc.v3(toPos.x, toPos.y) })
                .call(() => {
                    // this.pics[0].setPosition(cc.v2(this.screenMidX * 2, this.pics[0].y));
                    this.isAnimating = false
                })
                .start();
        }
        if(moveType==2){
            cc.tween(picItem.node)
                .to(0.25, { position: cc.v3(cc.view.getVisibleSize().width/2,picItem.node.y) })
                .call(()=>{
                    picItem.node.x =-cc.view.getVisibleSize().width/2;
                })
                .to(0.25, { position: cc.v3(toPos.x, toPos.y) })
                .call(() => {
                    // this.pics[0].setPosition(cc.v2(this.screenMidX * 2, this.pics[0].y));
                    this.isAnimating = false
                })
                .start();
        }

        

    }

    getChooseId(){
        for(let i=0;i<this.picItems.length;i++){
            if(this.picItems[i].index==1){
                return this.picItems[i].id;
            }
        }
        return 1;
    }

    onBtnLeft() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        for (let index = 0; index < this.picItems.length; index++) {
            const picItem = this.picItems[index];
            this.move2Index(picItem, picItem.index-1)            
        }
        console.log("===== current id:",this.getChooseId())
        // 更新当前索引
        // this.currentIndex = (this.currentIndex + 1) % this.totalPics;
        
    }

    onBtnRight() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        for (let index = 0; index < this.picItems.length; index++) {
            const picItem = this.picItems[index];
            this.move2Index(picItem, picItem.index+1)            
        }
        console.log("===== current id:",this.getChooseId())
    }

    onBtnBack(){
        GameLogic.instance.closeGame();
    }

    onBtnGo(){
        Game.instance.showView("Shoot");
    }

    onBtnHelp(){
        Game.instance.showView("Help");
    }

    onBtnSound(){
        AudioMgr.isPaused = !AudioMgr.isPaused;
        if(AudioMgr.isPaused){
            AudioMgr.pauseMusic();
        }else{
            AudioMgr.resumeMusic();
        }
        // 切换图标
    }

    onBtnHome(){
        GameLogic.instance.closeGame();
    }

    // update (dt) {}
}
