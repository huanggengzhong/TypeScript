//number
let b:number=NaN;
let c:number=Infinity;
let a:number=10;
let d:number=0xA12;
let e:number=0b1010101;
let f:number=0o75;

//string
let str:string="abc";//双引号
let str2:string='abc'//单引号
let str3:string=`abc${a}`;//模板字符串

//boolean
let flag:boolean =true;
let flag2:boolean =false;

// array
let arr:number[]=[1,2,3]//简单写法
let arr2:Array<string>=['a','b','c']//泛型写法

//tuple元组
let tuple1:[string,number]=['a',1];
tuple1[0]='b'

//void 空值类型
let res:void =undefined;

//undefined类型
let res2:undefined=undefined;

//null类型
let res3:null=null;