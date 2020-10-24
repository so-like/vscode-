let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [9,10,11,12];

let arr4 = [...arr1,...arr2,...arr3];
console.log(arr4);

//求一个数组的最大值
let arr6 = [55,6,9,223,41,4,55];
// let max = Math.max.apply(Math,arr6);//传统方法
let max2 = Math.max(...arr6);//...arr6相当于把数组全部放到（）中进行计算
console.log(max2);