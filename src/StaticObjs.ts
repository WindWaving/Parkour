class StaticObjs extends ArrSprites {
	private player: Player;
	static sobjFlag = [];
	constructor() {
		super();
		this.scaleW = 1;
		this.scaleH = 1;
		this.offsetX = 100;
		this.offsetY = -100;
		this.randNum = 0.7;
		this.tickNum = 100;
		this.types = 1;
		this.maxLength = 3;
		this.speed = 10;
		this.player = Sceduler.Plyer;
		for (let i = 0; i < 3; ++i) {
			StaticObjs.sobjFlag[i] = 0;
		}
	}

	onMove() {
		++this.ticker;
		for (let i = 0; i < this.Arr.length; ++i) {
			this.Arr[i].x -= this.speed;

			if (this.Arr[0].x < -this.Arr[i].width) {
				this.Arr.splice(0, 1);
			}
			try {
				if (this.Arr[i].x <= this.player.ar.x + this.player.ar.width && this.Arr[i].x + this.Arr[i].width >= this.player.ar.x
					&& this.player.ar.animation.lastAnimationName == "jump") {
					StaticObjs.sobjFlag[i] = 1;
					//this.player.ar.y = this.Arr[i].y - this.player.ar.height - this.Arr[i].height;
					this.player.baseHeight = this.Arr[i].y - this.Arr[i].height;
				}
				else if (this.Arr[i].x > this.player.ar.x+this.player.ar.width || this.Arr[i].x + this.Arr[i].width < this.player.ar.x) {
					if (StaticObjs.sobjFlag[i] == 1) {
						this.player.baseHeight = 900;
						this.player.reRun();
						StaticObjs.sobjFlag[i] = 0;
					}
				}

			}
			catch (e) {
				//console.log("创建静态物错误");
			}
		}

		this.birth();
		//添加新的物品

	}
	getType(i: any) {
		switch (i) {
			case 1:
				this.path = "stone_png";

		}
	}


}