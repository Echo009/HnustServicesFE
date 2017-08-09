/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 07/26/2017 02:32 PM
 */

// user module

$.ajaxSetup({
    type: "POST",
    async: false,
    crossDomain: true,
    datatype: "json",
    xhrFields: {
        withCredentials: true
    }
});
// doLogin()
// Successful ResponseText :
// {status: 0, msg: "Login successfully !"}
// Unsuccessful ResponseText :
// {status: 3, msg: "incorrect stuId or password"}
function doLogin(_stuId, _password) {
    return $.post("http://echo0.cn:8080/HnustServices/user/login.do",
    // return $.post("http://localhost:8080/HnustServices/user/login.do",
        {
            stuId: _stuId,
            password: _password
        }
    ).responseText;
}
// doLogout
// Sucessful ResponseText :
// {"status":0,"msg":"Logout successfully !"}
// Unsuccessful ResponseText :
// {"status":1,"msg":"error"}
function doLogout() {
    return $.get("http://echo0.cn:8080/HnustServices/user/logout.do").responseText;
    // return $.get("http://localhost:8080/HnustServices/user/logout.do").responseText;
}