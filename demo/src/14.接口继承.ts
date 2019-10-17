//接口继承接口(支持多继承)

interface TwoDPoint{
    x:number,
    y:number
}


interface ThreeDPoint {
    z:number
}
interface FourDPoint extends ThreeDPoint,TwoDPoint{
    time:Date
}


let poi3:FourDPoint={
    x:100,
    y:200,
    z:300,
    time:new Date()
}
//------------------
//接口继承类
class Bird{
    type:string="画眉鸟",
    fly():void{

    }
}

interface Fly extends Bird{

}

let f2:Fly={
    type:"啄木鸟",
    fly():void{

    }
}
