// 导包
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const multer = require("multer");


// 首先引入一个模块，拼接一个我们自己写的js的绝对路径 需要用到path模块
const db = require(path.join(__dirname,'utils','db.js'));

const app = express();



// 创建一个文件夹用来存放英雄头像
var upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({extended:false}));

// 1.登录接口
app.post("/login",(req,res)=>{
    // 1.1接收前台传过来的参数分别用username和password来接收前台传过来的数据
    let {username,password} = req.body;
    // 1.2判断前台传过来的数据是否和数据库中相同
    if(username == "admin"&& password == "123456"){
        res.send({
            code:200,
            msg:"登录成功"
        });
    }else{
        res.send({
            code:404,
            msg:"登录失败了"
        });
    }

})


// 2.获取所有英雄接口
app.get("/getHero",(req,res)=>{
    let list = db.getHeros();
    res.send({
        code:200,
        data:list
    })

})


// 3.新增英雄
app.post("/add",upload.single('icon'),(req,res)=>{
    // 前台传的文本参数都在req.body中保存
    let {name,skill} = req.body;
    // 前台传的文件参数都在req.file中保存英雄头像icon在req.file.filename中保存
    let icon = req.file.filename;
    
    // result为返回值如果为true则成功否则失败 调用db的add方法然后给其传参
    const result = db.addHero({
        name,
        skill,
        icon
    });
    if(result){
        res.send("添加成功");
    }else{
        res.send("添加失败");
    }
})


// 4.删除英雄
app.get("/delete",(req,res)=>{
    let {id} = req.query;
    const result4 = db.deleHeroById(id);
    if(result4){
        res.send("删除成功");
    }else{
        res.send("删除失败");
    }
});


// 5.根据id获取英雄
app.get("/getHeroById",(req,res)=>{
    // 获取get方式传的id
    let {id} = req.query;
    const data5 = db.Heroinfo(id);
    res.send(data5);
});

// 6.编辑英雄
app.post("/edit",upload.single("icon"),(req,res)=>{
    // 获取前台传来的文本参数
    let {id,name,skill} = req.body;
    // 获取前台传来的文件
    let icon = req.file.filename;
    const result6 = db.updaHero({
        id,
        name,
        skill,
        icon
    });
    if(result6){
        res.send("修改成功");
    }else{
        res.send("修改失败");
    }

});


// 启动服务器
app.listen(4399,()=>{
    console.log("服务已经启动");
})