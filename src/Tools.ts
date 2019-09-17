class Tools extends Sprites {
	private coin: Coins;
	private player: Player;
	private bitmap: egret.Bitmap;
	//道具持续时间
	duration: number;
	public constructor(path: string) {
		super();
		this.coin = Sceduler.Cns;
		this.player = Sceduler.Plyer;
		this.tickNum = 0;
		this.path = path;
		this.speed = 10;
		this.baseHeight = 900;
		this.scaleW = 0.4;
		this.scaleH = 0.4;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
	}
	onInit(scaleW: any, scaleH: any, offsetX: number, offsetY: number) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);

	}
	onMove() {
		if (this.bitmap) {
			//碰撞检测
			if (CollisionDetect.hitTest(this.player.ar, this.bitmap)) {
				this.coin.attractCoins();
				console.log("工具获得");
			} else {
				this.bitmap.x -= this.speed;
			}
			if (this.bitmap.x < -this.bitmap.width) {
				this.bitmap = null;
				this.parent.removeChild(this);
			}
		}
		//添加道具
		if (this.coin.cnts > 0 && Math.random() > this.tickNum) {
			var texture: egret.Texture = RES.getRes(this.path);
			this.bitmap = new egret.Bitmap(texture);
			this.addChild(this.bitmap);
			this.bitmap.width *= this.scaleW;
			this.bitmap.height *= this.scaleH;
			this.bitmap.x = this.stage.stageWidth + 100;
			this.bitmap.y = this.baseHeight - this.bitmap.height - 10;
			this.tickNum = 1;
		}
	}
}