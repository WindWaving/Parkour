var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var CollisionDetect = (function () {
    function CollisionDetect() {
    }
    CollisionDetect.hitTest = function (obj1, obj2) {
        var point = new egret.Point();
        point.x = obj2.x;
        point.y = obj2.y;
        var localpoint = obj1.globalToLocal(point.x, point.y);
        if (obj1.armature.getSlot('躯干_boundingBox').containsPoint(localpoint.x, localpoint.y) || obj1.armature.containsPoint(localpoint.x, localpoint.y + obj2.height)) {
            return true;
        }
        if (obj1.armature.getSlot('躯干_boundingBox').containsPoint(localpoint.x + obj2.width, localpoint.y) || obj1.armature.containsPoint(localpoint.x + obj2.width, localpoint.y + obj2.height)) {
            return true;
        }
        return false;
    };
    CollisionDetect.isCollision = function (obj1, obj2) {
        var rect1 = obj1.getBounds();
        var rect2 = obj2.getBounds();
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
    };
    return CollisionDetect;
}());
__reflect(CollisionDetect.prototype, "CollisionDetect");
//# sourceMappingURL=Collision.js.map