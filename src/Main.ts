//////////////////////////////////////////////////////////////////////////////////////
//2019/08/08 重构代码

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        var mySprite: egret.Sprite = new egret.Sprite();
        mySprite.x = 200;
        mySprite.y = 200;
        this.addChild(mySprite);

        //画一个红色的圆，添加到 mySprite 中
        var circle: egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        mySprite.addChild(circle);
        //给圆增加点击事件
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick, this);
        var globalpoint=circle.localToGlobal(circle.x,circle.y);

        function onClick(): void {
            //把舞台坐标转换为 mySprite 内部的坐标
            var targetPoint: egret.Point = mySprite.globalToLocal(0, 0);
        }

        var strtUI = new StartGameUI();
        this.addChild(strtUI);
    }


}