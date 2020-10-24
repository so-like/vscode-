// 导包
const express = require("express");

// 用express创建一个服务器
const app = express();

// 创建一个接口
app.get("/getName",(req,res)=>{
    console.log(req.query.username);
    let heroname = '';
    switch (req.query.heroname){
        case "盖伦":
            heroname = "德玛西亚之力";
            break;
        case "提莫":
            heroname = "迅捷斥候";
            break;
        default:
            heroname = "您的输入有误";
            break;
    }
    res.send(heroname)
})

app.listen(4399,()=>{
    console.log("服务已经开启");
})