class Player extends Sprites {
    //动画和动画状态
    public ar: dragonBones.EgretArmatureDisplay;
    public aniState: dragonBones.AnimationState;
    //分数区域
    // private scoreText: egret.TextField;
    //得分
    public scores: number = 0;
    //控制帧的播放
    public frame: number;
    public isTap: boolean = false;
    public secJump: boolean = false;
    private d1: number;
    // private d2: number;
    // private d3:number;
    private m1: number;
    // private m2: number;
    // private m3:number;
    constructor() {
        super();
        this.ticker = 0;
        this.tickNum = 5;
        this.scaleH = 0.3;
        this.scaleW = 0.3;
        Sceduler.scoreText = new egret.TextField();
        // this.d1 = 50;
        // this.d2 = 20;
        // this.d3 =100;
        this.m1 = 25;
        // this.m2 = this.m1 * this.d1 / (this.d1 + this.d2);
        // this.m3=this.m1*this.d1/(this.d3+this.d1);
    }
    onInit() {
        //创建dragonbones动画
        var dragonbonesData = RES.getRes("cat_label_ske_json");
        var textureData = RES.getRes("cat_label_tex_json");
        var texture = RES.getRes("cat_3_tex_png");
        var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
        dragonbonesFactory.parseDragonBonesData(dragonbonesData);
        dragonbonesFactory.parseTextureAtlasData(textureData, texture);
        this.ar = dragonbonesFactory.buildArmatureDisplay("cat");
        this.ar.x = 500;
        this.ar.y = this.baseHeight;
        this.x = 0;
        this.y = 0;
        this.ar.scaleX = this.scaleW;
        this.ar.scaleY = this.scaleH;
        this.ar.width *= this.scaleW;
        this.ar.height = 156;
        //龙骨设置为刚体
        var body: p2.Body = new p2.Body();
        body.displays = [this.ar];
        var world: p2.World = new p2.World();
        world.addBody(body);
        this.addChild(this.ar);

        //播放动画
        this.ar.animation.play("run", 0);
        this.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpInit, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
    onMove() {
        //控制可以跳起的条件：跳起动作结束之前，点击了屏幕之后，不二段跳起
        if (this.frame < 35 && this.isTap) {
            this.secJump = true;
            this.onJump();
        }
        ++this.ticker;
        if (this.ticker % this.tickNum == 0) {
            ++this.scores;
        }
        Sceduler.scoreText.text = "奔跑距离：" + this.scores.toString() + " 米";
        this.addChild(Sceduler.scoreText);
        Sceduler.scoreText.x = 100;
        Sceduler.scoreText.y = 50;
        Sceduler.scoreText.size = 50;
        Sceduler.scoreText.textColor = 0x000;
        if (this.scores > 100) {
            this.stage.frameRate = 40;
        }
        if (this.scores > 300) {
            this.stage.frameRate = 60;
        }
    }
    //可以跳起的条件
    private onJumpInit() {
        if (this.secJump == false) {
            this.isTap = true;
            this.frame = 10;//开始播放的帧
            this.onJump();
        }
    }
    private onJump() {
        //实现代码控制位移，模拟相机移动
        this.aniState = this.ar.animation.gotoAndStopByFrame('jump', this.frame++);
        if (this.frame <= 20) {
            this.ar.y -= this.m1;
            // Sceduler.bkG.y += this.m3;
            // Sceduler.bkg2.y += this.m3;
            // Sceduler.grd.y += this.m1;
            // // Sceduler.coinText.y-=this.m1;
            // Sceduler.Cns.y += this.m1;
            // Sceduler.Mons.y += this.m1;
            // Sceduler.bkObj.y += this.m2;
        } else {
            this.ar.y += this.m1*2/3 ;
            // Sceduler.bkG.y -= this.m3 / 2;
            // Sceduler.bkg2.y -= this.m3 / 2;
            // Sceduler.grd.y -= this.m1 / 2;
            // Sceduler.Mons.y -= this.m1 / 2;
            // // Sceduler.coinText.y+=this.m1/2;
            // Sceduler.Cns.y -= this.m1 / 2;
            // Sceduler.bkObj.y -= this.m2 / 2;
        }
        // }
        this.aniState.timeScale = 10;
        //用于控制静态物品跳跃返回高度
        // this.baseHeight = 900;
        if (this.frame == 35) {
            this.isTap = false;
            this.secJump = false;
            // this.ar.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onJump, this);
            this.reRun();
        }

    }

    public reRun() {
        // Sceduler.bkG.y += 100;
        this.ar.y = this.baseHeight;
        this.ar.animation.play("run", 0);
    }
    public stopAni() {
        this.ar.animation.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
}