class Monsters extends ArrSprites {
	private player: Player;
	constructor() {
		super();
		this.scaleW = 0.7;
		this.scaleH = 0.7;
		this.offsetX = 100;
		this.randNum = 0.7;
		this.tickNum = 70;
		this.types = 3;
		this.maxLength = 3;


		this.player = Sceduler.Plyer;
	}
	getType(i: any) {
		switch (i) {
			case 1:
				this.path = "monster_3_png";
				this.offsetY = 360;
				this.speed = 30;
				break;
			case 2:
				this.path = "monster_2_png";
				this.offsetY = 0;
				this.speed = 20;
				break;
			case 3:
				this.path = "monster_1_png";
				this.offsetY = 0;
				this.speed = 40;
				break;

		}
	}
	isDectColl(i: number) {
		// return false;
		return CollisionDetect.hitTest(this.player.ar, this.Arr[i]);
	}
	gameOver() {
		Sceduler.removeAll();
		var self = this;

		setTimeout(function () {
			var endUI = new EndGameUI();
			self.parent.parent.addChild(endUI);
			//this.parent是sceduler游戏界面
			self.parent.parent.removeChild(self.parent);
		}, 2000);

	}
}