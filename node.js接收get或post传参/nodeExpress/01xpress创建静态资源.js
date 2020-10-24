// 导包
const express = require("express");

// 创建一个服务器
const app = express();

// 使etc文件下的所有js，html，以及图片都对外开放外部可以访问了
app.use(express.static('etc'));

// 启动服务器
app.listen(8087,()=>{
    console.log("服务器启动了");
})