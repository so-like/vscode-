<template>
    <div>
        <button @click="changeHanderl">点击隐藏</button>
        <transition name="fade">
            <p v-if="isFlag">hello</p>
        </transition>

        <transition 
            name="custom-classes-transition"
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
        >//引入第三方库
            <p v-if="isFlag">hello</p>
        </transition>
        
    </div>
</template>

<script>
export default {
    name:"aimacte",
    data(){
        return{
        isFlag:false,
        //data处要用冒号而不是等号

        }
    },
    methods: {
        changeHanderl(){
            this.isFlag = !this.isFlag;
        }
    },
}
</script>

<style scoped>

/* .fade-enter,.fade-leave-to{//进入或离开
    opacity: 0;
}
.fade-enter-active,.fade-leave-active{//进入或出来过程
    transition: opacity .5s;
}
.fade-enter-to,.fade-leave{//进入结束离开
    opacity: 1;
} */





</style>