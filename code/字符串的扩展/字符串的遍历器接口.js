/**
 * Created by qq2575896094 on 2017/10/30.
 */


let str = "𠮷abc";
for (let s of str) {    //𠮷 20bb7     a 61       b 62       c 63
    console.log(s);
    console.log(s.codePointAt(0).toString(16));
}