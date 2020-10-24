// 导入express模块
const express = require('express')
// 创建一个服务器
const app = express()
//  设置返回给用户看得内容
app.get('/', function (req, res) {
    // 如果使用内置模块http来创建的话这里要用res.end()；
    // 如果使用express来写的话就要用res.send()
  res.send('Hello World')
})
 
// 启动服务器 端口号为4399
app.listen(4399,()=>{
    console.log("服务器开启了");
})