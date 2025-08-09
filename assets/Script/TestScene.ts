import SVGAPlayer from "./svga-cocos/cocos/svga-player";
import {SVGAParser} from "./svga-cocos/svga/svga-parser";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(SVGAPlayer)
    svgaNode:SVGAPlayer = null;
    start () {
        this.svgaNode.playSVGA();
        
        this.scheduleOnce(()=>{
            for(let i=0;i<1000;i++){
                let node = cc.instantiate(this.svgaNode.node);
                node.parent = this.node;
                let player = node.getComponent(SVGAPlayer)
                player.playSVGA()
                player.loops = 1000;
                player.node.active = false;
            }
        },2)
    }

    // update (dt) {}
}
