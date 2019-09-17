window.skins=window.skins||{};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/Butns.exml'] = window.Butns = (function (_super) {
	__extends(Butns, _super);
	function Butns() {
		_super.call(this);
		this.skinParts = ["again_label"];
		
		this.currentState = "btn_up";
		this.height = 300;
		this.width = 400;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Label1_i();
		
		this._Image2_i();
		
		this.again_label_i();
		
		this.states = [
			new eui.State ("btn_up",
				[
					new eui.AddItems("_Image2","",1,""),
					new eui.AddItems("again_label","",1,"")
				])
			,
			new eui.State ("btn_down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Label1","",1,""),
					new eui.SetProperty("_Image2","y",-28)
				])
		];
	}
	var _proto = Butns.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.height = 400;
		t.source = "butns_down_png";
		t.width = 400;
		t.x = 0;
		t.y = -42;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.size = 50;
		t.text = "重新开始";
		t.width = 202;
		t.x = 99;
		t.y = 130;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.fillMode = "scale";
		t.height = 400;
		t.scale9Grid = new egret.Rectangle(261,261,453,478);
		t.source = "butns_png";
		t.width = 400;
		t.x = 0;
		t.y = -34;
		return t;
	};
	_proto.again_label_i = function () {
		var t = new eui.Label();
		this.again_label = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.size = 50;
		t.text = "重新开始";
		t.width = 206;
		t.x = 97;
		t.y = 135;
		return t;
	};
	return Butns;
})(eui.Skin);generateEUI.paths['resource/eui_skins/EndGame.exml'] = window.EndGame = (function (_super) {
	__extends(EndGame, _super);
	var EndGame$Skin1 = 	(function (_super) {
		__extends(EndGame$Skin1, _super);
		function EndGame$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","butns_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = EndGame$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "butns_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return EndGame$Skin1;
	})(eui.Skin);

	function EndGame() {
		_super.call(this);
		this.skinParts = ["btnAgain"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.btnAgain_i()];
	}
	var _proto = EndGame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 652378.35;
		t.anchorOffsetY = 294491.48;
		t.height = 1079.78;
		t.source = "EndGame_jpg";
		t.width = 1922.21;
		t.x = 652378.35;
		t.y = 294491.48;
		return t;
	};
	_proto.btnAgain_i = function () {
		var t = new eui.Button();
		this.btnAgain = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 256.06;
		t.label = "再来一次";
		t.width = 506.05;
		t.x = 651.52;
		t.y = 124.24;
		t.skinName = EndGame$Skin1;
		return t;
	};
	return EndGame;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartUI.exml'] = window.StartUI = (function (_super) {
	__extends(StartUI, _super);
	function StartUI() {
		_super.call(this);
		this.skinParts = ["btnStart"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.btnStart_i()];
	}
	var _proto = StartUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 217.76;
		t.anchorOffsetY = 110.19;
		t.height = 1080;
		t.source = "StartUI_jpg";
		t.width = 1920;
		t.x = 217.76;
		t.y = 110.19;
		return t;
	};
	_proto.btnStart_i = function () {
		var t = new eui.Image();
		this.btnStart = t;
		t.anchorOffsetX = 228.49;
		t.anchorOffsetY = 60.06;
		t.height = 197;
		t.source = "startBtn_png";
		t.width = 560.67;
		t.x = 228.49;
		t.y = 876.39;
		return t;
	};
	return StartUI;
})(eui.Skin);