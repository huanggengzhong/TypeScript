"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = 10; //不报错:age直接初始化.
        this.name = name;
    }
    Person.prototype.sayHello = function (msg) {
        console.log(msg);
    };
    return Person;
}());
