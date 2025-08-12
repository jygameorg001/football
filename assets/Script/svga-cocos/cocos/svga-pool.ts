import { SVGADynamicImage, SVGADynamicImageType } from "./svga-player";

type SpriteFrameMap = { [key: string]: cc.SpriteFrame };
type AudioClipMap = { [key: string]: cc.AudioClip };
type SvgaMarkMap = { [svgaMark: string]: { [key: string]: boolean } };

export default class SVGAPool {
  private _svgaMark: SvgaMarkMap = {};
  static _spriteFrames: SpriteFrameMap = {};
  private _audioClips: AudioClipMap = {};
  static loadKey: any = {};

  private _getSpriteFrame(
    name: string,
    svgaMark: string
  ): cc.SpriteFrame | null {
    const sf = SVGAPool._spriteFrames[name];
    if (sf) {
      this.pushSvgaMarkData(name, svgaMark);
      return sf;
    }
    return null;
  }

  private _pushSpriteFrame(name: string, svgaMark: string, sf: cc.SpriteFrame) {
    SVGAPool._spriteFrames[name] = sf;
    this.pushSvgaMarkData(name, svgaMark);
    sf.addRef();
  }

  private _getAudioClip(name: string, svgaMark: string): cc.AudioClip | null {
    const ac = this._audioClips[name];
    if (ac) {
      this.pushSvgaMarkData(name, svgaMark);
      return ac;
    }
    return null;
  }

  private _pushAudioClip(name: string, svgaMark: string, ac: cc.AudioClip) {
    this._audioClips[name] = ac;
    this.pushSvgaMarkData(name, svgaMark);
    ac.addRef();
  }

  // 记录资源和 svgaMark 的引用关系
  pushSvgaMarkData(name: string, svgaMark: string) {
    if (!svgaMark) return;
    if (!this._svgaMark[svgaMark]) {
      this._svgaMark[svgaMark] = {};
    }
    this._svgaMark[svgaMark][name] = true;
  }

  getSpriteFrame(
    dynamicImageData: SVGADynamicImage,
    svgaMark: string,
    cb: (sf: cc.SpriteFrame | null) => void
  ) {
    if (!dynamicImageData || !cb) {
      cc.error("data or callback is null");
      cb?.(null);
      return;
    }
    let spu = "";
    if (dynamicImageData.type === SVGADynamicImageType.RemoteUrl) {
      spu = dynamicImageData.remoteUrl;
    } else {
      spu = "data:image/png;base64," + dynamicImageData.base64;
    }
    const key = dynamicImageData.imageKey;
    const sf = this._getSpriteFrame(key, svgaMark);
    if (sf) {
      cb(sf);
    } else {
      cc.assetManager.loadRemote(
        spu,
        { ext: ".png" },
        (err, texture: cc.Texture2D) => {
          if (err) {
            cc.error("image spu", err);
            cb(null);
            return;
          }
          const spriteFrame = new cc.SpriteFrame(texture);
          this._pushSpriteFrame(key, svgaMark, spriteFrame);
          cb(spriteFrame);
        }
      );
    }
  }

  getAudioClip(
    base64Data: string,
    svgaMark: string,
    cb: (ac: cc.AudioClip | null) => void
  ) {
    if (!base64Data || !cb) {
      cc.error("data or callback is null");
      cb?.(null);
      return;
    }
    const spu = "data:audio/x-mpeg;base64," + base64Data;
    const ac = this._getAudioClip(spu, svgaMark);
    if (ac) {
      cb(ac);
    } else {
      cc.assetManager.loadRemote(
        spu,
        { ext: ".mp3" },
        (err, audioClip: cc.AudioClip) => {
          if (err) {
            cc.error("audio spu", err);
            cb(null);
            return;
          }
          this._pushAudioClip(spu, svgaMark, audioClip);
          cb(audioClip);
        }
      );
    }
  }

  // 获取某 svgaMark 独占的资源 key 列表
  private _getClearListBySvgaMark(svgaMark: string): string[] {
    const clearList: string[] = [];
    const markData = this._svgaMark[svgaMark];
    if (!markData) return clearList;

    for (const key in markData) {
      let isShared = false;
      for (const otherMark in this._svgaMark) {
        if (otherMark === svgaMark) continue;
        if (this._svgaMark[otherMark][key]) {
          isShared = true;
          break;
        }
      }
      if (!isShared) {
        clearList.push(key);
      }
    }
    return clearList;
  }

  public clearBySvgaMark(svgaMark: string) {
    const clearList = this._getClearListBySvgaMark(svgaMark);
    delete this._svgaMark[svgaMark];
    for (const key of clearList) {
      if (SVGAPool._spriteFrames[key]) {
        SVGAPool._spriteFrames[key].getTexture()?.decRef();
        SVGAPool._spriteFrames[key].decRef();
        delete SVGAPool._spriteFrames[key];
      }
      if (this._audioClips[key]) {
        this._audioClips[key].decRef();
        delete this._audioClips[key];
      }
    }
  }

  public clearAllBySvgaMark() {
    for (const key in this._svgaMark) {
      this.clearBySvgaMark(key);
    }
    this._svgaMark = {};
  }
}
