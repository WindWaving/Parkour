class EndGameUI extends eui.Component {
	private btnAgain: eui.Button;
	private btnReturn: eui.Button;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
	}
	private onInit() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
		this.addEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
		this.skinName = "resource/eui_skins/EndGame.exml";

	}
	private btnHandler() {
		this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againHandler, this);
		this.btnReturn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.retnHandler,this);
	}
	private againHandler() {
		var Sdler = new Sceduler();
		this.parent.addChild(Sdler);
		this.parent.removeChild(this);
	}
	private retnHandler(){
		var startUI=new StartGameUI();
		this.parent.addChild(startUI);
		this.parent.removeChild(this);
	}
}