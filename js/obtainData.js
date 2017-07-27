/**
 * Author : Ech0
 * Email  : ech0.extreme@foxmail.com
 * Time   : 07/26/2017 02:57 PM
 */
//obtain data from server
//successful responseText
// {
//     "status": 0,
//     "data": {
//     "studentId": "***",
//         "stuName": "***",
//         "gradeList": [
//         {
//             "semester": "2014-2015-1",
//             "courseName": "***",
//             "grade": "***",
//             "courseNature": "***",
//             "courseCategory": "***",
//             "credit": "***"
//         }]
//     }
// }
//unsuccessful responseText :
//{"status":1,"msg":"need to do login !"}
function getAllGrades() {
    return $.post("http://echo0.cn:8080/HnustServices/services/getAllGrades").responseText;
}