<template>
  <div class="hello">
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">cd成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <el-alert
    title="成功提示的文案"
    type="success">
  </el-alert>

  </div>
</template>

<script>
// 引入axios
// import axios from "axios"

//引入sq
// import qs from "querystring"

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    // //get请求有参数1.放参数如同下面一样 2.直接放请求的地址
    // this.$axios.get("http://iwenwiki.com/api/music/list.php",{
    //   params:{
    //     type:1,
    //     count:10,
    //     offset:0
    //   }
    // })
    // .then(res => {
    //   console.log(res.data);
    // })

    // //post请求
    // this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php",{
    //   user_id:"iwen@qq.com",
    //   password:'iwen123',
    //   verification_code:"crfvw"
    // })
    // .then(res =>{
    //   console.log(res.data);
    // })
    // .catch(error =>{
    //   console.log(error);
    // })

    // const _this= this;
    // function chengpin(){
    //   return _this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php");
    // }

    // function banner(){
    //   return _this.$axios.get("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php");
    // }

    // //执行多个请求并发请求将其合并
    // this.$axios.all([chengpin(),banner()])
    // .then(this.$axios.spread(function(chengpin,banner){
    //   //基于两个网络请求都成功后才会执行
    //   console.log(chengpin.data);
    //   console.log(banner.data);
    // }))


    // this.$axios.get(this.$host + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    // .then(res =>{
    //   console.log(res.data);
    // }).catch(error =>{
    //   console.log(error);
    // }
    // )



    //可以通过向 axios 传递相关配置来创建请求
    // axios({
    // method: 'post',
    // url: '/api/blueberrypai/getIndexBanner.php'}).then(res =>{
    //   console.log(res.data);
    // });
    this.$api.getChengpin().then(res =>{
      console.log(res.data);
    })



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
