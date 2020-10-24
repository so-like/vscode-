import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import home from '../components/home'
// 路由的配置文件放在index中
Vue.use(VueRouter)


export default new VueRouter({
    routes:[{
        path:"/",
        component:HelloWorld
      },
      {
        path:"/home",
        component:home
      },
      ]

})

// 简写之前
// // 定义路由
// const routes = [{
//     path:"/",
//     component:HelloWorld
//   },
//   {
//     path:"/home",
//     component:home
//   },
//   ]
  
//   //1创建路由对象
//   const router = new VueRouter({
//     routes
//   });

 