<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <!-- <componenta />
    <componentb/> -->
    <div>
      <!-- 内置组件 用来加载组件的标签 -->
      <keep-alive>
        <!-- 添加缓存效果，再次切回页面时不会再次加载页面 -->
      <component :is="currentcomponent"></component>
      </keep-alive>
      
      <button @click="changecomponent">点击切换</button>
      
    </div>
     <componentlife/>
     <animacte />
     <input v-focus>
     <p v-red>我是局部变量</p>
     <p>{{20 | RMB}}</p>
     //管道符号前为value，管道符号后为要过滤的内容
     <p>{{30 | DOL | RMB}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import componenta from './components/components/componenta'
import componentb from './components/components/componentb'
import componentlife from './components/componentlife'
import animacte from './components/animacte'

export default {
  name: 'App',
  components: {
    HelloWorld,
    componenta,
    componentb,
    componentlife,
    animacte
  },
  data(){
    return{
      currentcomponent:componenta
    }
  },
  methods: {
    changecomponent(){
      if(this.currentcomponent == componentlife){
        this.currentcomponent = componentb
      }else{
        this.currentcomponent = componentlife
      }
    },
  },
  // 局部指令
  directives:{
    red:{
      inserted(el){
        el.style.color = "red";
      } 
      },
      blue:{
        inserted(el){
          el.style.color = "blue";
        }
      },

  },
  //局部过滤器
  filters:{
    DOL:function(value){
      if(value){
        return "$"+ value;
      }else{
        return value;
      }

    }
  }
 

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
