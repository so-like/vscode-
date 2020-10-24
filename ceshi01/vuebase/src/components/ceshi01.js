// var a = 5;
// console.log(a)
console.log("a ="+a);
a = 9;
var a= 8;
// var的提前声明 在所有代码执行前会将var定义的声明但不会赋值，直到执行到该语句才会执行

fun();
fun2();
function fun(){
    console.log("函数声明fun")
}
// 函数的声明提前 使用声明形式创建的函数会在所有代码执行之前就被创建，可以在函数声明前就调用
var fun2 = function(){
    console.log("函数表达式fun2")
}
