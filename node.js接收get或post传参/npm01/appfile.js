// 用来爬取网站上的文件以及图片
var Crawler = require("crawler");
var fs = require('fs');
 
var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            console.log("爬取成功");
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});
 

// 爬取下厨房网站中的一个图片
// 网站的反爬机制
// 看你发送请求的是不是服务器端，如果是服务器端就不给你数据
// 我们的node.js是服务器端所以就不能给你数据
// 解决办法 伪装 将我们的请求伪装成浏览器端的请求
c.queue({
    uri:"https://i2.chuimg.com/4e8686f04f944e3d8507e430959b4a5b_1008w_756h.jpg?imageView2/2/w/660/interlace/1/q/90",
    filename:"./etc/yu.png",
    //让服务端伪装成客户端
    headers:{'User-Agent':'request'}

});