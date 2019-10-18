"use strict";
/*
class People{
   name:string=''
}
var p=new People()
p.name="我是很长的名字"

*/
//存取器的使用
var People = /** @class */ (function () {
    function People() {
        this._name = '';
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            //这里可以做限制
            if (value.length < 2 || value.length > 5) {
                throw new Error("名字不合法");
            }
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var p = new People();
p._name = "我是很长的名字";
