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
var ArrSprites = (function (_super) {
    __extends(ArrSprites, _super);
    function ArrSprites() {
        var _this = _super.call(this) || this;
        _this.Arr = [];
        return _this;
    }
    ArrSprites.prototype.onInit = function () {
        var i = Math.ceil(Math.random() * this.types);
        this.getType(i);
        //console.log(i,this.path);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        var texture = RES.getRes(this.path);
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);
        bitmap.width *= this.scaleW;
        bitmap.height *= this.scaleH;
        //调整锚点
        bitmap.anchorOffsetY = bitmap.height;
        bitmap.x = this.stage.stageWidth + this.offsetX;
        bitmap.y = this.baseHeight - this.offsetY;
        this.Arr.push(bitmap);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    ArrSprites.prototype.onMove = function () {
        ++this.ticker;
        for (var i = 0; i < this.Arr.length; ++i) {
            //是否检测碰撞
            if (this.isDectColl(i)) {
                this.gameOver();
            }
            this.Arr[i].x -= this.speed;
            //删除超出界面的元素
            if (this.Arr[0].x < -this.Arr[0].width && this.Arr[0]) {
                this.Arr.splice(0, 1);
            }
        }
        this.birth();
    };
    //产生新的元素
    ArrSprites.prototype.birth = function () {
        if (this.Arr.length < this.maxLength && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
            var i = Math.ceil(Math.random() * this.types);
            this.getType(i);
            var texture = RES.getRes(this.path);
            var bitmap = new egret.Bitmap(texture);
            this.addChild(bitmap);
            bitmap.width *= this.scaleW;
            bitmap.height *= this.scaleH;
            bitmap.anchorOffsetY = bitmap.height;
            bitmap.x = this.stage.stageWidth + this.offsetX;
            bitmap.y = this.baseHeight - this.offsetY;
            this.Arr.push(bitmap);
        }
    };
    //是否检测碰撞    
    ArrSprites.prototype.isDectColl = function (i) {
        return false;
    };
    ArrSprites.prototype.gameOver = function () { };
    ;
    return ArrSprites;
}(Sprites));
__reflect(ArrSprites.prototype, "ArrSprites");
//# sourceMappingURL=ArrSprites.js.map