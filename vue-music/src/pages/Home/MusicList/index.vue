<template>
    <div>
        <MusicListView :songlist="song_list"/>
    </div>
</template>

<script>
// 引用musiclistview视图
import MusicListView from "../MusicListView"
export default {
    name:"MusicList",
    data(){
        return{
            song_list:[]

        }
    },
    components:{
        MusicListView
    },
   mounted(){
    //    往刚定义的getmusiclist函数中传递参数
       this.$aip.getMusicList({
           method:"baidu.ting.billboard.billList",
           type:1,
           size:6,
           offset:0
        //    请求参数
       }).then(res =>{
           this.song_list = res.data.song_list
       })

   }
   
}
</script>