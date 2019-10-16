class Animal {
    age: number
    constructor(age: number) {
        this.age = age
    }
    eat() {
        console.log("动物都会吃东西");
    }
}

class Dog extends Animal {
    type: string
    constructor(type: string, age: number) {
        super(age)//如果使用了继承,就要使用super调用父类的方法
        this.type = type
    }
    eat() {//父类也有同样方法,子类会覆盖掉,最终调用的是子类方法
        console.log("泰迪吃东西");
    }
}

var dog = new Dog('泰迪',18)
