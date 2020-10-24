const express = require("express");
const bodyParser = require("body-parser")

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.post("/login",(req,res)=>{
    console.log(req.body.age);
    res.send("sb")
})

app.listen(8087,()=>{
    console.log("服务已经启动");
})