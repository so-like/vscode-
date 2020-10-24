var http = require("http");

var server = http.createServer(function(request,response){
    console.log("服务已经启动");
    response.setHeader("Content-Type","text/html;charset=utf-8");
    response.end("你好啊我的朋友");
})
server.listen(8087,()=>{
    console.log("服务已经启动");
})