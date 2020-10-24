// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './plugins/element'

//使用封装的api接口引入api
import api from "./api"
Vue.prototype.$api = api;


// import axios from './utils/http'

// import axios from "axios"
// import qs from "querystring"
// //全局配置
// Vue.prototype.$axios = axios;

// Vue.prototype.$host = '/api'

// //配置全局网络地址
// // axios.defaults.baseURL = "http://iwenwiki.com"
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// //添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     if(config.method == 'post'){
//       config.data = qs.stringify(config.data);
//       // 将对象格式的data转换为数组形式
//     }
//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });

// // 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });

// // 全部引入elementui
// // import ElementUI from 'element-ui';
// // import 'element-ui/lib/theme-chalk/index.css';
// // 引入button按钮
// // import { Button} from 'element-ui';

Vue.config.productionTip = false;
//使用elementui
// Vue.use(ElementUI);
// Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
