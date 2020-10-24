// 将数组中的每一个元素的值依次赋值给变量
var arr = [1,2,3,4];

// Es5中语法
// var a= arr[0];
// var b= arr[1];
// var c= arr[2];
// var d= arr[3];
// console.log(a,b,c,d);

// Es6中语法
// var [a,b,c,d] = arr;
// console.log(a,b,c,d);

// var [a,b,c,d,e] = arr;
// console.log(a,b,c,d,e);//1234undefine

// 可以给个默认值 数组是有顺序的
// var [a,b,c,d,e=60] = arr;
// console.log(a,b,c,d,e);

