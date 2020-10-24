<template>
    <div>
        我的年龄是{{count}}
       <button @click="incramentHanderl">点我加年龄</button>
       <p>{{title}}</p>
       <p>{{age}}</p>
       <div>
           <ul>
               <li v-for="(name,index) in names" :key="index">{{name}}</li>
           </ul>
       </div>
       <div>
           <p>{{title}}</p>
           <button @click="sendmsgHanderl">点击传值</button>
       </div>
       
    </div>
</template>

<script>
export default {
    name:"Mycomponent",
    //data必须是一个纯函数，而且要有返回值不然会报错，也就是return
    // data是一个纯函数就意味着每次调用data（）都会创建一个新的组件对象，所以各组件之间互相不影响
    data(){
        return{
            count:2,
            msg:"再见渭师院"
        }

    },
    // 读取props它是一个数组用来存放读到的信息
    // props:["title","age"],
    // 也可以限定从父组件传过来的值的类型
    // props:{
    //     title:String,
    //     age:Number

    // },
    props:{
        title:{
            type:String,
            // default是一个默认值，如果父组件没有传值那么久显示这个默认值
            default:"这是标题"
        },
        age:{
            type:Number,
            required:true,//required属性为必填项，如果不传则程序会报错
        
        },
        names:{
            type:Array,
            // 数组和对象的默认值必须是工厂带返回值类型，负责会出错
            default:function(){
                return []
            }
        }
    },
    methods: {
        incramentHanderl(){
            this.count += 1;
        },
        sendmsgHanderl(){
            // 参数一：事件名；
            // 参数二：传递的值
            this.$emit("myevent",this.msg);
        }
    }
}
</script>

<style scoped="">
    /* scoped 作用域 添加了此属性代表当前样式只能在当前组件中生效 */

</style>