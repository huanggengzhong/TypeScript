/* 
class People{
   name:string='' 
}
var p=new People()
p.name="我是很长的名字" 

*/
//存取器的使用

class People{
    _name:string=''
    get name(){
        return this._name
    }
    set name(value:string){
        //这里可以做限制
        if(value.length<2 || value.length>5){
            throw new Error("名字不合法")
        }
    }
}

var p =new People()

p._name="我是很长的名字"