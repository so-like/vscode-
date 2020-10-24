// const是声明常量的，一旦声明则无法更改
// a.没有变量提升
// b.有块级作用域
// c.不能重复声明
// d.不能重复赋值(声明必须初始化)

// 不能重复赋值
// const a = 5;
// a = 6;
// console.log(a);//报错常变量赋值

// 没有变量提升
// console.log(b);
// const b = 5;

for(const i=0;i<5;i++){

}
console.log(i);