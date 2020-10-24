const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

// 创建服务器
const app = express();

// 使用模块multer来创建一个名为upload的文件夹
var upload = multer({ dest: 'uploads/' })

// 告诉服务器可以使用res.body来接收参数
app.use(bodyParser.urlencoded({extended:false}));
// 接口
// 传过来的参数名用usericon，传过来的文本则用req.body来保存
app.post("/wenjian",upload.single("usericon"),(req,res,next)=>{
    console.log(req.file);//获取文件
    console.log(req.body);//获取文本
    res.send("sb")
})

app.listen(4399,()=>{
    console.log("服务已经启动");
})