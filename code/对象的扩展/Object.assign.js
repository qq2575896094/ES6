/**
 * Created by qq2575896094 on 2017/11/3.
 */

let target = {a: 1};
let source = {a: 2, b: 3};
let source2 = {b: 2};
Object.assign(target, source, source2);
console.log(target);        //{ a: 2, b: 2 }