class Car {
    constructor() {
        this.run()//可以使用,加了private后只能在当前类中使用
    }
    //加了private,就只能在当前类中使用
    protected run() {
        console.log("车跑");
    }
}
let byd = new Car()
byd.run() //不在当前类,不可以访问
class Audi extends Car {
    sayHi() {
       this.run() //可以使用
    }
}
let audi = new Audi()
audi.run()//不在当前子类,不可以使用