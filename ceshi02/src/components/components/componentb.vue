<template>
    <div>
        componentb:{{msg}}
        <button @click="changemsg">点击切换</button>
        <componentc/>
    </div>
</template>

<script>
const componentc = () => import("./componentc")
// 异步引入
// import componentc from './componentc'
export default {
    name:"componentb",
    data(){
        return{
            msg:"我是b的数据"

        }
    },
    components:{
        componentc

    },
    methods:{
        changemsg(){
            this.msg = "我是西楚霸王"
        }
    }
}
</script>

<style lang="">
    
</style>