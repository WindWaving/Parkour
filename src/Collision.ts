// TypeScript file
class CollisionDetect {

    public constructor() {

    }
    public static hitTest(obj1: dragonBones.EgretArmatureDisplay, obj2: egret.DisplayObject): boolean {
        var point = new egret.Point();
        point.x = obj2.x;
        point.y = obj2.y;
        obj1.globalToLocal(point.x, point.y, point);
        if (obj1.armature.containsPoint(point.x, point.y) || obj1.armature.containsPoint(point.x, point.y + obj2.height)) {
       //     console.log(point.x,point.y,point.y + obj2.height);
            return true;
        }
        if (obj1.armature.containsPoint(point.x + obj2.width, point.y) || obj1.armature.containsPoint(point.x + obj2.width
            , point.y + obj2.height)) {
       //     console.log(point.x,point.y,point.y + obj2.width);                
            return true;
        }
        return false;
    }

    public static isCollision(obj1: dragonBones.EgretArmatureDisplay, obj2) {
        var rect1: egret.Rectangle = obj1.getBounds();
        var rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.width = obj1.width;
        rect1.height = obj1.height;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        try {
            if (obj1.animation.getState("jump").isPlaying) {
                rect1.y = obj1.y - 120;
            }
        }
        catch (e) {
            rect1.y = obj1.y;
        }

        return rect1.intersects(rect2);
    }

}