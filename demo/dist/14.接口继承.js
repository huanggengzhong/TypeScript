"use strict";
//接口继承接口(支持多继承)
var poi3 = {
    x: 100,
    y: 200,
    z: 300,
    time: new Date()
};
//------------------
//接口继承类
var Bird = /** @class */ (function () {
    function Bird() {
        this.type = "画眉鸟";
    }
    Bird.prototype.fly = function () {
    };
    return Bird;
}());
var f2 = {
    type: "啄木鸟",
    fly: function () {
    }
};
