var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Coins = (function (_super) {
    __extends(Coins, _super);
    function Coins() {
        var _this = _super.call(this) || this;
        //获得的金币数量
        _this.cnts = 0;
        //金币数组
        _this.coinArr_1 = [];
        _this.coinArr_2 = [];
        _this.coinArr_3 = [];
        _this.times_1 = [];
        _this.times_2 = [];
        _this.times_3 = [];
        _this.offsetX = 100;
        _this.offsetY = 60;
        _this.randNum = 0.5;
        _this.tickNum = 100;
        _this.speed = 10;
        _this.path = "money_small_png";
        _this.coinText = new egret.TextField();
        _this.player = Sceduler.Plyer;
        return _this;
    }
    Coins.prototype.onInit = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onInit, this);
        var i = this.getRand(4, 1);
        this.getType(i);
        this.showCoins(this.coinArr_1, this.times_1);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onMove, this);
    };
    Coins.prototype.onMove = function () {
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
            for (var i = 0; i < this.coinArr_1.length; ++i) {
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
            for (var i = 0; i < this.coinArr_2.length; ++i) {
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
            for (var i = 0; i < this.coinArr_3.length; ++i) {
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
            this.getType(n); //选择json文件
            this.showCoins(this.coinArr_1, this.times_1);
        }
        else if (this.coinArr_2.length == 0 && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
            //添加新的金币
            var n = this.getRand(4, 1);
            this.getType(n); //选择json文件
            this.showCoins(this.coinArr_2, this.times_2);
        }
        else if (this.coinArr_3.length == 0 && Math.random() > this.randNum && this.ticker % this.tickNum == 0) {
            //添加新的金币
            var n = this.getRand(4, 1);
            this.getType(n); //选择json文件
            this.showCoins(this.coinArr_3, this.times_3);
        }
    };
    //获取随机数
    Coins.prototype.getRand = function (m, n) {
        return Math.floor(Math.random() * m + n);
    };
    Coins.prototype.getType = function (i) {
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
    };
    //显示金币
    Coins.prototype.showCoins = function (arr, times) {
        if (arr === void 0) { arr = []; }
        if (times === void 0) { times = []; }
        var startX = this.getRand(20, this.stage.stageWidth);
        var startY = this.getRand(100, this.baseHeight - Sceduler.Plyer.ar.height - 400);
        var json = RES.getRes(this.coinjson);
        var coinTexture = RES.getRes(this.path);
        for (var j = 0; j < json['Ynum']; ++j) {
            for (var i = 0; i < json['Xnum']; ++i) {
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
    };
    //道具吸引金币自动下落
    Coins.prototype.CoinAttrDown = function (arr, times) {
        if (arr.length != 0 && arr[arr.length - 1].x > this.player.ar.x + this.player.ar.width) {
            // if (arr[0].x < this.player.ar.x + this.player.ar.width + 300 && arr[0].x >= this.player.ar.x) {
            for (var i in arr) {
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
    };
    //自动吸引金币
    Coins.prototype.attractCoins = function () {
        this.CoinAttrDown(this.coinArr_1, this.times_1);
        this.CoinAttrDown(this.coinArr_2, this.times_2);
        this.CoinAttrDown(this.coinArr_3, this.times_3);
    };
    return Coins;
}(ArrSprites));
__reflect(Coins.prototype, "Coins");
//# sourceMappingURL=Coins.js.map