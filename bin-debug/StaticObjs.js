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
var StaticObjs = (function (_super) {
    __extends(StaticObjs, _super);
    function StaticObjs() {
        var _this = _super.call(this) || this;
        _this.scaleW = 1;
        _this.scaleH = 1;
        _this.offsetX = 100;
        _this.offsetY = -100;
        _this.randNum = 0.7;
        _this.tickNum = 100;
        _this.types = 1;
        _this.maxLength = 3;
        _this.speed = 10;
        _this.player = Sceduler.Plyer;
        for (var i = 0; i < 3; ++i) {
            StaticObjs.sobjFlag[i] = 0;
        }
        return _this;
    }
    StaticObjs.prototype.onMove = function () {
        ++this.ticker;
        for (var i = 0; i < this.Arr.length; ++i) {
            this.Arr[i].x -= this.speed;
            if (this.Arr[0].x < -this.Arr[i].width) {
                this.Arr.splice(0, 1);
            }
            try {
                if (this.Arr[i].x <= this.player.ar.x + this.player.ar.width && this.Arr[i].x + this.Arr[i].width >= this.player.ar.x
                    && this.player.ar.animation.lastAnimationName == "jump") {
                    StaticObjs.sobjFlag[i] = 1;
                    //this.player.ar.y = this.Arr[i].y - this.player.ar.height - this.Arr[i].height;
                    this.player.baseHeight = this.Arr[i].y - this.Arr[i].height;
                }
                else if (this.Arr[i].x > this.player.ar.x + this.player.ar.width || this.Arr[i].x + this.Arr[i].width < this.player.ar.x) {
                    if (StaticObjs.sobjFlag[i] == 1) {
                        this.player.baseHeight = 900;
                        this.player.reRun();
                        StaticObjs.sobjFlag[i] = 0;
                    }
                }
            }
            catch (e) {
                //console.log("创建静态物错误");
            }
        }
        this.birth();
        //添加新的物品
    };
    StaticObjs.prototype.getType = function (i) {
        switch (i) {
            case 1:
                this.path = "stone_png";
        }
    };
    StaticObjs.sobjFlag = [];
    return StaticObjs;
}(ArrSprites));
__reflect(StaticObjs.prototype, "StaticObjs");
//# sourceMappingURL=StaticObjs.js.map