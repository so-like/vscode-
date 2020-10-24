<template>
    <div>
        {{this.$store.state.count = 100}}
        <!-- 不允许通过这种发哪个是来修改store中state的值后边会限制使用此类方法修改state的值 -->
        {{this.$hello = "word"}}
    </div>
</template>