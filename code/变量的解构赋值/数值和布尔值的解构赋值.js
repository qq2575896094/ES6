/**
 * Created by qq2575896094 on 2017/10/30.
 */


let {toString: x, toFixed: f} = 345;
console.log(x === Number.prototype.toString);       //true
console.log(f === Number.prototype.toFixed);        //true