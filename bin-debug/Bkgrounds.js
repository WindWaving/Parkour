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
// TypeScript file
var Bkgrounds = (function (_super) {
    __extends(Bkgrounds, _super);
    // private flag: number;
    function Bkgrounds() {
        var _this = _super.call(this) || this;
        //纹理数组
        _this.bkgArr = [];
        _this.speed = 10;
        _this.spriteY = 0;
        _this.type = "background";
        return _this;
        // this.flag = flag;
    }
    Bkgrounds.prototype.onInit = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        this.getType(this.type);
        var texture = RES.getRes(this.path);
        this.Twidth = texture.textureWidth;
        // this.Snum = Math.ceil(this.stage.stageWidth / this.Twidth) + 2;
        this.Snum = 2;
        //数组初始化
        for (var i = 0; i < this.Snum; ++i) {
            var bitmap = new egret.Bitmap(texture);
            bitmap.x = this.Twidth * i - 10;
            // if (this.flag == -1) {
            //     // bitmap.anchorOffsetX=bitmap.width/2;
            //     // bitmap.anchorOffsetY=bitmap.height/2;
            //     bitmap.skewX=180;
            //     this.spriteY = 10;
            // }
            // bitmap.anchorOffsetY=bitmap.height;
            bitmap.y = this.spriteY;
            bitmap.height = this.stage.stageHeight;
            this.bkgArr.push(bitmap);
            this.addChild(bitmap);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    Bkgrounds.prototype.onMove = function () {
        for (var i = 0; i < this.Snum; ++i) {
            this.bkgArr[i].x -= this.speed;
            if (this.bkgArr[0].x < -this.Twidth && this.bkgArr[0]) {
                var g0 = this.bkgArr.splice(0, 1)[0];
                g0.x = this.bkgArr[this.Snum - 2].x + this.Twidth;
                this.bkgArr.push(g0);
            }
        }
    };
    Bkgrounds.prototype.getType = function (i) {
        switch (i) {
            // case "ground":
            //     this.path = "ground_jpg";
            //     this.spriteY = this.baseHeight;
            //     break;
            case "background":
                this.path = "background_png";
                this.spriteY = 0;
                break;
        }
    };
    return Bkgrounds;
}(Sprites));
__reflect(Bkgrounds.prototype, "Bkgrounds");
//# sourceMappingURL=Bkgrounds.js.map