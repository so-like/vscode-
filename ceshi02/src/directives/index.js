import Vue from "vue"

// 自定义指令
Vue.directive("focus",{
    //钩子函数自动触发当元素被插入时调用
    inserted:function(el){
      el.focus();
    }
  })