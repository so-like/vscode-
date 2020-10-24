// 封装axios
import axios from "axios"
import qs from "querystring"
//错误信息处理函数
const errorHandle = (status,other)=>{
    switch(status){
    case 400://服务器设置请求次数
        console.log("服务器请求限制");
        break;
    case 401:
        console.log("用户信息验证失败");
        break;
    case 403:
        console.log("请求被限制");
        break;
    case 404:
        console.log("客户端错误");
        break;
    default:
        console.log(other);
        break;

    }
    

}


const instance = axios.create({
    timeout:3000 //响应超时
})

instance.defaults.baseURL = ""//设置请求地址
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//设置请求头类型

// 拦截器
// 添加请求拦截器
instance.interceptors.request.use(config =>{
    // 在发送请求之前做些什么
    if(config.method == "post"){
        config.data = qs.stringify(config.data);
    }
    return config;
  }, error => Promise.reject(error));//reject为promise的错误返回 resove为成功返回

// 添加响应拦截器
instance.interceptors.response.use(
    response => response.status == 200 ? Promise.resolve(response) : Promise.reject(response),
    error => {
    // 对请求错误做些什么
    const { response } = error;
    if(response){
    errorHandle(response.status,response.data)
    return Promise.reject(response);
}else{
    //response没有响应，请求被中断
    console.log("请求被中断");
}
  }
  );

export default instance