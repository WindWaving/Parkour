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
var EndGameUI = (function (_super) {
    __extends(EndGameUI, _super);
    function EndGameUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onInit, _this);
        return _this;
    }
    EndGameUI.prototype.onInit = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        this.addEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
        this.skinName = "resource/eui_skins/EndGame.exml";
    };
    EndGameUI.prototype.btnHandler = function () {
        this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againHandler, this);
        this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.retnHandler, this);
    };
    EndGameUI.prototype.againHandler = function () {
        var Sdler = new Sceduler();
        this.parent.addChild(Sdler);
        this.parent.removeChild(this);
    };
    EndGameUI.prototype.retnHandler = function () {
        var startUI = new StartGameUI();
        this.parent.addChild(startUI);
        this.parent.removeChild(this);
    };
    return EndGameUI;
}(eui.Component));
__reflect(EndGameUI.prototype, "EndGameUI");
//# sourceMappingURL=EndGameUI.js.map