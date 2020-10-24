// Set 是Es6中的新数据类型
// set和数组类似，但与数组不同的是他不可以存放重复的数值，一般用来数组去重
//数组去重 用这种方式是最简单的
var arr = [1,2,3,5,2,3]
var set1 = new Set([...arr]);
console.log(set1);//得到的是一个set对象


// eg将数组去重写成一句话
var arr1 = [2,3,5,6,88,5,6,6];
let arrnew = [...new Set(arr1)];
console.log(arrnew);