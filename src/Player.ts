class Player extends Sprites {
    //动画和动画状态
    public ar: dragonBones.EgretArmatureDisplay;
    public aniState: dragonBones.AnimationState;
    //分数区域
    private scoreText: egret.TextField;
    //得分
    public scores: number = 0;
    constructor() {
        super();
        this.ticker = 0;
        this.tickNum = 5;
        this.scaleH=0.3;
        this.scaleW=0.3;
        this.scoreText = new egret.TextField();
    }
    onInit() {
        //创建dragonbones动画
        // var dragonbonesData = RES.getRes("theElf_ske_json");
        // var textureData = RES.getRes("theElf_tex_json");
        // var texture = RES.getRes("theElf_tex_png");
        var dragonbonesData = RES.getRes("cat_3_ske_json");
        var textureData = RES.getRes("cat_3_tex_json");
        var texture = RES.getRes("cat_3_tex_png");
        var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
        dragonbonesFactory.parseDragonBonesData(dragonbonesData);
        dragonbonesFactory.parseTextureAtlasData(textureData, texture);
        this.ar = dragonbonesFactory.buildArmatureDisplay("cat");
        this.ar.x = 500;
        this.ar.y = this.baseHeight-100;
        this.x = 0;
        this.y = 0;
        this.ar.scaleX = this.scaleW;
        this.ar.scaleY = this.scaleH;
        this.ar.width *=this.scaleW;
        this.ar.height *=this.scaleH;
        this.addChild(this.ar);


        //播放动画
        this.ar.animation.play("run",0);
        // this.ar.animation.play("run2_slow", 0);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJump, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
    onMove() {
        ++this.ticker;
        if (this.ticker % this.tickNum == 0) {
            ++this.scores;
        }
        this.scoreText.text = "奔跑距离：" + this.scores.toString() + " 米";
        this.addChild(this.scoreText);
        this.scoreText.x = 100;
        this.scoreText.y = 50;
        this.scoreText.size = 50;
        this.scoreText.textColor = 0x000;
        if (this.scores > 100) {
            this.stage.frameRate = 40;
        }
        if (this.scores > 300) {
            this.stage.frameRate = 50;
        }
    }

    private onJump() {
        this.ar.y = this.baseHeight - 250;
        this.aniState = this.ar.animation.gotoAndPlayByFrame("jump", 4, 1);
        this.aniState.timeScale=4;
        // this.ar.animation.
        this.baseHeight = 1030;
        this.ar.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.reRun, this);
    }

    public reRun() {
        this.ar.y = this.baseHeight-100;
        this.ar.animation.play("run", 0);
    }
    public stopAni() {
        this.ar.animation.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
}