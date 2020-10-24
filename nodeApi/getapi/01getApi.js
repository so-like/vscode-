// 创建一个接口的思想
// 接口：获取一条笑话
// 接口地址：/joker
// 接口方式：get
// 参数：无
// 返回：返回一条笑话

// 导包
const express = require("express");
const { response } = require("express");
// 创建一个服务器
const app = express();

// 写接口
app.get("/joker",(request,response)=>{
    // 准备笑话 实际开发中笑话们都是从数据库中拿到的或者从其他数据源
    let arr = ['耗子尾汁','健身房连死经','不要搞窝里斗'];
    let index = Math.floor(Math.random()*3);//index值为0/1/2
    // 返回数据
    response.send(arr[index])
})

// 启动服务器
app.listen(4399,()=>{
    console.log("服务器已经启动");
})