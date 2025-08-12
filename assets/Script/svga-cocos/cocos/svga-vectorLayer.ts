import { SVGABezierPath } from "../svga/svga-bezierPath";
import { SVGAEllipsePath } from "../svga/svga-ellipsePath";
import { SVGARectPath } from "../svga/svga-rectPath";
import { SVGARenderer } from "./svga-renderer";

const { ccclass } = cc._decorator;

interface SVGAFrameShape {
  type: string;
  pathArgs?: any;
  transform?: any;
  styles?: any;
}
interface SVGAFrameItem {
  shapes: SVGAFrameShape[];
}
interface SVGASpriteData {
  frames: SVGAFrameItem[];
}

@ccclass
export default class SVGAVectorLayer extends cc.Component {
  private _svgaSpriteData: SVGASpriteData = null;
  private _drawedFrame = -1;
  private _keepFrameCache: Map<number, number> = new Map();

  setSprite(ssd: SVGASpriteData) {
    if (!ssd || !ssd.frames) return;
    this._svgaSpriteData = ssd;
    this.resetKeepFrameCache();
  }

  private resetKeepFrameCache() {
    this._keepFrameCache.clear();
    let lastKeep = 0;
    this._svgaSpriteData.frames.forEach((frameItem, idx) => {
      if (!this.isKeepFrame(frameItem)) {
        lastKeep = idx;
      } else {
        this._keepFrameCache.set(idx, lastKeep);
      }
    });
  }

  private isKeepFrame(frameItem: SVGAFrameItem): boolean {
    return (
      frameItem.shapes &&
      frameItem.shapes.length > 0 &&
      frameItem.shapes[0].type === "keep"
    );
  }

  private requestKeepFrame(frame: number): number | undefined {
    return this._keepFrameCache.get(frame);
  }

  private drawFrame(frame: number) {
    if (
      !this._svgaSpriteData ||
      frame < 0 ||
      frame >= this._svgaSpriteData.frames.length
    )
      return;
    const frameItem = this._svgaSpriteData.frames[frame];
    if (this.isKeepFrame(frameItem)) {
      if (this._drawedFrame === this.requestKeepFrame(frame)) return;
    }

    this.node.removeAllChildren(true);

    for (const shape of frameItem.shapes) {
      if (shape.type === "shape" && shape.pathArgs?.d) {
        this.node.addChild(
          SVGARenderer.requestBezierShape(
            new SVGABezierPath(shape.pathArgs.d, shape.transform, shape.styles)
          )
        );
      } else if (shape.type === "ellipse" && shape.pathArgs) {
        const { x = 0, y = 0, radiusX = 0, radiusY = 0 } = shape.pathArgs;
        this.node.addChild(
          SVGARenderer.requestEllipseShape(
            new SVGAEllipsePath(
              +x,
              +y,
              +radiusX,
              +radiusY,
              shape.transform,
              shape.styles
            )
          )
        );
      } else if (shape.type === "rect" && shape.pathArgs) {
        const {
          x = 0,
          y = 0,
          width = 0,
          height = 0,
          cornerRadius = 0,
        } = shape.pathArgs;
        this.node.addChild(
          SVGARenderer.requestRectShape(
            new SVGARectPath(
              +x,
              +y,
              +width,
              +height,
              +cornerRadius,
              shape.transform,
              shape.styles
            )
          )
        );
      }
    }
    this._drawedFrame = frame;
  }

  stepToFrame(frame: number) {
    if (
      !this._svgaSpriteData ||
      frame < 0 ||
      frame >= this._svgaSpriteData.frames.length
    )
      return;
    this.drawFrame(frame);
  }
}
