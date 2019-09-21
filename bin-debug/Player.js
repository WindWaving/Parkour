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
    function Player() {
        var _this = _super.call(this) || this;
        //得分
        _this.scores = 0;
        _this.ticker = 0;
        _this.tickNum = 5;
        _this.scaleH = 0.3;
        _this.scaleW = 0.3;
        _this.scoreText = new egret.TextField();
        _this.baseHeight = 1030;
        return _this;
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
        this.addChild(this.ar);
        //播放动画
        this.ar.animation.play("run", 0);
        // this.ar.animation.play("run2_slow", 0);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJump, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    Player.prototype.onMove = function () {
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
    };
    Player.prototype.onJump = function () {
        this.ar.y = this.baseHeight - 350;
        this.aniState = this.ar.animation.gotoAndPlayByFrame("jump", 4, 1);
        this.aniState.timeScale = 3;
        // this.ar.animation.
        this.baseHeight = 1030;
        this.ar.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.reRun, this);
    };
    Player.prototype.reRun = function () {
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