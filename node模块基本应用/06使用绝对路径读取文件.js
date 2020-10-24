var fs = require("fs");
// 使用绝对路径，避免一些不必要的麻烦
// __dirname为文件夹的绝对路径
fs.readFile(__dirname+"/etc/01.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
})