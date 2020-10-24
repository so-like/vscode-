let name1 = "lol";
let age = 18;
let gender = "男";
let score = 100;

var obj ={
    name1,//name:name1键值对形式
    age,
    gender,
    score,
    fengshu:100,//可以给fengshu一个初始值 不然会报错，fengshu is a no define
    sayName(){
        console.log("你好xxx");
    }
}
console.log(obj);
obj.sayName()