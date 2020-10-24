const express = require("express");//express表达
const router = express.Router();//koa 2 和express出自同一团队之手

router.get("/list",function(req,res){
    res.send([
        {
        name:"iwen",
        age:20
        },
        {
        name:"ime",
        age:200
        }
    ])
})

module.exports = router;
