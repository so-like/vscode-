// 导入三个包
var http = require("http");
var fs = require("fs");
var path = require("path");


var server = http.createServer((request,response)=>{
    // 读文件拼接文件的绝对路径
    var y = path.join(__dirname,'etc','index.html');
    // 读文件内容

    // 这里为什么不设置请求头，因为在html页面里已经设置过charset=utf-8了所以不用再设置了
    fs.readFile(y,"utf-8",(err,data)=>{
        if(!err){
            // 如果没有错则返回给用户
           response.end(data);
        }else{
           response.end('404');
        }
    })

})
// 启动服务
server.listen(8087,()=>{
    console.log("服务启动成功");
})
