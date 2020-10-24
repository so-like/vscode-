// 引入第三方模块，新建一个文件夹，非中文npm init -y
//初始化后会有一个json文件里边是模块的基本配置信息
var Crawler = require("crawler");
var fs = require("fs");
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("title").text());
            fs.writeFile("./etc/01.txt",$("body").text(),(err)=>{
                if(!err){
                    console.log("爬取成功");
                }else{
                    console.log("失败");
                }
            })

        }
        done();
    }
});
 
c.queue('https://ncov.dxy.cn/ncovh5/view/pneumonia');