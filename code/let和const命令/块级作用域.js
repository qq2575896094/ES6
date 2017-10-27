/**
 * Created by qq2575896094 on 2017/10/27.
 */

{
    let a = 1;
    {
        let b = 2;
        console.log("a:" + a);
        console.log("b:" + b);
    }
    console.log("a:" + a);
}
// console.log("a:" + a);      //ReferenceError: a is not defined

console.log("==========================================================");

(function (num1, num2) {
    console.log(num1 + num2);
    console.log("立即执行函数");
})(1, 2);

{
    let num1 = 1;
    let num2 = 2;
    console.log(num1 + num2);
    console.log("代码块");
}

console.log("==========================================================");

{
    let a = '12';

    //函数声明语句
    function f() {
        return a;
    }
}

{
    let a = 12;
    //函数表达式
    let f = function () {
        return a;
    }
}
