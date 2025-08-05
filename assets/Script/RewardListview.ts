import { AudioMgr } from "./common/AudioMgr";
import { EventMgr } from "./common/EventManager";
import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardListview extends cc.Component {

    @property(cc.Prefab)
    rewardItem: cc.Prefab = null;
    @property(cc.Prefab)
    oneItem: cc.Prefab = null;
    @property(cc.Node)
    contentView: cc.Node = null;

    @property(cc.Node)
    topNode: cc.Node = null;

    start() {
        // "tenitem"
        let rewardList = GameLogic.instance.ShootingInfo.rewardList;
        let hasReward = this.isHasReward(rewardList);
        let mergedLists = this.mergeRewardList(rewardList);
        let tempItem = hasReward?this.rewardItem:this.oneItem;
        if(hasReward){
            this.topNode.children[0].active = false;
            this.topNode.children[1].active = true;
            AudioMgr.playSound("audio/bigwin");
        }else{
            this.topNode.children[0].active = true;
            this.topNode.children[1].active = false;
        }
        for (let i = 0; i < mergedLists.length; i++) {
            let rewardItem = cc.instantiate(tempItem);
            rewardItem.parent = this.contentView;
            rewardItem.getComponent("TenItem").init(mergedLists[i]);
        }
    }

    isHasReward(rewardList) { 
        for(let i=0;i<rewardList.length;i++){
            let rewardInfo = rewardList[i];
            if(rewardInfo.reward> 0){
                return true
            }
        }
        return false;
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

            }
        }

        // 将合并后的对象转换回数组
        return Object.values(mergedMap);
    }




    // update (dt) {}
}
