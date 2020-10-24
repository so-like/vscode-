// 导包
var fs = require("fs");
var path = require("path");
var http = require("http");

// 创建一个静态服务器
var server = http.createServer((request,response)=>{
    //读取页面，首先拼接前台传过来的地址
    var p = path.join(__dirname,'etc',request.url);
    //读取页面 因为有图片请求所以不能设置"utf-8",不然图片会下载
    fs.readFile(p,(err,data)=>{
        // 在这里不用设置响应头因为html页面有
        // response.setHeader("Content-Type","text/html;charset=utf-8");
        if(!err){
            response.end(data);
        }else{
            response.end("404");
        }
    })
});

// 页面上的所有外部资源包括图片，js，css文件等等都要向服务器发送请求来获取
server.listen(8087,()=>{
    console.log("服务器运行");
})
