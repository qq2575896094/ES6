/**
 * Created by qq2575896094 on 2017/10/30.
 */


let fn = ([x, y]) => {
    return x + y;
};

console.log(fn([2, 3]));        //5

let ff = ({num1: x = 0, num2: y = 0}) => {
    return x + y;
};
console.log(ff({}));                        //0
console.log(ff({num1: 2}));                 //2
console.log(ff({num1: 5, num2: 8}));        //13