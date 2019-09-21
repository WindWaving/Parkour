class Coins extends ArrSprites {
	private coinjson: string;
	//获得的金币数量
	public cnts: number = 0;
	private coinText: egret.TextField;
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
		this.offsetX = 60;
		this.randNum = 0.5;
		this.tickNum = 100;
		this.speed = 10;
		this.path = "money_small_png";
		this.coinText = new egret.TextField();
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
		this.coinText.text = "金币数量：" + this.cnts.toString() + " 个";
		this.addChild(this.coinText);
		this.coinText.x = 100;
		this.coinText.y = 150;
		this.coinText.size = 50;
		this.coinText.textColor = 0x000;
		++this.ticker;

		//移动金币
		if (this.coinArr_1.length != 0) {
			for (let i = 0; i < this.coinArr_1.length; ++i) {
				this.coinArr_1[i].x -= this.speed;
				if (CollisionDetect.isCollision(this.player.ar, this.coinArr_1[i])) {
					if (this.coinArr_1[i].parent) {
						this.coinArr_1[i].parent.removeChild(this.coinArr_1[i]);
					}
					if (this.times_1[i] == 0) {
						++this.cnts;
					}
					++this.times_1[i];
				}
			}
			if (this.coinArr_1[this.coinArr_1.length - 1].x < -300) {
				this.coinArr_1 = [];
				this.times_1 = [];
			}
		}
		if (this.coinArr_2.length != 0) {
			for (let i = 0; i < this.coinArr_2.length; ++i) {
				this.coinArr_2[i].x -= this.speed;
				if (CollisionDetect.isCollision(this.player.ar, this.coinArr_2[i])) {
					if (this.coinArr_2[i].parent) {
						this.coinArr_2[i].parent.removeChild(this.coinArr_2[i]);
					}
					if (this.times_2[i] == 0) {
						++this.cnts;
					}
					++this.times_2[i];
				}
			}
			if (this.coinArr_2[this.coinArr_2.length - 1].x < -300) {
				this.coinArr_2 = [];
				this.times_2 = [];
			}
		}
		if (this.coinArr_3.length != 0) {
			for (let i = 0; i < this.coinArr_3.length; ++i) {
				this.coinArr_3[i].x -= this.speed;
				if (CollisionDetect.isCollision(this.player.ar, this.coinArr_3[i])) {
					if (this.coinArr_3[i].parent) {
						this.coinArr_3[i].parent.removeChild(this.coinArr_3[i]);
					}
					if (this.times_3[i] == 0) {
						++this.cnts;
					}
					++this.times_3[i];
				}
			}
			if (this.coinArr_3[this.coinArr_3.length - 1].x < -300) {
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
		var startY = this.getRand(200, this.baseHeight-Sceduler.Plyer.ar.height-400);

		var json = RES.getRes(this.coinjson);
		var coinTexture = RES.getRes(this.path);

		for (var i: number = 0; i < json['Xnum']; ++i) {
			for (var j: number = 0; j < json['Ynum']; ++j) {
				if (json.content[i][j] == "c") {
					var coinBitmap = new egret.Bitmap(coinTexture);
					coinBitmap.x = startX + j * this.offsetX + this.offsetX;
					coinBitmap.y = startY + i * this.offsetX + this.offsetX;
					arr.push(coinBitmap);
					times.push(0);
					this.addChild(coinBitmap);
				}
			}
		}
	}

	//自动吸引金币
	public attractCoins() {
		//计算金币自动落下的速度
		if (this.coinArr_1.length != 0) {
			if (this.coinArr_1[0].x < this.player.ar.x + this.player.ar.width + 300 && this.coinArr_1[0].x >= this.player.ar.x) {
				for (let i in this.coinArr_1) {
					this.coinArr_1[i].x -= this.speed * 2;
					this.coinArr_1[i].y -= (this.coinArr_1[i].y - this.player.ar.y) / 5;
					if (CollisionDetect.isCollision(this.player.ar, this.coinArr_1[i])) {
						if (this.coinArr_1[i].parent) {
							this.coinArr_1[i].parent.removeChild(this.coinArr_1[i]);
						}
						if (this.times_1[i] == 0) {
							++this.cnts;
						}
						++this.times_1[i];
					}
				}
			}

		}
		if (this.coinArr_2.length != 0) {
			if (this.coinArr_2[0].x < this.player.ar.x + this.player.ar.width + 300 && this.coinArr_2[0].x >= this.player.ar.x) {
				for (let i in this.coinArr_2) {
					this.coinArr_2[i].x -= this.speed * 2;
					this.coinArr_2[i].y -= (this.coinArr_2[i].y - this.player.ar.y) / 5;
					if (CollisionDetect.isCollision(this.player.ar, this.coinArr_2[i])) {
						if (this.coinArr_2[i].parent) {
							this.coinArr_2[i].parent.removeChild(this.coinArr_2[i]);
						}
						if (this.times_2[i] == 0) {
							++this.cnts;
						}
						++this.times_2[i];
					}
				}
			}
		}
		if (this.coinArr_3.length != 0) {
			if (this.coinArr_3[0].x < this.player.ar.x + this.player.ar.width + 300 && this.coinArr_3[0].x >= this.player.ar.x) {
				for (let i in this.coinArr_3) {
					this.coinArr_3[i].x -= this.speed * 2;
					this.coinArr_3[i].y -= (this.coinArr_3[i].y - this.player.ar.y) / 5;
					if (CollisionDetect.isCollision(this.player.ar, this.coinArr_3[i])) {
						if (this.coinArr_3[i].parent) {
							this.coinArr_3[i].parent.removeChild(this.coinArr_3[i]);
						}
						if (this.times_3[i] == 0) {
							++this.cnts;
						}
						++this.times_3[i];
					}
				}
			}
		}
	}
}