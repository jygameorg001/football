
export class  BallRun {
    public static instance: BallRun = null;
    trailGraphics: cc.Graphics;
    football: any;
    public static getInstance(): BallRun {
        if (!BallRun.instance) {
            BallRun.instance = new BallRun();
        }
        return this.instance;
    }
    initFootBall(football,trailGraphics){
        this.football = football;
        this.trailGraphics = trailGraphics;
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

    //曲线匀速
    runCircleNoraml(startPoint: cc.Vec2, endPoint: cc.Vec2) {
        console.log("runFootbal:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        // 控制点
        const controlPoint = cc.v2((startPoint.x + endPoint.x) / 2-450, (startPoint.y+endPoint.y)/2+120);
        this.drawLine(startPoint, endPoint, controlPoint);
         cc.tween(this.football)
        .parallel(
            cc.tween().to(1, {scale: 0.6}),
            cc.tween().to(1.5, { angle:0 }, {
            easing:(t)=>{
                const pos = this.quadraticBezier(startPoint, controlPoint, endPoint,t);
                this.football.setPosition(pos);
                return t;
            }
        }))
        .delay(1)
        .call(()=>{
            this.football.setPosition(startPoint);
            this.football.scale = 1;
        })
        .start();
    }
    drawLine(startPoint, endPoint,controlPoint){
        // 清除之前的轨迹
        this.trailGraphics.clear();
        // 绘制控制点（可选）
        this.trailGraphics.circle(controlPoint.x, controlPoint.y, 5);
        this.trailGraphics.strokeColor = cc.color(255, 0, 0); // 红色点表示控制点
        this.trailGraphics.fillColor = cc.color(255, 0, 0);
        this.trailGraphics.fill();
        this.trailGraphics.stroke();
        // 动画持续时间
        const duration = 1.5;

        // 分段数越多越平滑
        const segments = 50;
        // 预计算所有点用于绘制
        // const path = [];
        this.trailGraphics.strokeColor = cc.color(0, 255, 0);
        this.trailGraphics.lineWidth = 2;
        this.trailGraphics.moveTo(startPoint.x, startPoint.y);
        for (let i = 0; i <= segments; i++) {
            const t = i / segments;
            const pos = this.quadraticBezier(startPoint, controlPoint, endPoint, t);
            // console.log(pos.x,pos.y);
            // path.push(pos);
            this.trailGraphics.lineTo(pos.x, pos.y);
            this.trailGraphics.stroke();
        }
    }
    //添加结束callback
    runCircleEasing(startPoint, endPoint,callback?){
        console.log("runFootbal:", startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        // 控制点 0，3，6:（-450,120）
        //1 4 7 :(-100,900)
        //2 5 8:(450,150)
        const controlPoint = cc.v2((startPoint.x + endPoint.x) / 2+450, (startPoint.y+endPoint.y)/2+150);
        this.drawLine(startPoint, endPoint, controlPoint);

        cc.tween(this.football)
        .parallel(
            cc.tween().to(0.05, { scale: 1.1 }).to(0.1, { scale: 1 }).to(0.2, {scale: 0.6}),
            cc.tween().to(1.5, { angle:0 }, {
            easing:(t)=>{
                const pos = this.quadraticBezier(startPoint, controlPoint, endPoint, this.easeOutCubic(t));
                this.football.setPosition(pos);
                return t;
            }
        }))
        .delay(1)
        .call(()=>{
            this.football.setPosition(startPoint);
            this.football.scale = 1;
            if(callback){
                callback();
            }
        })
        .start();

    }
}