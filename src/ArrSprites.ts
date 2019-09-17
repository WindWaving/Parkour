abstract class ArrSprites extends Sprites {
    Arr = [];
    //数组中存储的最大长度
    maxLength: number;
    offsetX: number;
    offsetY: number;
    randNum: any;
    types: number;
    constructor() {
        super();

    }

    onInit() {
        var i: number = Math.ceil(Math.random() * this.types);
        this.getType(i);
        //console.log(i,this.path);
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        var texture: egret.Texture = RES.getRes(this.path);
        var bitmap = new egret.Bitmap(texture);
        this.addChild(bitmap);

        bitmap.width *= this.scaleW;
        bitmap.height *= this.scaleH;
        //调整锚点
        bitmap.anchorOffsetY = bitmap.height;
        bitmap.x = this.stage.stageWidth + this.offsetX;
        bitmap.y = this.baseHeight - this.offsetY;
        this.Arr.push(bitmap);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    }

    onMove() {
        ++this.ticker;
        for (let i = 0; i < this.Arr.length; ++i) {
            //是否检测碰撞
            if (this.isDectColl(i)) {
                this.gameOver();
            }
            this.Arr[i].x -= this.speed;
            //删除超出界面的元素
            if (this.Arr[0].x < -this.Arr[0].width && this.Arr[0]) {
                this.Arr.splice(0, 1);
            }
        }
        this.birth();
    }

    //产生新的元素
    birth() {
        if (this.Arr.length < this.maxLength && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
            var i: number = Math.ceil(Math.random() * this.types);
            this.getType(i);
            var texture: egret.Texture = RES.getRes(this.path);
            var bitmap = new egret.Bitmap(texture);
            this.addChild(bitmap);
            bitmap.width *= this.scaleW;
            bitmap.height *= this.scaleH;
            bitmap.anchorOffsetY = bitmap.height;
            bitmap.x = this.stage.stageWidth + this.offsetX;
            bitmap.y = this.baseHeight - this.offsetY;
            this.Arr.push(bitmap);
        }
    }

    abstract getType(i: any): any;
    //是否检测碰撞    
    isDectColl(i: number): boolean {
        return false;
    }
    gameOver() { };
}