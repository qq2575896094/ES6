/**
 * Created by qq2575896094 on 2017/11/3.
 */

console.log(Object.is('f', 'f'));       //true
console.log(Object.is(NaN, NaN));       //true

console.log(Object.is(-0, +0));         //false