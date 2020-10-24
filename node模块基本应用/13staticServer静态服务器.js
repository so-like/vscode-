var fs = require("fs");
var path = require("path");
var http = require("http");

var server = http.createServer((request,response)=>{
    // 设置拼接请求路径
    // request.url为请求地址
    var p = path.join(__dirname,"etc",request.url);
    // 服务器它有嗅探功能看到请求地址后缀为.png时它就知道是二进制文件类型
    fs.readFile(p,(err,data)=>{
        if(!err){
            response.end(data);
        }else{
            response.end("404");
        }
    })
});
server.listen(4399,()=>{
    console.log("服务已经启动");
});
