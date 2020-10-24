// var 
// a.有变量提升
// b.没有块级作用域
// c.可以重复声明
// d.可以重新赋值

// let
// a.没有变量提升
// b.有块级作用域
// c.不可重复声明
// d.可以重新赋值

// console.log(a);
// var a = 10; 

// 如果换成let那么它的作用域只会在大框号内有效
// for(let a=0;a<10;a++){
// }
// console.log(a);//报错

// var a= 10;
// var a= 20;
// console.log(a);//不报错

// let a = 10;
// let a = 23;//报错已经声明 不能重复声明
// console.log(a);//报错

let b = 5;
b = 8;  //可以进行重新赋值
console.log(b);