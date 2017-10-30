/**
 * Created by qq2575896094 on 2017/10/30.
 */


let s = "𠮷a";
console.log(s.length);          //3
console.log(s.charAt(0));       //乱码
console.log(s.charAt(1));       //乱码
console.log(s.charAt(2));       //a

console.log(s.charCodeAt(0));   //55362
console.log(s.charCodeAt(1));   //57271
console.log(s.charCodeAt(2));   //97

console.log(s.codePointAt(0).toString(16));     //20bb7
console.log(s.codePointAt(1).toString(16));     //dfb7
console.log(s.codePointAt(2).toString());       //97

for (let char of s) {               // 20bb7  61
    console.log(char.codePointAt(0).toString(16));
}