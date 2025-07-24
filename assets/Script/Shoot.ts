import Game from "./Game";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Shoot extends cc.Component {

    start () {

    }
    onBtnShoot(){
        Game.instance.play("1.webp");
    }

    // update (dt) {}
}
