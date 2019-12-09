var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Player = (function (_super) {
    __extends(Player, _super);
    // private m2: number;
    // private m3:number;
    function Player() {
        var _this = _super.call(this) || this;
        //分数区域
        // private scoreText: egret.TextField;
        //得分
        _this.scores = 0;
        _this.isTap = false;
        _this.secJump = false;
        _this.ticker = 0;
        _this.tickNum = 5;
        _this.scaleH = 0.3;
        _this.scaleW = 0.3;
        Sceduler.scoreText = new egret.TextField();
        // this.d1 = 50;
        // this.d2 = 20;
        // this.d3 =100;
        _this.m1 = 25;
        return _this;
        // this.m2 = this.m1 * this.d1 / (this.d1 + this.d2);
        // this.m3=this.m1*this.d1/(this.d3+this.d1);
    }
    Player.prototype.onInit = function () {
        //创建dragonbones动画
        var dragonbonesData = RES.getRes("cat_label_ske_json");
        var textureData = RES.getRes("cat_label_tex_json");
        var texture = RES.getRes("cat_3_tex_png");
        var dragonbonesFactory = new dragonBones.EgretFactory();
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
        var body = new p2.Body();
        body.displays = [this.ar];
        var world = new p2.World();
        world.addBody(body);
        this.addChild(this.ar);
        //播放动画
        this.ar.animation.play("run", 0);
        this.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpInit, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    Player.prototype.onMove = function () {
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
    };
    //可以跳起的条件
    Player.prototype.onJumpInit = function () {
        if (this.secJump == false) {
            this.isTap = true;
            this.frame = 10; //开始播放的帧
            this.onJump();
        }
    };
    Player.prototype.onJump = function () {
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
        }
        else {
            this.ar.y += this.m1 * 2 / 3;
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
    };
    Player.prototype.reRun = function () {
        // Sceduler.bkG.y += 100;
        this.ar.y = this.baseHeight;
        this.ar.animation.play("run", 0);
    };
    Player.prototype.stopAni = function () {
        this.ar.animation.stop();
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    return Player;
}(Sprites));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map