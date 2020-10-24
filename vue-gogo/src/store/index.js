import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0,
        // 状态为0 将vuex的仓库抛出以被其他组件所访问
        userInfo:{
            name:"张三",
            job:["student","teacher","牧师"]
        }
        
    },
    mutations:{
        increment(state,n){
            console.log(n)
            state.count+=n.num
        },
        decrement(state,n){
            state.count-=n.num
        }
    }
})
// 将store导出