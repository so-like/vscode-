// Node.js中相对路径相对的是运行这个文件得小黑框的路径而言的
var fs = require("fs");
// 在fs.readFile的第二个参数中加入utf-8或者在输出的data后跟一个tostring（）可将二进制文件转换为可读文件
fs.readFile(".//etc//01.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})