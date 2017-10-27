/**
 * Created by qq2575896094 on 2017/10/27.
 *
 *  let声明的变量只在它所在的代码块有效。
 */

let a = 1;
var b = 2;
{
    // console.log("inner: " + a);     // a is not defined
    console.log("inner: " + b);         //inner: 2
    let a = 2;
    var b = 3;
    console.log("inner: " + a);         //inner: 2
    console.log("inner: " + b);         //inner: 3
}
console.log(a);                         // 1
console.log(b);                         // 3