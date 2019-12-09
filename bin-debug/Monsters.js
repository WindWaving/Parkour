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
var Monsters = (function (_super) {
    __extends(Monsters, _super);
    function Monsters() {
        var _this = _super.call(this) || this;
        _this.scaleW = 0.7;
        _this.scaleH = 0.7;
        _this.offsetX = 100;
        _this.randNum = 0.7;
        _this.tickNum = 70;
        _this.types = 3;
        _this.maxLength = 3;
        _this.player = Sceduler.Plyer;
        return _this;
    }
    Monsters.prototype.getType = function (i) {
        switch (i) {
            case 1:
                this.path = "monster_3_png";
                this.offsetY = 360;
                this.speed = 30;
                break;
            case 2:
                this.path = "monster_2_png";
                this.offsetY = 0;
                this.speed = 15;
                break;
            case 3:
                this.path = "monster_1_png";
                this.offsetY = 0;
                this.speed = 20;
                break;
        }
    };
    Monsters.prototype.isDectColl = function (i) {
        // return false;
        return CollisionDetect.hitTest(this.player.ar, this.Arr[i]);
    };
    Monsters.prototype.gameOver = function () {
        Sceduler.removeAll();
        var self = this;
        setTimeout(function () {
            var endUI = new EndGameUI();
            self.parent.parent.addChild(endUI);
            //this.parent是sceduler游戏界面
            self.parent.parent.removeChild(self.parent);
        }, 2000);
    };
    return Monsters;
}(ArrSprites));
__reflect(Monsters.prototype, "Monsters");
//# sourceMappingURL=Monsters.js.map