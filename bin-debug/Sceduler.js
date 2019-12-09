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
var Sceduler = (function (_super) {
    __extends(Sceduler, _super);
    function Sceduler() {
        var _this = _super.call(this) || this;
        //创建背景
        Sceduler.bkG = new Bkgrounds();
        _this.addChild(Sceduler.bkG);
        //创建背景上的图片
        Sceduler.bkObj = new BkObjs();
        _this.addChild(Sceduler.bkObj);
        //创建地面
        // Sceduler.grd=new Bkgrounds("ground",0);
        // this.addChild(Sceduler.grd);
        Sceduler.Plyer = new Player();
        _this.addChild(Sceduler.Plyer);
        //创建静态物
        // Sceduler.Sobjs = new StaticObjs();
        // this.addChild(Sceduler.Sobjs);
        //添加金币
        Sceduler.Cns = new Coins();
        _this.addChild(Sceduler.Cns);
        //添加道具
        Sceduler.AttCns = new Tools("attract_coins_png");
        _this.addChild(Sceduler.AttCns);
        //添加人物
        //创建怪物
        Sceduler.Mons = new Monsters();
        _this.addChild(Sceduler.Mons);
        Sceduler.objLists.push(Sceduler.bkG);
        // Sceduler.objLists.push(Sceduler.bkg2);
        // Sceduler.objLists.push(Sceduler.grd);
        Sceduler.objLists.push(Sceduler.bkObj);
        Sceduler.objLists.push(Sceduler.Plyer);
        // Sceduler.objLists.push(Sceduler.Sobjs);
        Sceduler.objLists.push(Sceduler.Cns);
        Sceduler.objLists.push(Sceduler.Mons);
        return _this;
    }
    Sceduler.removeAll = function () {
        for (var i in Sceduler.objLists) {
            Sceduler.objLists[i].stopAni();
        }
    };
    Sceduler.objLists = [];
    return Sceduler;
}(eui.UILayer));
__reflect(Sceduler.prototype, "Sceduler");
//# sourceMappingURL=Sceduler.js.map