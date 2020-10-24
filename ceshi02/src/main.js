// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './directives/index'

Vue.config.productionTip = false
// 启动时的提示信息false为不显示
Vue.prototype.$hello = "hello"//挂载全局常量不要修改因为其他地方不会响应
/* eslint-disable no-new */

//过滤器
Vue.filter("RMB",function(value){
  if(value){
    return "￥"+value}
    else{
      return value;
    }
  })


new Vue({
  el: '#app',//绑定根元素相当于document.getElementById()
  data:{
    count:8
  },//所有组件都能读到这个count元素
  components: { App },//加载组件
  template: '<App/>'//展示模块
})
