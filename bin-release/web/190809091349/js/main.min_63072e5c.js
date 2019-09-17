var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,s){function o(t){try{a(r.next(t))}catch(e){s(e)}}function h(t){try{a(r["throw"](t))}catch(e){s(e)}}function a(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(o,h)}a((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return r([t,e])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,s&&(o=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,s=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(r){i=[6,r],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,o,h,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return h={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h},Sprites=function(t){function e(){var e=t.call(this)||this;return e.baseHeight=900,e.ticker=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onInit,e),e}return __extends(e,t),e}(egret.DisplayObjectContainer);__reflect(Sprites.prototype,"Sprites");var ArrSprites=function(t){function e(){var e=t.call(this)||this;return e.Arr=[],e}return __extends(e,t),e.prototype.onInit=function(){var t=Math.ceil(Math.random()*this.types);this.getType(t),this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this);var e=RES.getRes(this.path),i=new egret.Bitmap(e);this.addChild(i),i.anchorOffsetY=i.height,i.width*=this.scaleW,i.height*=this.scaleH,i.x=this.stage.stageWidth+this.offsetX,i.y=this.baseHeight-this.offsetY,this.Arr.push(i),this.addEventListener(egret.Event.ENTER_FRAME,this.onMove,this)},e.prototype.onMove=function(){++this.ticker;for(var t=0;t<this.Arr.length;++t)this.isDectColl(t)&&this.gameOver(),this.Arr[t].x-=this.speed,this.Arr[0].x<-this.Arr[0].width&&this.Arr[0]&&this.Arr.splice(0,1);this.birth()},e.prototype.birth=function(){if(this.Arr.length<this.maxLength&&Math.random()>this.randNum&&this.ticker%this.tickNum==0){var t=Math.ceil(Math.random()*this.types);this.getType(t);var e=RES.getRes(this.path),i=new egret.Bitmap(e);this.addChild(i),i.width*=this.scaleW,i.height*=this.scaleH,i.anchorOffsetY=i.height,i.x=this.stage.stageWidth+this.offsetX,i.y=this.baseHeight-this.offsetY,this.Arr.push(i)}},e.prototype.isDectColl=function(t){return!1},e.prototype.gameOver=function(){},e}(Sprites);__reflect(ArrSprites.prototype,"ArrSprites");var Bkgrounds=function(t){function e(e){var i=t.call(this)||this;return i.bkgArr=[],i.speed=10,i.spriteY=0,i.type=e,i}return __extends(e,t),e.prototype.onInit=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this),this.getType(this.type);var t=RES.getRes(this.path);this.Twidth=t.textureWidth,this.Snum=Math.ceil(this.stage.stageWidth/this.Twidth)+2;for(var e=0;e<this.Snum;++e){var i=new egret.Bitmap(t);i.x=this.Twidth*e,i.y=this.spriteY,"background"==this.type&&(i.height=this.stage.stageHeight),this.bkgArr.push(i),this.addChild(i)}this.addEventListener(egret.Event.ENTER_FRAME,this.onMove,this)},e.prototype.onMove=function(){for(var t=0;t<this.Snum;++t)if(this.bkgArr[t].x-=this.speed,this.bkgArr[0].x<-this.Twidth&&this.bkgArr[0]){var e=this.bkgArr.splice(0,1)[0];e.x=this.bkgArr[this.Snum-2].x+this.Twidth,this.bkgArr.push(e)}},e.prototype.getType=function(t){switch(t){case"ground":this.path="loadingbk_png",this.spriteY=900;break;case"background":this.path="sky_png",this.spriteY=0}},e}(Sprites);__reflect(Bkgrounds.prototype,"Bkgrounds");var BkObjs=function(t){function e(){var e=t.call(this)||this;return e.scaleW=.5,e.scaleH=.5,e.offsetX=500,e.offsetY=-100,e.randNum=-1,e.tickNum=1,e.types=3,e.maxLength=7,e.speed=10,e}return __extends(e,t),e.prototype.onInit=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this);for(var t=0;t<this.maxLength;++t)this.birth();this.addEventListener(egret.Event.ENTER_FRAME,this.onMove,this)},e.prototype.birth=function(){if(this.Arr.length<this.maxLength){var t=Math.floor(3*Math.random());this.getType(t);var e=RES.getRes(this.path),i=new egret.Bitmap(e);i.width/=2,i.height/=2,this.addChild(i),0==this.Arr.length?i.x=100:i.x=this.Arr[this.Arr.length-1].x+this.offsetX,i.y=this.baseHeight-i.height+100,this.Arr.push(i)}},e.prototype.getType=function(t){switch(t){case 1:this.path="tree1_png";break;case 2:this.path="tree2_png";break;case 3:this.path="tree3_png"}},e}(ArrSprites);__reflect(BkObjs.prototype,"BkObjs");var Coins=function(t){function e(e){var i=t.call(this)||this;return i.cnts=0,i.coinArr_1=[],i.coinArr_2=[],i.coinArr_3=[],i.offsetX=60,i.randNum=.5,i.tickNum=100,i.speed=10,i.path="money_small_png",i.coinText=new egret.TextField,i.player=e,i}return __extends(e,t),e.prototype.onInit=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this);var t=this.getRand(4,1);this.getType(t),this.showCoins(this.coinArr_1),this.addEventListener(egret.Event.ENTER_FRAME,this.onMove,this)},e.prototype.onMove=function(){if(this.coinText.text="金币数量："+this.cnts.toString()+" 个",this.addChild(this.coinText),this.coinText.x=100,this.coinText.y=150,this.coinText.size=50,this.coinText.textColor=0,++this.ticker,0!=this.coinArr_1.length){for(var t=0;t<this.coinArr_1.length;++t)this.coinArr_1[t].x-=this.speed,CollisionDetect.isCollision(this.player.ar,this.coinArr_1[t])&&(this.coinArr_1[t].parent&&this.coinArr_1[t].parent.removeChild(this.coinArr_1[t]),++this.cnts);this.coinArr_1[this.coinArr_1.length-1].x<-300&&(this.coinArr_1=[])}if(0!=this.coinArr_2.length){for(var t=0;t<this.coinArr_2.length;++t)this.coinArr_2[t].x-=this.speed,CollisionDetect.isCollision(this.player.ar,this.coinArr_2[t])&&(this.coinArr_2[t].parent&&this.coinArr_2[t].parent.removeChild(this.coinArr_2[t]),++this.cnts);this.coinArr_2[this.coinArr_2.length-1].x<-300&&(this.coinArr_2=[])}if(0!=this.coinArr_3.length){for(var t=0;t<this.coinArr_3.length;++t)this.coinArr_3[t].x-=this.speed,CollisionDetect.isCollision(this.player.ar,this.coinArr_3[t])&&(this.coinArr_3[t].parent&&this.coinArr_3[t].parent.removeChild(this.coinArr_3[t]),++this.cnts);this.coinArr_3[this.coinArr_3.length-1].x<-300&&(this.coinArr_3=[])}if(0==this.coinArr_1.length&&Math.random()>this.randNum&&this.ticker%this.tickNum==0){var e=this.getRand(4,1);this.getType(e),this.showCoins(this.coinArr_1)}else if(0==this.coinArr_2.length&&Math.random()>this.randNum&&this.ticker%this.tickNum==0){var e=this.getRand(4,1);this.getType(e),this.showCoins(this.coinArr_2)}else if(0==this.coinArr_3.length&&Math.random()>this.randNum&&this.ticker%this.tickNum==0){var e=this.getRand(4,1);this.getType(e),this.showCoins(this.coinArr_3)}},e.prototype.getRand=function(t,e){return Math.floor(Math.random()*t+e)},e.prototype.getType=function(t){switch(t){case 1:this.coinjson="coins_one_json";break;case 2:this.coinjson="coins_two_json";break;case 3:this.coinjson="coins_three_json";break;case 4:this.coinjson="coins_four_json"}},e.prototype.showCoins=function(t){void 0===t&&(t=[]);for(var e=this.getRand(20,this.stage.stageWidth),i=this.getRand(200,150),r=RES.getRes(this.coinjson),n=RES.getRes(this.path),s=0;s<r.Xnum;++s)for(var o=0;o<r.Ynum;++o)if("c"==r.content[s][o]){var h=new egret.Bitmap(n);h.x=e+o*this.offsetX+this.offsetX,h.y=i+s*this.offsetX+this.offsetX,t.push(h),this.addChild(h)}},e}(ArrSprites);__reflect(Coins.prototype,"Coins");var CollisionDetect=function(){function t(){}return t.hitTest=function(t,e){var i=new egret.Point;return i.x=e.x,i.y=e.y,t.globalToLocal(i.x,i.y,i),t.armature.containsPoint(i.x,i.y)||t.armature.containsPoint(i.x,i.y+e.height)?(console.log("碰撞"),!0):t.armature.containsPoint(i.x+e.width,i.y)||t.armature.containsPoint(i.x+e.width,i.y+e.height)?(console.log("碰撞"),!0):!1},t.isCollision=function(t,e){var i=t.getBounds(),r=e.getBounds();i.x=t.x,i.width=t.width,i.height=t.height,r.x=e.x,r.y=e.y;try{t.animation.getState("jump").isPlaying&&(i.y=t.y-120)}catch(n){i.y=t.y}return i.intersects(r)},t}();__reflect(CollisionDetect.prototype,"CollisionDetect");var EndGameUI=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onInit,e),e}return __extends(e,t),e.prototype.onInit=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this),this.addEventListener(eui.UIEvent.COMPLETE,this.btnHandler,this),this.skinName="resource/eui_skins/EndGame.exml"},e.prototype.btnHandler=function(){this.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP,this.againHandler,this)},e.prototype.againHandler=function(){},e}(eui.Component);__reflect(EndGameUI.prototype,"EndGameUI");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function r(r){e.call(i,r,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?r(n):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Monsters=function(t){function e(e){var i=t.call(this)||this;return i.scaleW=.7,i.scaleH=.7,i.offsetX=100,i.randNum=.9,i.tickNum=50,i.types=3,i.maxLength=3,i.player=e,i}return __extends(e,t),e.prototype.getType=function(t){switch(t){case 1:this.path="monster_3_png",this.offsetY=450,this.speed=30;break;case 2:this.path="monster_2_png",this.offsetY=0,this.speed=20;break;case 3:this.path="monster_1_png",this.offsetY=320,this.speed=40}},e.prototype.isDectColl=function(t){return CollisionDetect.hitTest(this.player.ar,this.Arr[t])},e.prototype.gameOver=function(){var t=new EndGameUI;this.addChild(t)},e}(ArrSprites);__reflect(Monsters.prototype,"Monsters");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var Player=function(t){function e(){var e=t.call(this)||this;return e.scores=0,e.ticker=0,e.tickNum=5,e.scoreText=new egret.TextField,e}return __extends(e,t),e.prototype.onInit=function(){var t=RES.getRes("theElf_ske_json"),e=RES.getRes("theElf_tex_json"),i=RES.getRes("theElf_tex_png"),r=new dragonBones.EgretFactory;r.parseDragonBonesData(t),r.parseTextureAtlasData(e,i),this.ar=r.buildArmatureDisplay("elf"),this.ar.x=500,this.ar.y=this.baseHeight-300,this.x=0,this.y=0,this.ar.scaleX=.5,this.ar.scaleY=.5,this.ar.width/=2,this.ar.height/=2,this.addChild(this.ar),this.ar.animation.play("run2_slow",0),this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onJump,this),this.addEventListener(egret.Event.ENTER_FRAME,this.onMove,this)},e.prototype.onMove=function(){++this.ticker,this.ticker%this.tickNum==0&&++this.scores,this.scoreText.text="奔跑距离："+this.scores.toString()+" 米",this.addChild(this.scoreText),this.scoreText.x=100,this.scoreText.y=50,this.scoreText.size=50,this.scoreText.textColor=0,this.scores>100&&(this.stage.frameRate=40),this.scores>300&&(this.stage.frameRate=50)},e.prototype.onJump=function(){this.ar.y=this.baseHeight-550,this.aniState=this.ar.animation.gotoAndPlayByFrame("jump",4,1),this.baseHeight=900,this.ar.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.reRun,this)},e.prototype.reRun=function(){console.log(this.baseHeight),this.ar.y=this.baseHeight-300,this.ar.animation.play("run2_slow",0)},e.prototype.stop=function(){this.ar.animation.stop()},e}(Sprites);__reflect(Player.prototype,"Player");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,r){function n(t){e.call(r,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),i.call(r))}var o=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,i){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(r,generateEUI2)},o)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var h=t.split("/");h.pop();var a=h.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(r,generateJSON.paths[t])},this):RES.getResByUrl(a,function(i){window.JSONParseClass.setData(i),egret.callLater(function(){e.call(r,generateJSON.paths[t])},o)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var StartGameUI=function(t){function e(){var e=t.call(this)||this;return e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onInit,e),e}return __extends(e,t),e.prototype.onInit=function(){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onInit,this),this.addEventListener(eui.UIEvent.COMPLETE,this.btnHandler,this),this.skinName="resource/eui_skins/StartUI.exml"},e.prototype.btnHandler=function(){this.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startHandler,this)},e.prototype.startHandler=function(){var t=new Bkgrounds("background");this.addChild(t);var e=new BkObjs;this.addChild(e);var i=new Bkgrounds("ground");this.addChild(i);var r=new Player,n=new StaticObjs(r);this.addChild(n);var s=new Coins(r);this.addChild(s),this.addChild(r);var o=new Monsters(r);this.addChild(o)},e}(eui.Component);__reflect(StartGameUI.prototype,"StartGameUI");var StaticObjs=function(t){function e(i){var r=t.call(this)||this;r.scaleW=1,r.scaleH=1,r.offsetX=100,r.offsetY=-100,r.randNum=.7,r.tickNum=100,r.types=1,r.maxLength=3,r.speed=10,r.player=i;for(var n=0;3>n;++n)e.sobjFlag[n]=0;return r}return __extends(e,t),e.prototype.onMove=function(){++this.ticker;for(var t=0;t<this.Arr.length;++t){this.Arr[t].x-=this.speed,this.Arr[0].x<-this.Arr[t].width&&this.Arr.splice(0,1);try{this.Arr[t].x<=this.player.ar.x+this.player.ar.width&&this.Arr[t].x+this.Arr[t].width>=this.player.ar.x&&"jump"==this.player.ar.animation.lastAnimationName?(e.sobjFlag[t]=1,this.player.baseHeight=this.Arr[t].y-this.Arr[t].height):(this.Arr[t].x>this.player.ar.x+this.player.ar.width||this.Arr[t].x+this.Arr[t].width<this.player.ar.x)&&1==e.sobjFlag[t]&&(this.player.baseHeight=900,this.player.reRun(),e.sobjFlag[t]=0)}catch(i){}}this.birth()},e.prototype.getType=function(t){switch(t){case 1:this.path="stone_png"}},e.sobjFlag=[],e}(ArrSprites);__reflect(StaticObjs.prototype,"StaticObjs");var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=new StartGameUI;this.addChild(t)},e.prototype.sceduler=function(){var t=new Bkgrounds("background");this.addChild(t);var e=new BkObjs;this.addChild(e);var i=new Bkgrounds("ground");this.addChild(i);var r=new Player,n=new StaticObjs(r);this.addChild(n);var s=new Coins(r);this.addChild(s),this.addChild(r);var o=new Monsters(r);this.addChild(o)},e}(eui.UILayer);__reflect(Main.prototype,"Main");