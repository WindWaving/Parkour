class Sceduler extends eui.UILayer {
	static bkG: Bkgrounds;
	static bkObj: BkObjs;
	static Grd: Bkgrounds;
	static Plyer: Player;
	static Sobjs: StaticObjs;
	static Cns: Coins;
	static Mons: Monsters;
	static AttCns:Tools;
	static objLists = [];

	public constructor() {
		super();
		//创建背景和地面
		Sceduler.bkG = new Bkgrounds("background");
		this.addChild(Sceduler.bkG);
		//创建背景上的图片
		Sceduler.bkObj = new BkObjs();
		this.addChild(Sceduler.bkObj);

		Sceduler.Plyer = new Player();
		this.addChild(Sceduler.Plyer);
		//创建静态物
		// Sceduler.Sobjs = new StaticObjs();
		// this.addChild(Sceduler.Sobjs);
		//添加金币
		Sceduler.Cns = new Coins();
		this.addChild(Sceduler.Cns);
		//添加道具
		Sceduler.AttCns=new Tools("attract_coins_png");
		this.addChild(Sceduler.AttCns);
		//添加人物
		
		//创建怪物
		Sceduler.Mons = new Monsters();
		this.addChild(Sceduler.Mons);

		Sceduler.objLists.push(Sceduler.bkG);
		Sceduler.objLists.push(Sceduler.bkObj);
		// Sceduler.objLists.push(Sceduler.Grd);
		Sceduler.objLists.push(Sceduler.Plyer);
		// Sceduler.objLists.push(Sceduler.Sobjs);
		Sceduler.objLists.push(Sceduler.Cns);
		Sceduler.objLists.push(Sceduler.Mons);
	}

	public static removeAll() {
		for (let i in Sceduler.objLists) {
			Sceduler.objLists[i].stopAni();
		}
	}

	
}