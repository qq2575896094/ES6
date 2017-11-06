/**
 * Created by qq2575896094 on 2017/11/2.
 */

let arr = [5, 6, 7, 8, 9];

for (let [index, value] of arr.entries()) {
    console.log([index, value]);     //[ 0, 5 ]  [ 1, 6 ]    [ 2, 7 ]    [ 3, 8 ] ......
}

console.log(arr.keys());        //{}

for (let a of arr.keys()) { //0 1   2   3   4
    console.log(a);
}

console.log('=============');

//TypeError: [1,2].values(...)[Symbol.iterator] is not a function
// for (let a of [1,2].values()) {   //5 6 7 8 9
//     console.log(a);
// }