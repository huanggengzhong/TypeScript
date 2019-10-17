interface Point{
    readonly x:number,
     y:number,
     [propName:string]:any//接口额外属性,就是告知接口规范:我可能有别的其它属性和值,请忽略掉
 }

 let poi2:Point={
     x:100,
     y:200,
     z:300 //额外的属性和值
 }