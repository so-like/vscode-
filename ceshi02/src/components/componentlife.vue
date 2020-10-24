<template>
    <div>
        componentlife{{msg}}
        <button @click="changemsg">点击渲染</button>
    </div>
</template>

<script>
export default {
    name:"componentlife",
    data(){
        return{
            msg:"hello"
        }

    },
    methods: {
        changemsg(){
            this.msg = "修改后";
        }
    },
   //创建前
    beforeCreate() {
        console.log("调用了beforeCreate");
    },
    // 创建
    created() {
        console.log("调用了Create");
    },
    // 渲染之前
    beforeMount() {
        console.log("调用了beforeMount");
    },
    // 渲染
    mounted() {
        console.log("调用了Mount");
    },
    // 修改数据前
    beforeUpdate() {
        console.log("调用了beforeUpdate");
    },
    // 修改数据后
    updated() {
        console.log("调用了updated");
    },
    // 销毁前
    beforeDestroy() {
        console.log("调用了beforeDestroy");
    },
    // 销毁后
    destroyed() {
        console.log("调用了destroyed(");
    },
    //激活时调用keep-live存在时激活
    //以下两个不是生命周期函数显示和隐藏调用
    activated() {
        console.log("调用了activated(");
    },
    deactivated() {
        console.log("调用了deactivated(");
    },
}
</script>
<style lang="">
    
</style>