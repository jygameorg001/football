import { EventMgr } from "./common/EventManager";
import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardListview extends cc.Component {

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;

    @property(cc.Node)
    contentView: cc.Node = null;

    start() {
        let rewardList = GameLogic.instance.ShootingInfo.rewardList;

        // "rewardList": [
        //     {
        //         "id": 7,
        //         "giftId": 1600074196,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://zykj-app-test.oss-cn-beijing.aliyuncs.com/zykj/admin/other/favourite1752753686075.png"
        //     },
        //     {
        //         "id": 7,
        //         "giftId": 1600074196,
        //         "reward": 0,
        //         "multiple": 0,
        //         "giftImage": "https://zykj-app-test.oss-cn-beijing.aliyuncs.com/zykj/admin/other/favourite1752753686075.png"
        //     }
        // ]

        let mergedLists = this.mergeRewardList(rewardList);

        for (let i = 0; i < mergedLists.length; i++) {
            let rewardItem = cc.instantiate(this.rewardItem);
            rewardItem.parent = this.contentView;
            rewardItem.getComponent("TenItem").init(mergedLists[i]);
        }
    }

    //关闭窗口
    closeWin() {
        EventMgr.emit("closeRewardview")
        this.node.destroy();
    }

    closeWin2() {
        EventMgr.emit("closeRewardviewShoot")
        this.node.destroy();
    }


    mergeRewardList(rewardList: any[]): any[] {
        // 创建一个临时对象来存储合并结果
        const mergedMap: { [key: string]: any } = {};

        // 遍历原始数组
        for (const item of rewardList) {
            const giftId = item.giftId;

            // 如果这个 giftId 还没处理过
            if (!mergedMap[giftId]) {
                // 创建一个新对象，复制除 giftId 外的所有属性
                mergedMap[giftId] = {
                    ...item,
                    count: 1  // 初始化数量为1
                };
            } else {
                // 如果这个 giftId 已经处理过
                const existingItem = mergedMap[giftId];

                // 增加数量
                existingItem.count += 1;

                // 累加 reward 值
                existingItem.reward += item.reward;

                // 保留第一个 id 和 giftImage
                // 注意：如果需要保留最后一个，可以取消下面的注释并注释掉上面的
                // existingItem.id = item.id;
                // existingItem.giftImage = item.giftImage;
            }
        }

        // 将合并后的对象转换回数组
        return Object.values(mergedMap);
    }




    // update (dt) {}
}
