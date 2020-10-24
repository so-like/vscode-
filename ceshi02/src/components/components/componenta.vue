<template>
    <div>
        componenta:{{msg}}
        <button @click="changemsg">点击切换数据</button>
    </div>
</template>

<script>
export default {
    name:"componenta",
    data(){
        return{
            msg:"我是a的数据"

        }
    },
    methods: {
        changemsg(){
            this.msg = "我是a的切换数据"
        }
    },
}
</script>

<style lang="">
    
</style>