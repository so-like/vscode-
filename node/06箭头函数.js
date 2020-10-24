// 箭头函数就是一个匿名函数的简写
// var fun = function(name){
//     console.log(name);
// }
// fun("55");

// 简写成箭头函数
// 简写规则为function用=>表示，=>可以视为goto;
// 如果只有一个形参则可以省略
// 如果有多个形参则必须使用框号
// 如果函数uti只有一句话则可以省略大框号
// 如果不止一句话则必须用大框号
// var fun = name => {console.log(name)};
// fun("**")

// let fn3 = (name,age) =>console.log(name+"年龄"+age);
// fn3("lol",58)

let fn5 = (name,age) =>{
    console.log(name + "你好吗");
    return age +10;
}
fn5("pop",65)