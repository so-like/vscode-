// 1.使用内置模块http，导包
var http = require("http");

// 2.创建一个服务器
var server = http.createServer((request,response)=>{
    console.log("服务已经被调用");
    // 设置返回给客户端内容
    // 设值响应头防止中文乱码
    response.setHeader("Content-Type","text/html;charset=utf-8")
    response.end("我勒个去");
});

// 开启服务器,返回值就代表服务器
// 参数为端口
server.listen(8087,()=>{
    console.log("服务器开启了 端口8087");
})

