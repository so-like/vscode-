import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/pages/Mine'
import Home from '@/pages/Home'
import Book from '@/pages/Book'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      //home为默认页面
      component: Home
    },
    {
      path:'/book/:name',
      component: Book
    },
    {
      path:'/mine',
      component: Mine
    }


  ]
})
