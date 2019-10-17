//参数规范
interface AjaxOptions{
    url:string,
    type:string,
    data?:object,
    success(data:object):void
}
//ajax函数
function ajax(options:AjaxOptions){

}

//调用
ajax({
    url:'http://www.baidu.com',
    type:'get',
    // data:{},//上面加了?这里就可以不用传
    success(data){

    }
})