import { GameLogic } from "./GameLogic";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TenItem extends cc.Component {

    @property(cc.Sprite)
    giftImage: cc.Sprite = null;

    //名字
    @property(cc.Label)
    giftName: cc.Label = null;

    @property(cc.Label)
    reward: cc.Label = null;

    @property(cc.Sprite)
    sart: cc.Sprite = null;

    @property(cc.Node)
    txt_bg:cc.Node = null;

    @property(cc.Label)
    txt_bei:cc.Label = null;

    protected onLoad(): void {
        // console.log("=======TenItem.onLoad=========");
        // this.txt_bg = this.node.getChildByName("txt_bg");
        // this.giftImage = this.node.getChildByName("giftbig").getComponent(cc.Sprite);
        // this.giftName = this.node.getChildByName("giftname").getComponent(cc.Label);
        
        // this.reward = this.txt_bg.getChildByName("luckyFei").getComponent(cc.Label);
    
        // this.sart = this.txt_bg.getChildByName("tenitem_coinbg").getComponentInChildren(cc.Sprite);
    }

    private setTxtBgActive(isShow: boolean){
        if(this.txt_bg){
            this.txt_bg.active = isShow;
        }
    }
    // {
    //     "id": 7,
    //     "giftId": 1600074196,
    //     "reward": 0,
    //     "multiple": 0,
    //     "giftImage": "https://zykj-app-test.oss-cn-beijing.aliyuncs.com/zykj/admin/other/favourite1752753686075.png"
    // }

    init(data) {
        console.log("=======TenItem.init(data) =========");
        GameLogic.instance.loadRemoteSprite(data.giftImage, this.giftImage.getComponent(cc.Sprite),62);
        // this.giftImage.node.scale = 0.3;
      
        if(this.giftName){
            this.giftName.string = this.getGiftNameById(data.giftId);
        }
       
        if (data.reward > 0) {
            this.setTxtBgActive(true);
            this.sart.node.active = true;
            // this.reward.string = GameLogic.instance.getCurrencyName()+"X" + data.reward;
            this.reward.string = "+" + data.reward;
        } else {
            this.setTxtBgActive(false);
            if(this.sart&&this.sart.node){
                this.sart.node.active = false;
                this.reward.string = "";
            }
        }

        if(this.txt_bei){
        if(data.count > 0){
                this.txt_bei.string = "x" + data.count;
            }else{
                this.txt_bei.node.active = false;
            }
        }
    }

    getGiftNameById(id) {
        let gift = GameLogic.instance.giftList.find(gift => gift.giftId === id);
        return gift ? gift.giftName : null;
    }
}
