import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home/home"
import Search from "@/pages/Search/search"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path:"/search",
      name:"Search",
      component:Search
    }
  ]
})
