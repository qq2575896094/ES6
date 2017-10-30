/**
 * Created by qq2575896094 on 2017/10/30.
 */


let [a, b, c] = [1, 2, 3];
console.log(a);     //1
console.log(b);     //2
console.log(c);     //3

console.log('---------------------------');

let [one, two, three] = [, , 6];
console.log(one);       //undefined
console.log(two);       //undefined
console.log(three);     //undefined

console.log('---------------------------');

let [, , e] = [2, 3, 4];
console.log(e);     //4

console.log('---------------------------');

let [z, ...v] = [1, 2, 3, 4, 5];
console.log(z);     //1
console.log(v);     //[2,3,4,5]

console.log('---------------------------');

let [s, d, ...g] = ['s'];
console.log(s);     //s
console.log(d);     //undefined
console.log(g);     //[]

console.log('---------------------------');

let [f] = [];
let [n, m] = ['n'];
console.log(f);     //undefined
console.log(n);     //n
console.log(m);     //undefined

console.log('---------------------------');

let [x = 1] = [];
let [y = 2] = [undefined];
let [t = 1] = [null];
let ff = () => {
    console.log("fn");
    return 'fn';
};
let [fff = ff()] = [1];
let [fn = ff()] = [];

console.log(x);     //1
console.log(y);     //2
console.log(t);     //null

console.log(fff);   //1
console.log(fn);    //fn

