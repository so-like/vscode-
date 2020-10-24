// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import 'es6-promise/auto'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state:{
//     count:0
//   }
// })


Vue.config.productionTip = false
Vue.prototype.$hello = "hello"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 通过此种方式对store进行注册
  components: { App },
  template: '<App/>'
})
