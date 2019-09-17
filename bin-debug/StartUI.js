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
var StartGameUI = (function (_super) {
    __extends(StartGameUI, _super);
    function StartGameUI() {
        var _this = _super.call(this) || this;
        //  StartGameUI.self=this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onInit, _this);
        return _this;
    }
    StartGameUI.prototype.onInit = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        this.addEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
        this.skinName = "resource/eui_skins/StartUI.exml";
    };
    StartGameUI.prototype.btnHandler = function () {
        this.removeEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
        this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
    };
    StartGameUI.prototype.startHandler = function () {
        this.Sdler = new Sceduler();
        this.parent.addChild(this.Sdler);
        this.parent.removeChild(this);
    };
    return StartGameUI;
}(eui.Component));
__reflect(StartGameUI.prototype, "StartGameUI");
//# sourceMappingURL=StartUI.js.map