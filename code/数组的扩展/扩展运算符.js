/**
 * Created by qq2575896094 on 2017/11/2.
 */


console.log(...[1, 2, 3, 4, 5, 6]);     //1 2 3 4 5 6

let arr = [1, 2, 3, 4, 5, 6];

let arrT = [...arr];

for (key in arrT) {
    console.log(key);   //0 1   2   3   4   5
}

console.log(arrT);   //[ 1, 2, 3, 4, 5, 6 ]


function fn(arr, ...items) {
    console.log(items);     //[ 7, 8, 9 ]
    console.log(...items);  //7 8 9
    arr.push(...items);
    console.log(arr);       //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
}

fn(arr, 7, 8, 9);