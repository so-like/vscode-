// 导入模块
var fs = require("fs");
// 第一个参数为要删除文件得路径 第二个参数为回调函数
fs.unlink("D:\\ceshi\\ceshi.txt",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("删除成功");
    }
    
})