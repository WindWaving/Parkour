abstract class Sprites extends egret.DisplayObjectContainer {
    baseHeight: number=1030;//地面高度
    spriteX: number;
    spriteY: number;
    path: string;
    ticker: number;
    speed: number;
    tickNum: number;
    scaleW: any;
    scaleH: any;

    constructor() {
        super();
        this.ticker = 0;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
    }
    //初始化对象，参数为对象缩放以及位置偏移量
    abstract onInit(scaleW: any, scaleH: any, offsetX: number, offsetY: number): any;
    abstract onMove();
    stopAni() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
}