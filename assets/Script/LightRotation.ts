const { ccclass, property } = cc._decorator;

@ccclass
export default class LightRotation extends cc.Component {

    //改成数组有四个灯光
    @property([cc.Node])
    lights: cc.Node[] = [];

    // 刚开始角度
    angleList: number[] = [40, 56, 32, 67];



    start() {
        // 遍历所有灯光节点
        this.lights.forEach((light, index) => {
            if (light) {
                // 设置初始旋转角度

                light.angle = this.angleList[index];

                // 生成一个随机的旋转角度，范围在 0 到 15 度之间
                let randomAngle = Math.random() * 15;

                // 生成一个随机的旋转时间，范围在 0.5 到 1.5 秒之间
                let randomTime = 0.2 + Math.random() * 1;

                // 创建上下旋转的动作
                let rotateUp = cc.rotateTo(randomTime, -light.angle + randomAngle); // 在当前角度基础上向上旋转
                let rotateDown = cc.rotateTo(randomTime, -light.angle - randomAngle); // 在当前角度基础上向下旋转
                let sequence = cc.sequence(rotateUp, rotateDown);
                let repeatForever = cc.repeatForever(sequence);

                // 运行动作
                light.runAction(repeatForever);
            }
        });
    }

    // 删除所有灯光的动作
    onDisable(): void {
        this.lights.forEach((light) => {
            if (light) {
                light.stopAllActions();
            }
        });

    }





}
