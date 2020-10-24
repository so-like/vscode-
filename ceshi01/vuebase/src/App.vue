<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <VueDomel /> -->
    <!-- 加载组件 -->
    <Mycomponent title="我是第一个组件" :age="age" :names="names" @myevent="getmyevent"/>

    <csdomel>
      <h2>我是来自父组件的插槽</h2>
      <h3>{{msg1}}</h3>
    </csdomel>

    <div>
      <h2>{{xsmsg}}</h2>
    </div>
    <!-- :age="xyz" 在data（）函数中为xyz设置一个新的值，就相当于age的一个实例就是这个新值 -->
    <template v-solt:footer>
      <div>
        <h2>我是通过指定插槽传给子组件的内容</h2>
      </div>
    </template>
    <!-- <template slot-scope:dataSlot="slotProps">
      
        <h2>{{slotProps.currentData}}</h2>
    </template> -->
   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import VueDomel from './components/VueDomel'
import Mycomponent from './components/Mycomponent'
import csdomel from './components/csdomel'
// 引入组件
export default {
  name: 'App',
  // data()必须是一个带返回值得纯函数
  data(){
    return{
      age:20,
      names:["xiao","sddd"],
      xsmsg:"",
      msg1:"父组件中编译啊"
    }
  },
  methods:{
    getmyevent(data){
      this.xsmsg = data;

    }

  },
  components: {
    HelloWorld,
    VueDomel,
    // 增加components注入组件
    Mycomponent,
    csdomel
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
