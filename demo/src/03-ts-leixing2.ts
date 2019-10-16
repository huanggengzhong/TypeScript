//object类型
let obj:object={};
let obj2:object=[];

//对象类型

let o:{name:string,age:number}={name:'小明',age:18}

//枚举类型
enum Gender{
    male=1,
    female=0,
    unknow=2
}
let gender:Gender=Gender.male//这样就得到了1
//用对象也可以获取
let o2={
    gender:Gender.male//这样就得到了1
}

//类型断言
let str1:any="abc" 
let len:number=(<string>str1).length;//指定了str1必须是字符串
