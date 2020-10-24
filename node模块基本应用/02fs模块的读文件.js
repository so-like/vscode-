// 导包
var fs = require("fs");
fs.readFile("D:/ceshi/ceshi.txt",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
})