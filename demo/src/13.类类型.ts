interface PersonInterFace {
    name: string,
    age: number,
    eat(): void
}

class XiaoMing implements PersonInterFace {
    name: string = "小明";
    age: number = 18;
    eat() {
    }
}