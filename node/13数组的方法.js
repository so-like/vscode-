// 数组的方法 


// 1.forEach()方法;(循环遍历数组)*****************************************************
var arr = [1,2,3,4];
// let max = -Infinity;
// arr.forEach(function(item,index){
//     console.log(arr[index]);
// })


// 箭头函数 forEach是没有返回值得
// var p = arr.forEach ((item,index)=>{
//     if(item>index){
//         max = item;
//     }
//     });
// console.log(max)
// console.log(p);


// 2.map方法 map也是遍历数组的 但它是有返回值得*****************************************************
// p相当于一个数组把map的返回值存在这个数组中
// var p = arr.map(function(item,index){
//     // item 为遍历出来的数组，index为遍历出来的索引
//     console.log(arr[index]);
//     return item * item;
// })
// console.log(p);



// 3.filter()过滤器（他有返回值返回值为过滤后的内容）***************************************************************
// var arr = [2,6,88,55,12,33,50,12,47,10];
// // 将其转换为箭头函数
// var o = arr.filter((item,index)=>{
//     // 将数组遍历
//     console.log(item,index);
//     // 将偶数遍历出来，然后将偶数遍历出来存在o数组中再将它打印
//     return item > 20;
// })
// console.log(o);


// eg1
var arr2  = [{name:"小强",age:18,gender:"nan"},{name:"pop",age:25,gender:"nv"},{age:58}];
var t = arr2.filter(function(item,index){
    console.log(item,index);
    // 在执行这段代码时它会将有name的对象存到t数组中，而没有name的数组则不管
    return item.name;
});
console.log(t);



