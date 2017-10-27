/**
 * Created by qq2575896094 on 2017/10/27.
 *
 *  1. let声明的变量只在它所在的代码块有效。
 *  2. 不存在变量提升
 *  3. 暂时性死区
 *  4. 不允许重复声明
 */

console.log("==========================================================");

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


console.log("==========================================================");

let arrA = [];
let arrB = [];
for (let i = 0; i < 10; i++) {
    console.log(i);
    arrA[i] = function () {
        console.log(i);
    };
}

for (var j = 0; j < 10; j++) {
    arrB[j] = function () {
        console.log(j);
    };
}
// console.log(i);     //ReferenceError: i is not defined
arrA[5]();          //5
arrB[5]();          //10
console.log(j);     //10

console.log("==========================================================");

console.log("aa: " + aa);   //aa: undefined
// console.log("bb: " + bb);   //ReferenceError: bb is not defined
var aa = 2;
let bb = 1;
console.log("aa: " + aa);   //aa: 2
console.log("bb: " + bb);   //bb: 1

console.log("==========================================================");

var tmp = '1';
if (true) {
    // tmp = "tmp";        //ReferenceError: tmp is not defined
    let tmp;
}

console.log("==========================================================");

{
    let q = 1;
    // var q = 2;      //SyntaxError: Identifier 'q' has already been declared
}
{
    let w = 3;
    // let w = 4;  //SyntaxError: Identifier 'w' has already been declared
}