/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 08/08/2017 07:27 PM
 */
Array.prototype.unique= function () { // 去除数组中重复对象
    var temp = [];
    var json = {} ;
    for(var i = 0 ,len = this.length; i< len;i++){
        if(!json[this[i]]){
            temp.push(this[i]);
            json[this[i]]= 1 ;
        }
    }
    return temp ;
}