// get传参参数直接跟在url后边
// post传参参数是集中传参



// 搭建后台服务器
var fs = require("fs");
var path = require("path");
var http = require("http");
var url = require("url");


var server = http.createServer((request,response)=>{
    var p = path.join(__dirname,'wen',request.url);
    // request为请求对象
    console.log(request.url);
    fs.readFile(p,(err,data)=>{
        if(!err){
            // 必要时可以在响应这里设置响应头防止中文乱码
            // response.setHeader("Content-Type","text/html;charset=utf-8");
            
            response.end(data);
        }else{
            let obj = url.parse(request.url,true);
            console.log(obj);
            response.end("404");
        }
    })
})
server.listen(4399,()=>{
    console.log("服务器已经启动");
})