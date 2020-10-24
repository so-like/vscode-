//对象展开符...
// 对象展开

// 声明一个对象
let chinese = {
    pifu:"黄色",
    hair:"黑色",
    sayHi(){
        console.log("你好,你吃了吗");
    }
}

// 声明一个对象
let diannao = {
    sing:"游戏",
    play:"玩",
    sayHi(){
        console.log("你好");
    }
}

// 声明一个对象
let rengong = {
    ...chinese,
    ...diannao,
    gender:"男",
    hair:"白色", //打印结果为白色 如果写到...chinese前边就为黑色
    sayHi(){
        console.log("最后一个函数");
    }
}
console.log(rengong.sayHi());