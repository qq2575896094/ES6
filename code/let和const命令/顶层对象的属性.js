/**
 * Created by qq2575896094 on 2017/10/27.
 *
 * 在Node环境下,顶层对象是global对象,而不是window对象,所以需要将代码放入浏览亲环境测试;
 */

var a = 2;

let b = 3;

const PI = 3.14;

function findFn() {
    console.log("findFn");
}


console.log(window.a);      //ReferenceError: window is not defined
console.log(window.b);
console.log(window.PI);
console.log(window.findFn());