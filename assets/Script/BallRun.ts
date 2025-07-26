import Game from "./Game";
import {GameLogic} from "./GameLogic";

const BallMinScale = 0.55;
export class  BallRun {
    public static instance: BallRun = null;
    trailGraphics: cc.Graphics;
    football: cc.Node;
    startPos:any;
    liziNode:cc.Node;
    giftList:cc.Node[];
    targetIdx: number;
    doorNode: any;
    public static getInstance(): BallRun {
        if (!BallRun.instance) {
            BallRun.instance = new BallRun();
        }
        return this.instance;
    }
    initFootBall(football,door,trailGraphics){
        this.football = football;
        this.startPos =this.football.position;
        this.trailGraphics = trailGraphics;
        this.doorNode =door; 
    }
     quadraticBezier(p0: cc.Vec2, p1: cc.Vec2, p2: cc.Vec2, t: number): cc.Vec2 {
        const u = 1 - t;
        return cc.v2(
            u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
            u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y
        );
    }
    // 自定义减速 easing 函数（easeOutQuad）
    easeOutQuad(t: number): number {
        return t * (2 - t);
    }
    easeOutExpo(t: number): number {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }
    easeOutCubic(t: number): number {
        return 1 - Math.pow(1 - t, 3);
    }
    easeOutQuart(t: number): number {
        return 1 - Math.pow(1 - t, 4);
    }

    drawLine(startPoint, endPoint,controlPoint){
        // // 清除之前的轨迹
        // this.trailGraphics.clear();
        // // 绘制控制点（可选）
        // this.trailGraphics.circle(controlPoint.x, controlPoint.y, 5);
        // this.trailGraphics.strokeColor = cc.color(255, 0, 0); // 红色点表示控制点
        // this.trailGraphics.fillColor = cc.color(255, 0, 0);
        // this.trailGraphics.fill();
        // this.trailGraphics.stroke();
        // // 动画持续时间
        // const duration = 1.5;

        // // 分段数越多越平滑
        // const segments = 50;
        // // 预计算所有点用于绘制
        // // const path = [];
        // this.trailGraphics.strokeColor = cc.color(0, 255, 0);
        // this.trailGraphics.lineWidth = 2;
        // this.trailGraphics.moveTo(startPoint.x, startPoint.y);
        // for (let i = 0; i <= segments; i++) {
        //     const t = i / segments;
        //     const pos = this.quadraticBezier(startPoint, controlPoint, endPoint, t);
        //     // console.log(pos.x,pos.y);
        //     // path.push(pos);
        //     this.trailGraphics.lineTo(pos.x, pos.y);
        //     this.trailGraphics.stroke();
        // }
    }
    getControlPoint(startPoint, endPoint){
        let idx =this.targetIdx%3;
        const pts =[cc.v2(-450,120),cc.v2(-100,700),cc.v2(450,150)];
        return pts[idx];
    }
    

    addLiziNode(){
        let tuowei = cc.instantiate(this.liziNode);
        tuowei.active = true;
        tuowei.parent = this.football;
        cc.tween(tuowei).delay(1.8).call(()=>{
            tuowei.destroy();
        }).start();
    }
    //曲线匀速
    runCircleNoraml(startPoint: cc.Vec2, endPoint: cc.Vec2,callback) {

        let dt = Math.random()*0.5+1;

        // console.log("runFootbal:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        // 控制点
        const controlPoint = this.getControlPoint(startPoint, endPoint)
        this.drawLine(startPoint, endPoint, controlPoint);
         cc.tween(this.football)
        .parallel(
            cc.tween().to(dt-0.5, {scale: BallMinScale}),
            cc.tween().to(dt, { angle:0 }, {
            easing:(t)=>{
                const pos = this.quadraticBezier(startPoint, controlPoint, endPoint,t);
                this.football.setPosition(pos);
                return t;
            }
        }))
        .call(()=>{
            // callback?.();
            this.showShootEffect();
        })
        .delay(1)
        .call(()=>{
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            callback?.();
            this.trailGraphics.clear();
        })
        .start();
        this.addLiziNode();
    }
    //添加结束callback
    runCircleEasing(startPoint, endPoint,callback?){
        // console.log("runFootbal:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        // 控制点 0，3，6:（-450,120）
        //1 4 7 :(-100,900)
        //2 5 8:(450,150)
        const controlPoint = this.getControlPoint(startPoint, endPoint)
        this.drawLine(startPoint, endPoint, controlPoint);

        cc.tween(this.football)
        .parallel(
            cc.tween().to(0.05, { scale: 1.1 }).to(0.1, { scale: 0.7 }).to(0.2, {scale: BallMinScale}),
            cc.tween().to(1.5, { angle:360 }, {
            easing:(t)=>{
                const pos = this.quadraticBezier(startPoint, controlPoint, endPoint, this.easeOutCubic(t));
                this.football.setPosition(pos);
                return t;
            }
        }))
        .call(()=>{
            // callback?.();
            this.showShootEffect();
        })
        .delay(1)
        .call(()=>{
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            this.football.angle = 0;
            callback?.();
            this.trailGraphics.clear();
        })
        .start();
        this.addLiziNode();
    }

    runLineNoraml(startPoint, endPoint,callback){
        console.log("runLineNoraml:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        let dt = Math.random()*0.5+0.6;
        cc.tween(this.football)
        .to(dt, {position:cc.v3(endPoint.x,endPoint.y) ,scale: BallMinScale},{easing:"smooth"})
        .call(()=>{
            // callback?.();
            this.showShootEffect();
        })
        .delay(1)
        .call(()=>{
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            callback?.();
            this.trailGraphics.clear();
        })
        .start();
        this.addLiziNode();
    }
    runFootBall(endPoint,callback?){
        let star = GameLogic.instance.getCurrentStar();
        if(star.shootId==0){
            this.runCircleEasing(this.startPos, endPoint,callback);
        }
        if(star.shootId==1){
            this.runLineNoraml(this.startPos, endPoint,callback);
        }
        if(star.shootId==2){
            this.runCircleNoraml(this.startPos, endPoint,callback);
        }
    }
    shootGiftId(id,callback?){
        this.targetIdx =id;
        this.runFootBall(this.giftList[id].position,callback);
    }

    
    showShootEffect(){
        Game.instance.showView("ShootEffect",this.football);
        let node = this.giftList[this.targetIdx];
        if (!node) return;
        Game.instance.shakeNode(node);
        Game.instance.shakeNode(this.doorNode);
    }

}