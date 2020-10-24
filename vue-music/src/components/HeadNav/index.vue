<template>
    <div>
        <ul class="top-nav">
            <li>
                <router-link exact to="/">主页</router-link>
            </li>
            <li>
                <router-link to="/songlist">歌单</router-link>
            </li>
             <li>
                <router-link to="/artists">歌手</router-link>
            </li>
            <li>
                <router-link to="/top">榜单</router-link>
            </li>
             <li>
                <router-link to="/search">搜索页面</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    

}
</script>



<style scoped lang='less'>
/* 必须引入less依赖包此处才可生效，因为他是用less语法编写的 */
// lang为指定语法
.top-nav{
    display:flex;
    background:#fff;
    li{
        flex:1;
        text-align:center;
        padding-top:10px;
        a{
            display:block;
            padding-bottom:8px;
        }
        .active{
            border-bottom-style: solid;
            border-bottom-width: 8px;
            border-bottom-color: red;
        }
    }
}

   
</style>