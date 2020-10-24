// post是在请求体中发的，相对而言比较大
// post传递参数时候会将参数分隔成一小块一小块来传 
// 接收参数的时候也是用一个容器来接收（一小块一小块来接收）
// 通过的是response.data方法来接收参数，最后通过querystring.parse()方法来拼接字符串
// post主要用于提交或者发表而get主要用于获取

// 导包
var http = require("http");
const querystring = require("querystring");
var server = http.createServer((request,response)=>{
    // request请求对象中拿不到post请求发送的参数 所以要一小块一小块拿
    // 接收参数首先得有一个容器,定义一个空容器
    let rq = "";
    // 再者要有一个request.data事件
    request.on("data",(chunk)=>{
        // chunk为一小块一小块的参数，将它接收后添加到容器里
        // 具体chunk有几个要看服务器将它分为几小块
        rq += chunk;
    })
    // 然后给request对象一个end事件
    // end事件表示数据做完了
    request.on("end",()=>{
        // 打印容器中的数据
        console.log(rq);
        // 拿到数据后要解析拿到的参数
        //将字符串转换为对象
        var y = querystring.parse(rq)
        console.log(y);

        //拿到参数对象后我们就可以去数据库中查看用户名和密码是否正确
        // 返回给前台页面
    })

    console.log(request.url);
    response.end("返回的内容");
});

server.listen(4399,()=>{
    console.log("服务已经开启");
})