class Coins extends ArrSprites {
	private coinjson: string;
	//获得的金币数量
	public cnts: number = 0;
	// private coinText: egret.TextField;
	//金币数组
	private coinArr_1 = [];
	private coinArr_2 = [];
	private coinArr_3 = [];
	private times_1 = [];
	private times_2 = [];
	private times_3 = [];


	private player: Player;
	constructor() {
		super();
		this.offsetX = 100;
		this.offsetY = 60;
		this.randNum = 0.5;
		this.tickNum = 100;
		this.speed = 10;
		this.path = "money_small_png";
		Sceduler.coinText = new egret.TextField();
		this.player = Sceduler.Plyer;
	}
	onInit() {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
		var i = this.getRand(4, 1);
		this.getType(i);
		this.showCoins(this.coinArr_1, this.times_1);
		this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
	}
	public onMove() {
		//显示获取金币数量
		Sceduler.coinText.text = "金币数量：" + this.cnts.toString() + " 个";
		this.addChild(Sceduler.coinText);
		Sceduler.coinText.x = 100;
		Sceduler.coinText.y = 150;
		Sceduler.coinText.size = 50;
		Sceduler.coinText.textColor = 0x000;
		++this.ticker;

		//移动金币
		if (this.coinArr_1.length != 0) {
			for (let i = 0; i < this.coinArr_1.length; ++i) {
				this.coinArr_1[i].x -= this.speed;
				if (CollisionDetect.hitTest(this.player.ar, this.coinArr_1[i])) {
					if (this.coinArr_1[i].parent) {
						this.coinArr_1[i].parent.removeChild(this.coinArr_1[i]);
					}
					if (this.times_1[i] == 0) {
						++this.cnts;
					}
					++this.times_1[i];
				}
			}
			if (this.coinArr_1[this.coinArr_1.length - 1].x < -400) {
				this.coinArr_1 = [];
				this.times_1 = [];
			}
		}
		if (this.coinArr_2.length != 0) {
			for (let i = 0; i < this.coinArr_2.length; ++i) {
				this.coinArr_2[i].x -= this.speed;
				if (CollisionDetect.hitTest(this.player.ar, this.coinArr_2[i])) {
					if (this.coinArr_2[i].parent) {
						this.coinArr_2[i].parent.removeChild(this.coinArr_2[i]);
					}
					if (this.times_2[i] == 0) {
						++this.cnts;
					}
					++this.times_2[i];
				}
			}
			if (this.coinArr_2[this.coinArr_2.length - 1].x < -400) {
				this.coinArr_2 = [];
				this.times_2 = [];
			}
		}
		if (this.coinArr_3.length != 0) {
			for (let i = 0; i < this.coinArr_3.length; ++i) {
				this.coinArr_3[i].x -= this.speed;
				if (CollisionDetect.hitTest(this.player.ar, this.coinArr_3[i])) {
					if (this.coinArr_3[i].parent) {
						this.coinArr_3[i].parent.removeChild(this.coinArr_3[i]);
					}
					if (this.times_3[i] == 0) {
						++this.cnts;
					}
					++this.times_3[i];
				}
			}
			if (this.coinArr_3[this.coinArr_3.length - 1].x < -400) {
				this.coinArr_3 = [];
				this.times_3 = [];
			}
		}

		//添加金币
		if (this.coinArr_1.length == 0 && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
			//添加新的金币
			var n = this.getRand(4, 1);
			this.getType(n);//选择json文件
			this.showCoins(this.coinArr_1, this.times_1);
		}
		else if (this.coinArr_2.length == 0 && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
			//添加新的金币
			var n = this.getRand(4, 1);
			this.getType(n);//选择json文件
			this.showCoins(this.coinArr_2, this.times_2);
		}
		else if (this.coinArr_3.length == 0 && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
			//添加新的金币
			var n = this.getRand(4, 1);
			this.getType(n);//选择json文件
			this.showCoins(this.coinArr_3, this.times_3);
		}

	}
	//获取随机数
	private getRand(m: number, n: number) {
		return Math.floor(Math.random() * m + n);
	}
	getType(i: number) {
		switch (i) {
			case 1:
				this.coinjson = "coins_one_json";
				break;
			case 2:
				this.coinjson = "coins_two_json";
				break;
			case 3:
				this.coinjson = "coins_three_json";
				break;
			case 4:
				this.coinjson = "coins_four_json";
				break;
		}
	}

	//显示金币
	private showCoins(arr = [], times = []) {
		var startX = this.getRand(20, this.stage.stageWidth);
		var startY = this.getRand(100, this.baseHeight - Sceduler.Plyer.ar.height - 400);

		var json = RES.getRes(this.coinjson);
		var coinTexture = RES.getRes(this.path);

		for (var j: number = 0; j < json['Ynum']; ++j) {
			for (var i: number = 0; i < json['Xnum']; ++i) {
				if (json.content[i][j] == "c") {
					var coinBitmap = new egret.Bitmap(coinTexture);
					coinBitmap.x = startX + j * this.offsetX + this.offsetX;
					coinBitmap.y = startY + i * this.offsetY + this.offsetY;
					arr.push(coinBitmap);
					times.push(0);
					this.addChild(coinBitmap);
				}
			}
		}
	}

	//道具吸引金币自动下落
	public CoinAttrDown(arr, times) {
		if (arr.length != 0 && arr[arr.length - 1].x > this.player.ar.x + this.player.ar.width) {
			// if (arr[0].x < this.player.ar.x + this.player.ar.width + 300 && arr[0].x >= this.player.ar.x) {
			for (let i in arr) {
				//金币单个吸引的效果
				if (arr[i].x < this.player.ar.x + this.player.ar.width + 300) {
					//计算金币自动落下的速度
					arr[i].x -= this.speed * 2.5;
					arr[i].y += (this.player.ar.y - arr[i].y - this.player.ar.height / 2) / 5;
					if (arr[i].x < this.player.ar.x + this.player.ar.width || arr[i].y >= this.player.ar.y || CollisionDetect.isCollision(this.player.ar, arr[i])) {
						if (arr[i].parent) {
							arr[i].parent.removeChild(arr[i]);
						}
						if (times[i] == 0) {
							++this.cnts;
						}
						++this.times_1[i];
						// arr.splice(i, 1);
						// times.splice(i, 1);
					}
				}

			}

		}
	}
	//自动吸引金币
	public attractCoins() {
		this.CoinAttrDown(this.coinArr_1, this.times_1);
		this.CoinAttrDown(this.coinArr_2, this.times_2);
		this.CoinAttrDown(this.coinArr_3, this.times_3);

	}
}