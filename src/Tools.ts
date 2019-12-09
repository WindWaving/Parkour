class Tools extends Sprites {
	private coin: Coins;
	private player: Player;
	private bitmap: egret.Bitmap;
	//道具持续时间
	duration: number;
	starttime: number;
	nowtime: number;
	isColDect: boolean = true;

	public constructor(path: string) {
		super();
		this.coin = Sceduler.Cns;
		this.player = Sceduler.Plyer;
		this.tickNum = 0;
		this.path = path;
		this.speed = 10;
		this.scaleW = 0.4;
		this.scaleH = 0.4;
		this.duration = 30000;
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
	}
	onInit(scaleW: any, scaleH: any, offsetX: number, offsetY: number) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);

	}
	onMove() {
		if (this.bitmap) {
			//碰撞检测
			if (this.isColDect) {
				if (CollisionDetect.hitTest(this.player.ar, this.bitmap)) {
					this.isColDect = false;
					console.log("collide");
					this.starttime = egret.getTimer();
					// this.coin.attractCoins();
				} else {
					this.bitmap.x -= this.speed;
				}
			} else {
				this.nowtime = egret.getTimer();
				if (this.nowtime - this.starttime >= this.duration) {
					this.endTiming();
				} else {
					this.coin.attractCoins();
				}
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
			//调整锚点
			this.bitmap.width *= this.scaleW;
			this.bitmap.height *= this.scaleH;
			this.bitmap.anchorOffsetY = this.bitmap.height;
			
			this.bitmap.x = this.stage.stageWidth + 100;
			this.bitmap.y = this.baseHeight-156;
			console.log(this.bitmap.y);
			this.tickNum = 1;
		}
	}

	endTiming() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}
}