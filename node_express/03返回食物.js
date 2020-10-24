// 导包
const express = require("express");

const app = express();

// 实现接口
app.get("/getfood",(request,response)=>{
    // 设置一个请求头
    response.setHeader("Content-Type","text/json");
    response.send(`
        "foodname":"红烧肉",
        'price':50,
        "description":"很好吃"
        `
        );
})
    



// 启动服务器
app.listen(4399,()=>{
    console.log("服务器已经启动");

})

