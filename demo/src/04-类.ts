class Person{
    name:string//不报错:ts要提前声明类型,和es6不同.
    age:number=10//不报错:age直接初始化.
    constructor(name:string,age:number){
        this.name=name; 
    }
    sayHello(msg:string):void{
        console.log(msg);
        
    }
    
}