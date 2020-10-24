// 后端路由
const express = require("express");

const app = express();

// 1.注册接口
// 接口和接口要做的事一一对应这就叫做路由
app.post("/register",(req,res)=>{
    // 注册相关逻辑
    res.send("注册成功")
});

// 2.登录接口
app.post("/login",(req,res)=>{
    // 登录相关逻辑
    res.send("登录成功")
});

// 3.获取英雄接口
app.get("/getname",(req,res)=>{
    res.send(req.query.heroname);
});

app.listen(4399,()=>{
    console.log("服务器已经启动");
})