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
var BkObjs = (function (_super) {
    __extends(BkObjs, _super);
    function BkObjs() {
        var _this = _super.call(this) || this;
        _this.lasthouse = 1;
        _this.scaleW = 0.75;
        _this.scaleH = 0.75;
        _this.offsetX = 500;
        _this.offsetY = -100;
        _this.randNum = -1;
        _this.tickNum = 1;
        _this.types = 3;
        _this.maxLength = 10;
        _this.speed = 10;
        return _this;
    }
    BkObjs.prototype.onInit = function () {
        // this.baseHeight=this.stage.stageHeight-60;
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        for (var i = 0; i < this.maxLength; ++i) {
            this.birth();
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    BkObjs.prototype.birth = function () {
        if (this.Arr.length < this.maxLength) {
            var i = Math.ceil(Math.random() * 5);
            this.getType(i);
            var texture = RES.getRes(this.path);
            var houseBitmap = new egret.Bitmap(texture);
            houseBitmap.width *= this.scaleW;
            houseBitmap.height *= this.scaleH;
            this.addChild(houseBitmap);
            if (this.Arr.length == 0) {
                houseBitmap.x = 0;
            }
            else {
                // houseBitmap.x = this.Arr[this.Arr.length - 1].x + this.offsetX;
                houseBitmap.x = this.Arr[this.Arr.length - 1].x + this.Arr[this.Arr.length - 1].width - 30;
            }
            houseBitmap.y = this.baseHeight - houseBitmap.height;
            this.Arr.push(houseBitmap);
        }
    };
    BkObjs.prototype.getType = function (i) {
        switch (i) {
            case 1:
                this.path = "house1_png";
                break;
            case 2:
                this.path = "house2_png";
                break;
            case 3:
                this.path = "house3_png";
                break;
            case 4:
                this.path = "house4_png";
                break;
            case 5:
                this.path = "house5_png";
                break;
        }
    };
    return BkObjs;
}(ArrSprites));
__reflect(BkObjs.prototype, "BkObjs");
//# sourceMappingURL=BkObjs.js.map