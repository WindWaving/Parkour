// TypeScript file
class Bkgrounds extends Sprites {
    //纹理数组
    private bkgArr: egret.Bitmap[] = [];
    //纹理宽度
    private Twidth: number;
    //纹理数组长度
    private Snum: number;
    //纹理类型
    private type:string;
    constructor(type:string) {
        super();
        this.speed = 10;
        this.spriteY = 0;
        this.type=type;
    }
    onInit() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        this.getType(this.type);
        var texture: egret.Texture = RES.getRes(this.path);
        this.Twidth = texture.textureWidth;
        // this.Snum = Math.ceil(this.stage.stageWidth / this.Twidth) + 2;
        this.Snum=2;
        //数组初始化
        for (var i: number = 0; i < this.Snum; ++i) {
            var bitmap: egret.Bitmap = new egret.Bitmap(texture);
            bitmap.x = this.Twidth * i;
            bitmap.y = this.spriteY;
            if (this.type == "background") {
                bitmap.height = this.stage.stageHeight;
                // console.log("adjust height",bitmap.height);
            }
            console.log("init",bitmap.anchorOffsetX,bitmap.anchorOffsetY);
            this.bkgArr.push(bitmap);
            this.addChild(bitmap);
        }
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }
    onMove() {
        for (var i: number = 0; i < this.Snum; ++i) {
            this.bkgArr[i].x -= this.speed;
            if (this.bkgArr[0].x < -this.Twidth && this.bkgArr[0]) {
                var g0 = this.bkgArr.splice(0, 1)[0];
                g0.x = this.bkgArr[this.Snum - 2].x + this.Twidth;
                this.bkgArr.push(g0);
            }
        }
    }
    getType(i: string) {
        switch (i) {
            case "ground":
                this.path = "loadingbk_png";
                this.spriteY = 900;
                break;
            case "background":
                this.path = "背景切图_png";
                this.spriteY = 0;
                break;
        }
    }

}