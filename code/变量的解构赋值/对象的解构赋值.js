/**
 * Created by qq2575896094 on 2017/10/30.
 */


let {a, c} = {a: 'a', b: 'b'};

console.log(a);     //a
console.log(c);     //undefined

console.log('---------------------------');

let obj = {first: 'first', last: 'last'};

let {first: f, last: l} = obj;

console.log(f);     //first
console.log(l);     //last

console.log('---------------------------');

let {q = 2, w = 3} = {q: 'q'};
let {oo: o = 'o', pp: p = 'p'} = {oo: 'oo'};

console.log(q);     //q
console.log(w);     //3
console.log(o);     //oo
console.log(p);     //p
(
    {

    }
        = {x: 1});