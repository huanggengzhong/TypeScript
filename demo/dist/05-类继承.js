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
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.eat = function () {
        console.log("动物都会吃东西");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(type, age) {
        var _this = _super.call(this, age) //如果使用了继承,就要使用super调用父类的方法
         || this;
        _this.type = type;
        return _this;
    }
    Dog.prototype.eat = function () {
        console.log("泰迪吃东西");
    };
    return Dog;
}(Animal));
var dog = new Dog('泰迪', 18);
