// 导包
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
// 创建一个文件夹用来存放英雄头像
var upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({extended:false}));

// 1.登录接口
app.post("/register",(req,res)=>{
    
    res.send("登录成功")

})


// 2.获取英雄接口
app.get("/getHero",upload.single("/etc"),(req,res)=>{
    
    res.send("sb")

})


// 3.新增英雄
app.post("/add",(req,res)=>{
    
    res.send("sb")

})


// 4.删除英雄
app.get("/delete",(req,res)=>{

    res.send("sb")

});


// 5.根据id获取英雄
app.get("/getHeroById",(req,res)=>{

    res.send("sb")

});

// 6.编辑英雄
app.post("edit","这里有东西",(req,res)=>{

    res.send("sb");

});


// 启动服务器
app.listen(4399,()=>{
    console.log("服务已经启动");
})