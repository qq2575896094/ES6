/**
 * Created by qq2575896094 on 2017/10/30.
 */


let [a, b, c, d, e, ...f] = "game_sky";
console.log(a);     //g
console.log(b);     //a
console.log(c);     //m
console.log(d);     //e
console.log(e);     //_
console.log(f);     //['s','k','y']

let {length: len} = "game_sky";

console.log(len);       //8