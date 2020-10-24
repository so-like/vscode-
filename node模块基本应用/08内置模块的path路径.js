// 拼接的01.txt文件的绝对路径 为了避免出现少写一个/导致出错所以我们用path.join()方法
// const fullpath = __dirname+"/etc/01.txt";
// console.log(fullpath);

//导包
var path = require("path");
var y = path.join(__dirname,"etc","01.txt");
console.log(y);
