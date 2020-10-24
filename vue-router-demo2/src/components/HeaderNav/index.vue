<template>
    <div>
        <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link :to="'/book/'+ bookName">书籍</router-link></li>
        <li><router-link to="/mine">我的</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HeaderNav",
    data(){
        return{
            bookName:"贝加尔湖"
        }
    }
}
</script>
<style scoped>
    ul{
        overflow: hidden;
        clear: both;
    }
    ul li{
        float: left;
        list-style: none;
        text-align: center;
        margin: 0 20px;
    }


</style>