// 模板字符串``;
// 它会保留原版字符串的格式，以及可以占位;

// Es5字符串没有格式，里面也不能写变量
// let author = "马克思";
// let str1 = `
// 渴死我了 ${author} 999*
// `;
// console.log(str1);

// var name = "得来";
// var age= 18;
// var gender = "男";
// //这样会保留原字符串格式
// console.log(`我的名字是${name} 年龄${age} 性别${gender}`);


// 不仅可以写变量还可以写函数
function fun(){
   return "hahahaha"
}
console.log(`我是德莱文 我在笑${fun()}`);