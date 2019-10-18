"use strict";
//object类型
var obj = {};
var obj2 = [];
//对象类型
var o = { name: '小明', age: 18 };
//枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
    Gender[Gender["unknow"] = 2] = "unknow";
})(Gender || (Gender = {}));
var gender = Gender.male; //这样就得到了1
//用对象也可以获取
var o2 = {
    gender: Gender.male //这样就得到了1
};
//类型断言
var str1 = "abc";
var len = str1.length; //指定了str1必须是字符串
