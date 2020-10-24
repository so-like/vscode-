// 取对象中属性的值赋值给变量
var obj={
    name:"陈乐",
    age:18,
    gender:"男",
    score:100
}

// Es5中的语法
// var name1 = obj.name;
// var age1 = obj.age;
// var gender1 = obj.gender;
// var score1 = obj.score;
// console.log(name1,age1,gender1,score1);

// Es6中新语法 对象结构赋值
// var {name:name1,age:age1,gender:gender1,score:score1} = obj;
// console.log(name1,age1,gender1,score1);

// var {name:name,age:age,gender:gender,score:score} = obj;
// console.log(name,age,gender,score);

// 如果声明的变量名和对象的属性名一致则可以简写
// var {name,age=20,gender,height=190} = obj;
// console.log(name,age,gender,height);

// 如果age有默认值则结果还是为obj对象的值，相当于把obj对象的值赋给了前边。
var {name,age=20,gender,height=190} = obj;
console.log(name,age,gender,height);//输出的age为18（obj对象的值）