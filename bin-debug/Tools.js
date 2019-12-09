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
var Tools = (function (_super) {
    __extends(Tools, _super);
    function Tools(path) {
        var _this = _super.call(this) || this;
        _this.isColDect = true;
        _this.coin = Sceduler.Cns;
        _this.player = Sceduler.Plyer;
        _this.tickNum = 0;
        _this.path = path;
        _this.speed = 10;
        _this.scaleW = 0.4;
        _this.scaleH = 0.4;
        _this.duration = 30000;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onInit, _this);
        return _this;
    }
    Tools.prototype.onInit = function (scaleW, scaleH, offsetX, offsetY) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    Tools.prototype.onMove = function () {
        if (this.bitmap) {
            //碰撞检测
            if (this.isColDect) {
                if (CollisionDetect.hitTest(this.player.ar, this.bitmap)) {
                    this.isColDect = false;
                    console.log("collide");
                    this.starttime = egret.getTimer();
                    // this.coin.attractCoins();
                }
                else {
                    this.bitmap.x -= this.speed;
                }
            }
            else {
                this.nowtime = egret.getTimer();
                if (this.nowtime - this.starttime >= this.duration) {
                    this.endTiming();
                }
                else {
                    this.coin.attractCoins();
                }
            }
            if (this.bitmap.x < -this.bitmap.width) {
                this.bitmap = null;
                this.parent.removeChild(this);
            }
        }
        //添加道具
        if (this.coin.cnts > 0 && Math.random() > this.tickNum) {
            var texture = RES.getRes(this.path);
            this.bitmap = new egret.Bitmap(texture);
            this.addChild(this.bitmap);
            //调整锚点
            this.bitmap.width *= this.scaleW;
            this.bitmap.height *= this.scaleH;
            this.bitmap.anchorOffsetY = this.bitmap.height;
            this.bitmap.x = this.stage.stageWidth + 100;
            this.bitmap.y = this.baseHeight - 156;
            console.log(this.bitmap.y);
            this.tickNum = 1;
        }
    };
    Tools.prototype.endTiming = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return Tools;
}(Sprites));
__reflect(Tools.prototype, "Tools");
//# sourceMappingURL=Tools.js.map