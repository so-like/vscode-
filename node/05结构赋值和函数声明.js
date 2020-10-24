// Es5声明函数，而形参有多个
//  function fun(name,age,gender){
//      console.log(name,age,gender);
// }
// fun("猪",25,"男");

// 可以给函数传一个对象作为参数
// var fun = function(obj){
//     console.log(obj.name,obj.age,obj.gender);
// };
// fun({
//     name:"555",
//     age:69,
//     gender:"男"
// });

var fun = function(name,age,gender,height){
    console.log(name,age,gender,height);
};
fun({
    name:"555",
    age:69,
    gender:"男",
    height:86
});