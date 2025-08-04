import Game from "../Game";

//AudioMgrX.ts
export class AudioMgrX {
    private static _inst: AudioMgrX;
    public static get inst(): AudioMgrX {
        if (this._inst == null) {
            this._inst = new AudioMgrX();
        }
        return this._inst;
    }

    static init() {
        let str = cc.sys.localStorage.getItem("isPaused");
        AudioMgrX.isPaused = str == "1" ? true : false;
    }
    static isPaused = false;

    private audioNode: cc.Node;
    private bgAudioSource: cc.AudioSource;
    private soundsSource: cc.AudioSource;
    constructor() {
        //@en create a node as audioMgr
        //@zh 创建一个节点作为 audioMgr
        let audioMgr = new cc.Node();
        this.audioNode = audioMgr;
        audioMgr.name = "__audioMgr__";

        //@en add to the scene.
        //@zh 添加节点到场景
        cc.director.getScene().addChild(audioMgr);

        //@en make it as a persistent node, so it won't be destroied when scene change.
        //@zh 标记为常驻节点，这样场景切换的时候就不会被销毁了
        // Game.instance.node.addChild(audioMgr);

        this.bgAudioSource = audioMgr.addComponent(cc.AudioSource);
        this.soundsSource = (audioMgr.addComponent(cc.AudioSource));
    }

    /**
     * @en
     * play short audio, such as strikes,explosions
     * @zh
     * 播放短音频,比如 打击音效，爆炸音效等
     * @param sound clip or url for the audio
     * @param volume
     */
    static playSound(sound: string, loop: boolean = false) {
        if (AudioMgrX.isPaused) {
            return;
        }
        cc.resources.load(sound, (err, clip: cc.AudioClip) => {
            if (err) {
                console.log(err);
            } else {
                AudioMgrX.inst.soundsSource.clip = clip;
                AudioMgrX.inst.soundsSource.loop = loop;
                AudioMgrX.inst.soundsSource.play()
            }
        });
    }

    /**
     * @en
     * play long audio, such as the bg music
     * @zh
     * 播放长音频，比如 背景音乐
     * @param sound clip or url for the sound
     * @param volume
     */
    static playMusic(sound: string) {
        cc.resources.load(sound, (err, clip: cc.AudioClip) => {
            if (err) {
                console.log(err);
            } else {
                // if (AudioMgrX.isPaused) {
                    AudioMgrX.inst.bgAudioSource.stop();
                    AudioMgrX.inst.bgAudioSource.clip = clip;
                    AudioMgrX.inst.bgAudioSource.loop = true;
                    AudioMgrX.inst.bgAudioSource.play();
                // }

            }
        });

    }

    /**
     * stop the audio play
     */
    stop() {
        this.bgAudioSource.stop();
    }

    static pauseMusic() {
        AudioMgrX.inst.bgAudioSource.pause();
    }

    static resumeMusic() {
        AudioMgrX.inst.bgAudioSource.resume();
    }

    clear() {
        this.stop();
    }
}
