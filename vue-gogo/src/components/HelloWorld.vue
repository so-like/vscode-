<template>
  <div class="hello">
  <!-- {{this.$store.state.count}} -->
  {{getStore}}
  <ul>
    <li v-for="(item,index) in userInfo.job " :key="index">{{item}}</li>
  </ul>
  <!-- //通过调用方法来显示仓库store中的state状态为count -->
  {{this.$hello}}
  <input type="text" v-model="num">
  <button @click="addHandler">增加</button>
  <button @click="jsHandler">减少</button>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      num:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(["count","userInfo"]),
      getStore(){
        return this.$store.state.count;
      }
    },
  methods: {
    addHandler(){
      // this.$store.commit("increment",Number(this.num))
      // 可以将其封装成一个对象形式
      this.$store.commit({
        type:"increment",
        num:Number(this.num)
      })

      // Number将（this.num）字符串类型转换为数字类型
    },
    jsHandler(){
      this.$store.commit("decrement",Number(this.num))
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
