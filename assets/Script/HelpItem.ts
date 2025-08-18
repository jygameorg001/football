const { ccclass, property } = cc._decorator;

@ccclass
export default class HelpItem extends cc.Component {
  @property(cc.Label)
  labName: cc.Label = null;

  @property(cc.Label)
  labPrice: cc.Label = null;

  @property(cc.Label)
  labCoin: cc.Label = null;

  @property(cc.Label)
  labJiLv: cc.Label = null;

  @property(cc.Node)
  lineUp: cc.Node = null;

  @property(cc.Node)
  lineDown: cc.Node = null;

  @property({
    tooltip: "是否显示上线",
  })
  public isShowUp: boolean = true;

  @property({
    tooltip: "是否显示下线",
  })
  public isShowDowm: boolean = true;

  onLoad() {
    this.lineUp.active = this.isShowUp;
    this.lineDown.active = this.isShowDowm;
  }

  start() { }

  /**
   *
   * @param data
   * @param showUp
   * @param isShowDowm
   */
  setData(data: any, showUp: boolean, isShowDowm: boolean) {
    this.labName.string = data["title"];
    this.labCoin.string = data["reward"].toString();
    this.labJiLv.string = data["rate"];
    this.labPrice.string = data["giftPrice"].toString();
    this.lineUp.active = showUp;
    this.lineDown.active = isShowDowm;
  }

  // update (dt) {}
}
