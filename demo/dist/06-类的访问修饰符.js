"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
        this.run(); //可以使用,加了private后只能在当前类中使用
    }
    //加了private,就只能在当前类中使用
    Car.prototype.run = function () {
        console.log("车跑");
    };
    return Car;
}());
var byd = new Car();
// byd.run() //不在当前类,不可以访问
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.sayHi = function () {
        this.run(); //可以使用
    };
    return Audi;
}(Car));
var audi = new Audi();
// audi.run()//不在当前子类,不可以使用
