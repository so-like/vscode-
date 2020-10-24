import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Header from '@/components/Header'
import Home from '@/components/Home'



Vue.use(Router)

export default new Router({
  routes: [
    {
      // 主页面进去为helloword
      path: '/',
      redirect:'/index'
      // 重定向到index页面中
    },
    {
      // 设置地址来渲染Header和Home这两个页面
      path:'/index',
      name:'index',
      components: {
        Header:Header,
        Home:Home
      }
    },
  ] 
})
