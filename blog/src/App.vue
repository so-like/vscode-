<template>
  <div id="app">
    <router-view name="Header"/>
    <router-view name="Home" class="site-content"/>
    <!-- 通过路由来渲染页面 -->
  </div>
</template>

<script>
// 引入组件
import Home from './components/Home'
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    Home,
    Header
    // 注册组件
  }
}
</script>

<style scoped>
.site-content{
  padding-left: 3vw;
  padding-right: 3vw;
  max-width: 1080px;
}
@media only screen and(min-width: 1001px){
  .site-content{
    margin-left: 300px;
    padding-bottom: 3.33333em;
    padding-top: 3.33333em;
  }
}
@media only screen and(min-width: 801px)and(max-width: 1001px){
  .site-content{
    margin-left: 30vw;
    padding-bottom: 3.33333em;
    padding-top: 3.33333em;
  }
}
@media only screen and(max-width:800px){

}

</style>
