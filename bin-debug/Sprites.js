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
var Sprites = (function (_super) {
    __extends(Sprites, _super);
    function Sprites() {
        var _this = _super.call(this) || this;
        _this.baseHeight = 1030; //地面高度
        _this.baseHeight = 1030;
        _this.ticker = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onInit, _this);
        return _this;
    }
    Sprites.prototype.stopAni = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    return Sprites;
}(egret.DisplayObjectContainer));
__reflect(Sprites.prototype, "Sprites");
//# sourceMappingURL=Sprites.js.map