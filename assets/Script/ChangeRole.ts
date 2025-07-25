const { ccclass, property } = cc._decorator;

@ccclass
export default class ChangeRole extends cc.Component {
    @property(cc.Node)
    images: cc.Node[] = []; // 三张图片节点（按左、中、右顺序）

    @property(cc.Button)
    btnLeft: cc.Button = null; // 向左按钮

    @property(cc.Button)
    btnRight: cc.Button = null; // 向右按钮

    @property({
        type: cc.Float,
        tooltip: "图片切换动画时长（秒）"
    })
    moveDuration: number = 0.5; 

    @property({
        type: cc.Float,
        tooltip: "中心图片的缩放倍数"
    })
    centerScale: number = 1.5; 

    @property({
        type: cc.Float,
        tooltip: "图片之间的间距"
    })
    spacing: number = 100; // 图片之间的间距

    private isMoving: boolean = false;
    private touchStartX: number = 0;

    onLoad() {
        // 初始化按钮事件
        this.btnLeft.node.on('click', this.onLeftClick, this);
        this.btnRight.node.on('click', this.onRightClick, this);
        
        // 初始设置中间图片放大
        this.resetPositions();
        this.updateScales();
    }

    start() {
        // 添加触摸滑动支持
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    private resetPositions() {
        // 设置初始位置：左图在左，中图在中间，右图在右
        this.images[0].x = -this.spacing * 2;
        this.images[1].x = 0;
        this.images[2].x = this.spacing * 2;
    }

    private onTouchStart(event: cc.Event.EventTouch) {
        this.touchStartX = event.getLocationX();
    }

    private onTouchMove(event: cc.Event.EventTouch) {
        // 可在此添加滑动跟随效果
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        const touchEndX = event.getLocationX();
        const deltaX = touchEndX - this.touchStartX;
        
        // 滑动超过屏幕宽度的15%触发切换
        if (Math.abs(deltaX) > cc.view.getVisibleSize().width * 0.15) {
            if (deltaX < 0 && !this.isMoving) {
                this.onLeftClick();
            } else if (deltaX > 0 && !this.isMoving) {
                this.onRightClick();
            }
        }
    }

    private onLeftClick() {
        if (this.isMoving) return;
        this.moveImages(-1); // -1 表示向左移动
    }

    private onRightClick() {
        if (this.isMoving) return;
        this.moveImages(1); // 1 表示向右移动
    }

    private moveImages(direction: number) {
        this.isMoving = true;
        this.btnLeft.interactable = false;
        this.btnRight.interactable = false;
        
        const actions = [];
        const moveDistance = this.spacing * 2; // 移动距离等于两倍间距
        
        // 计算新位置并创建动作
        for (let i = 0; i < this.images.length; i++) {
            const img = this.images[i];
            const targetX = img.x - direction * moveDistance;
            const moveAction = cc.moveTo(this.moveDuration, cc.v2(targetX, img.y));
            actions.push(moveAction);
        }
        
        // 执行所有动作
        const sequence = cc.sequence(
            cc.spawn(actions),
            cc.callFunc(() => {
                this.repositionImages(direction);
                this.updateScales();
                this.isMoving = false;
                this.btnLeft.interactable = true;
                this.btnRight.interactable = true;
            })
        );
        this.node.runAction(sequence);
    }

    private repositionImages(direction: number) {
        // 调整图片位置
        if (direction < 0) { // 向左移动
            const leftImage = this.images.shift();
            // 将最左侧图片移动到最右侧
            leftImage.x = this.images[this.images.length - 1].x + this.spacing * 2;
            this.images.push(leftImage);
        } else { // 向右移动
            const rightImage = this.images.pop();
            // 将最右侧图片移动到最左侧
            rightImage.x = this.images[0].x - this.spacing * 2;
            this.images.unshift(rightImage);
        }
    }

    private updateScales() {
        // 更新所有图片的缩放和颜色
        for (let i = 0; i < this.images.length; i++) {
            const img = this.images[i];
            if (i === 1) { // 中间图片
                img.scale = this.centerScale;
                img.color = cc.Color.WHITE;
            } else { // 两侧图片
                img.scale = 1;
                img.color = new cc.Color(150, 150, 150);
            }
        }
    }
}