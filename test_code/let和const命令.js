/**
 * Created by qq2575896094 on 2017/10/27.
 *
 * let和const命令
 *  1. let命令
 *  2. 块级作用域
 *  3. const命令
 *  4. 顶层对象的属性
 *  5. global对象
 */


let a = 1;

{
    // console.log("inner: " + a);     // a is not defined
    let a = 2;
    console.log("inner: " + a);         //inner: 2
}
console.log(a);                         // 1