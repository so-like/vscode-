var circle = {
    radius: 10,
    outerDiameter() {
        var self =this;
    var innerDiameter = () =>//箭头函数是没有this值得，在它中调用的this全来自于父作用域，如果没有对象那么它就指向全局作用域window
    console.log(2 * this.radius);//如果这两使用this会报错，因为innerDiameter函数中的this是window，内层函数不会继承外部函数的this值
    innerDiameter();
    }
    };
    circle.outerDiameter();