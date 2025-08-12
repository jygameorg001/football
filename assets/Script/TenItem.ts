import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TenItem extends cc.Component {

    @property(cc.Sprite)
    giftImage: cc.Sprite = null;

    @property(cc.Label)
    giftName: cc.Label = null;

    @property(cc.Label)
    reward: cc.Label = null;

    @property(cc.Sprite)
    sart: cc.Sprite = null;


    // {
    //     "id": 7,
    //     "giftId": 1600074196,
    //     "reward": 0,
    //     "multiple": 0,
    //     "giftImage": "https://zykj-app-test.oss-cn-beijing.aliyuncs.com/zykj/admin/other/favourite1752753686075.png"
    // }

    init(data) {
        GameLogic.instance.loadRemoteSprite(data.giftImage, this.giftImage.getComponent(cc.Sprite),62);
        // this.giftImage.node.scale = 0.3;
        this.giftName.string = this.getGiftNameById(data.giftId) + "x" + data.count;
        if (data.reward > 0) {
            this.sart.node.active = true;
            this.reward.string = GameLogic.instance.getCurrencyName()+"X" + data.reward;
        } else {
            if(this.sart&&this.sart.node){
                this.sart.node.active = false;
                this.reward.string = "";
            }
        }
    }


    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.giftId === id);
        return gift ? gift.giftName : null;
    }


}
