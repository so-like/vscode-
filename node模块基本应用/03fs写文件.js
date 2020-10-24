// 导包
var fs = require("fs");
// fs.writeFile有三个参数
// 1.要写的文件路径，如果没有则重新创建(没有文件夹会报错，没有文件会自动生成)
// 2.data要写的文件内容
// 3.回调函数(三个参数1.错误信息 2.所写的字节长度 3所写的内容)
var data = `
  有约不来过夜半，闲敲棋子落灯花。
`;
fs.writeFile("D:/ceshi/shi.txt",data,function(err,written,string){
    if(err){
        console.log(err);
    }else{
        console.log("写入成功");
    }
})