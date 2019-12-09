class BkObjs extends ArrSprites {
	private lasthouse: number = 1;
	constructor() {
		super();
		this.scaleW = 0.75;
		this.scaleH = 0.75;
		this.offsetX = 500;
		this.offsetY = -100;
		this.randNum = -1;
		this.tickNum = 1;
		this.types = 3;
		this.maxLength = 10;
		this.speed = 12;
	}

	onInit() {
		// this.baseHeight=this.stage.stageHeight-60;
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
		for (var i = 0; i < this.maxLength; ++i) {
			this.birth();
		}
		this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
	}

	birth() {
		if (this.Arr.length < this.maxLength) {
			var i = Math.ceil(Math.random() * 5);
			this.getType(i);
			var texture: egret.Texture = RES.getRes(this.path);
			var houseBitmap = new egret.Bitmap(texture);
			houseBitmap.width *= this.scaleW;
			houseBitmap.height *= this.scaleH;
			houseBitmap.anchorOffsetY=houseBitmap.height;
			this.addChild(houseBitmap);
			if (this.Arr.length == 0) {
				houseBitmap.x = 0;
			} else {
				houseBitmap.x = this.Arr[this.Arr.length - 1].x + this.Arr[this.Arr.length - 1].width - 50;
			}
			// houseBitmap.y = this.baseHeight;
			houseBitmap.y=this.baseHeight;
			this.Arr.push(houseBitmap);
		}
	}
	getType(i: number) {
		switch (i) {
			case 1:
				this.path = "house1_png";
				break;
			case 2:
				this.path = "house2_png";
				break;
			case 3:
				this.path = "house3_png";
				break;
			case 4:
				this.path = "house4_png";
				break;
			case 5:
				this.path = "house5_png";
				break;
		}
	}

}