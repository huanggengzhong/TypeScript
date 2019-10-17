interface Point{
   readonly x:number,
    y:number
}

let poi:Point={
    x:100,
    y:200
}
// poi.x=110 错误,上面加了readonly就不可以重新赋值