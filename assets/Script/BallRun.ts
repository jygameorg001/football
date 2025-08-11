import {EventMgr} from "./common/EventManager";
import Game from "./Game";
import {GameLogic} from "./GameLogic";

const BallMinScale = 0.66;
export class  BallRun {
    public static instance: BallRun = null;
    football: cc.Node;
    startPos:any;
    liziNode:cc.Node;
    giftList:cc.Node[];
    targetIdx: number;
    doorNode: any;
    isSuperShoot: boolean;
    nShootTimes: number = 0;kuangPos: any[];
    giftPos: any[];
    doorPos: any;
;
    public static getInstance(): BallRun {
        if (!BallRun.instance) {
            BallRun.instance = new BallRun();
        }
        return this.instance;
    }
    initGiftPos(){
        this.kuangPos =[];
        this.giftPos =[];
        for (let i = 0; i < 9; i++) {
            let gift = this.giftList[i];
            let kuang = gift.getChildByName("kuang");
            this.kuangPos[i] =cc.v3(kuang.position);
            this.giftPos[i] = cc.v3(gift.position);
        }
    }
    initFootBall(football,door){
        this.football = football;
        this.startPos =this.football.position;
        this.doorNode =door; 
        this.doorPos = this.doorNode.position;
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
        let pt  = pts[idx];
        let x = 0;
        let y =0;
        if(idx==0){
            x = -Math.random()*200+100;
            y = Math.random()*100-50;
        }
        if(idx==1){
            x = Math.random()*150-100;
            y = Math.random()*200-100;
        }
        if(idx==2){
            x = Math.random()*200-100;
            y = Math.random()*100-50;
        }
        return cc.v2(pt.x+x,pt.y);
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
            if(this.isSuperShoot){
                this.shootOver(callback);
                return;
            }
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            callback?.();
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
            cc.tween().to(0.05, { scale: 1.1 }).to(0.1, { scale: 0.8 }).to(0.2, {scale: BallMinScale}),
            cc.tween().to(1.5, { angle:360 }, {
            easing:(t)=>{
                const pos = this.quadraticBezier(startPoint, controlPoint, endPoint, this.easeOutQuad(t));
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
            if(this.isSuperShoot){
                this.shootOver(callback);
                return;
            }
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            this.football.angle = 0;
            callback?.();
            // this.trailGraphics.clear();
        })
        .start();
        this.addLiziNode();
    }

    runLineNoraml(startPoint, endPoint,callback){
        // console.log("runLineNoraml:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        let dt = Math.random()*0.5+0.6;
        cc.tween(this.football)
        .to(dt, {position:cc.v3(endPoint.x,endPoint.y) ,scale: BallMinScale},{easing:"smooth"})
        .call(()=>{
            // callback?.();
            this.showShootEffect();
        })
        .delay(1)
        .call(()=>{
            if(this.isSuperShoot){
                this.shootOver(callback);
                return;
            }
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            callback?.();
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
    shootGiftId(id,isSuper=false,callback?){
        this.targetIdx =id;
        this.isSuperShoot = isSuper;
        this.nShootTimes = 0;
        this.runFootBall(this.giftList[id].position,callback);
    }

    
    showShootEffect(){
        Game.instance.showView("ShootEffect",this.football);
        let node = this.giftList[this.targetIdx];
        if (!node) return;
        let kuang = node.getChildByName("kuang")
        kuang.active = true;
        cc.tween(kuang).to(0.2, {scale:1.1})
        .to(0.2,{scale:0.9})
        .to(0.2,{scale:1.05})
        .to(0.2,{scale:1})
        .delay(0.5)
        .call(()=>{
            kuang.active = false;
            kuang.setPosition(this.kuangPos[this.targetIdx]);
        })
        .start();
        EventMgr.emit("kuangAni",this.targetIdx)
        Game.instance.shakeNode(node,15,()=>{
            node.setPosition(this.giftPos[this.targetIdx])
        });
        Game.instance.shakeNode(this.doorNode,15,()=>{
            this.doorNode.setPosition(this.doorPos);
        });
    }

    getGiftIdx(nTimes){
        let data = GameLogic.instance.ShootingInfo;
        let giftId = data.rewardList[nTimes].giftId;
        for (let i = 0; i < GameLogic.instance.giftList.length; i++) {
            let gift = GameLogic.instance.giftList[i];
            if (gift.giftId == giftId) {
                return i;
            }
        }
        return Math.floor(Math.random()*5);
    }
    // 飞行结束
    shootOver(callback){ 
        
        this.nShootTimes++;
        EventMgr.emit("shootOverTimes",this.nShootTimes);
        
        if(this.nShootTimes==10){
            this.football.setPosition(this.startPos);
            this.football.scale = 1;
            callback?.();
            return;
        }
        // 弹球
        let idx = this.getGiftIdx(this.nShootTimes);
        this.targetIdx = idx
        this.ballShoot2Idx(idx,callback);
    }

    showShootEffect2(){
        Game.instance.showView("ShootEffect",this.football);
        let node = this.giftList[this.targetIdx];
        if (!node) return;
        let kuang = node.getChildByName("kuang")
        kuang.active = true;
        cc.tween(kuang)
        .delay(0.5)
        .call(()=>{
            kuang.active = false;
        })
        .start();
        EventMgr.emit("kuangAni",this.targetIdx)
        Game.instance.shakeNode2(this.doorNode,10);
    }
    ballShoot2Idx(idx:number,callback){
        let offsetX = Math.random()*180-90;
        let offsetY = 100+Math.random()*100;
        let endPoint = this.giftList[idx].position;
        let centerPoint  = cc.v3((this.football.x+endPoint.x)/2+offsetX,(this.football.y+endPoint.y)/2+offsetY);
        cc.tween(this.football)
        .to(0.15,{position:centerPoint,scale:BallMinScale*1.2})
        .to(0.15, {position:cc.v3(endPoint.x,endPoint.y,0) ,scale: BallMinScale})
        .call(()=>{
            // callback?.();
            this.showShootEffect2();
        })
        .delay(0.4)
        .call(()=>{
            if(this.isSuperShoot){
                this.shootOver(callback);
                return;
            }
        })
        .start();
    }


}