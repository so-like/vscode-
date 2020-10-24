// 创建一个接口的思想
// 接口：用户登录
// 接口地址：/food
// 接口方式：post
// 参数：无
// 返回：返回一条笑话

// 导包
const express = require("express");
// post传参用request.query是拿不到的，必须引入第三方模块body-parser
// 然后通过request.body来获取前台传来的参数
var bodyParser = require("body-parser");
// 创建一个服务器
const app = express();

// 表示app服务器使用这个包将传来的参数转换为urlencoded格式
app.use(bodyParser.urlencoded({extended:false}));
// 写接口
app.post("/food",(request,response)=>{

    // 返回数据
    console.log(request.body);
    // 拿到数据后判断与数据库的数据是否一致
    if(request.body.username == "admain" && request.body.password == "123456"){
        response.send({
            code:200,
            msg:"用户名密码正确登录成功"
        });
    }else{
        // response.send("错误");
        response.send({
            code:404,
            msg:"用户名密码错误登录失败"
        });
    }
})

// 启动服务器
app.listen(4399,()=>{
    console.log("服务器已经启动");
})