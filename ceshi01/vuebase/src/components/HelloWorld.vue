<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ 10 > 20 ? '你好啊' : "呵呵我也会" }}</h1>
    <div v-html="lop"></div>
    <div v-if="ispol">
      <p>我就是我不一样的烟火</p>
    </div>
    <div :class="isActive">绑定</div>
    <div v-show="ispol">
      <p>我就是我不一样的烟火</p>
    </div>
    <div v-for="(name,index) in names" :key="index">{{name}}</div>
    <div v-for="user in users" :key="user.index">{{user.id}}--{{user.name}}--{{user.gender}}--{{user.address}}</div>
    <div>
    <button @click="count+=1">按钮</button>
    <p>您点击了{{count}}次</p>
    <button @click="clickHanderl">事件处理函数</button>
    </div>
    <div>
      <p>{{msgp}}</p>
      <button @click="changemsgp">点击修改</button>
    </div>
    <!-- 分割线**************************** -->
    <div>
      <button @click="sendmsg('的开的开的凯文',$event)">点击传值</button>
    </div>
    <div>
      <ul>
      <li @click="getName(name)" v-for="(name,index) in names" :key="index">{{name}}</li>
      <!-- 通过绑定函数进行传值 -->
      </ul>
    </div>
    <a @click.prevent="iwenoo" href="http://iwenwiki.com">哈哈</a>
    <!-- .prevent阻止默认事件的发生****.stop阻止冒泡事件发生冒泡即子控件触发父控件的绑定事件 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      count:0,
      msg: 'Hello Vue.js',
      msgp:"仓央嘉措",
      lop:"<h2>你好呀我的朋友</h2>",
      ispol:false,
      isActive:"active",
      names:["小陈","小刘","小马"],
      users:
      [{
        "id":1,"name":"小刘","gender":"女","address":"渭南"
      },
      { "id":2,"name":"小黄","gender":"男","address":"西安"}
      ]
    }
  },
  methods: {
    clickHanderl(event){
      // console.log(event);
      this.count+=10;
    },
    changemsgp(event){
      // 修改数据之后视图重绘了
      this.msgp= "纳兰信德";
    },
    sendmsg(data,e){
      console.log(data);
      console.log(e);
    },
    getName(data){
      console.log(data);
    },
    iwenoo(){
      console.log("iwen");
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
