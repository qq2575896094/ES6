/**
 * Created by qq2575896094 on 2017/10/30.
 */


console.log(String.fromCharCode(0x20BB7));      //乱码

console.log(String.fromCodePoint(0x20BB7));     //𠮷

console.log(String.fromCodePoint("𠮷".codePointAt(0)));      //𠮷