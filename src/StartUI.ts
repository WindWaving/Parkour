class StartGameUI extends eui.Component {
        private btnStart: eui.Button;
      //  static self;
        public Sdler:Sceduler;
        public constructor() {
                super();
              //  StartGameUI.self=this;
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        }
        private onInit() {
                this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
                this.addEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
                this.skinName = "resource/eui_skins/StartUI.exml";
        }
        private btnHandler() {
                this.removeEventListener(eui.UIEvent.COMPLETE, this.btnHandler, this);
                this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startHandler, this);
        }
        private startHandler() {
                this.Sdler=new Sceduler();
                this.parent.addChild(this.Sdler);
                this.parent.removeChild(this);
                
        }

}