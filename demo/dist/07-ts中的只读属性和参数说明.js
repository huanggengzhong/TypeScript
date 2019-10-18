"use strict";
/*
class Cat {
    type: string
    constructor(type: string) {
        this.type = type
    }
}
var cat = new Cat("加菲")
*/
//上面简写
var Cat = /** @class */ (function () {
    function Cat(type) {
        this.type = type;
    }
    return Cat;
}());
var cat = new Cat("加菲");
cat.type; //可以访问
//也就是参数前面加一个public就等于写了type:string和this.type=type这两行代码
