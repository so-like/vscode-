//导包导入所需要的fs包和path包
var path = require("path");
var fs = require("fs");
// 用path中得join方法来表示01.txt的绝对路径
var y = path.join(__dirname,"etc","01.txt");
fs.readFile(y,function(err,data){
    if(!err){
        console.log(data.toString());
    }else{
        console.log(err);
    }
})

