<template>
    <div>
        我是测试domel
        <slot></slot>
        <slot name="footer"></slot>
        <!-- 用于指定父组件传给子组件的名称 -->
        <slot name="dataSlot" :currentData="currentData"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg1:"子组件中编译啊",
            currentData:"我是准备好的数据"
        }
    }
}
</script>

<style lang="">
    
</style>