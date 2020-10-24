<template>
    <div>
        <p v-once>{{msg}}</p>
        <button @click="changemsgHandler">点击修改</button>
        <div>
            <ul>
                <li v-for="(name,index) in names" :key="index">{{name}}</li>
            </ul>
            <button @click="pushHanderl">添加</button>
            <button @click="popHanderl">删除</button>
        </div>
        <div>
            <p :class="{activite:isactivite}">这是一个文档信息</p>
            <p :class="[activeclass]">这是一数组</p>
            <p :class="[isactivite ? 'flag' : '']">这是一个数组三元运算符</p>
            <p :class="[{activite:isactivite},isactivite ? 'flag' : '',activeclass]">数组嵌套对象</p>
        </div>
        <div>
            <p :style="{color:iscolor,fontSize:fontSize+'px'}">这是一个内联绑定</p>
        </div>
        <div>
            <input type="text" v-model.lazy="classa">
            <!-- lazy限制实时获取数据，按下回车才可生效 -->
            <p>{{classa}}</p>
            <button @click="getclassa">获取值</button>
        </div>
        
    </div>
    
</template>
<script>
export default {
    name:"Vuedomel",
    data() {
        return {
            classa:"",
            msg:"小陈",
            names:["小陈","小狗","马克思"],
            isactivite:true,
            activeclass:"activite",
            iscolor:"blue",
            fontSize:20,
            str:"a b c d"
        }
    },
    methods: {
        changemsgHandler(e){
            this.msg = "德莱文";
        },
        pushHanderl(){
            console.log("成功"),
            this.names.push("狮子狗");
            // 添加
        },
        popHanderl(){
            console.log("可以"),
            this.names.pop();
            // 删除
        },
        getclassa(){
            console.log(this.classa);
        }
    },
    computed: {
         quchongStr(){
            //  去重函数
            this.str = this.st.match(/\S+/g);
            this.str.sort();
            for (var i = this.str.length - 1;i > 0;i--){
                if(this.str[i] == this.str[i - 1]){
                    this.str.splice(i,1);
                }
                }
                return this.str.join("");
            }
    },
    // 监听器
    watch:{
        classa(value){
            if(value == "520"){
                console.log("我爱你");
            }else{
                console.log(value);
            }
            
        }
    }
};
</script>

<style lang="">

.activite{
    color:red;
}
</style>