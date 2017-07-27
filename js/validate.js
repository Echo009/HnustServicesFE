/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 07/26/2017 06:21 PM
 */
// 校验输入
function validateUserInfo(stuId,password) {
    var passwordPattern = new RegExp("^\w+$");

    if(!/^\d{10}$/.test(stuId)){
        return false;
    }else if(!/^\w+$/.test(password)){
        return false;
    }
    return true;
}