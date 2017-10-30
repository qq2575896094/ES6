/**
 * Created by qq2575896094 on 2017/10/30.
 */

let str = "我们都是中国人";

console.log(str.includes("中国"));    //true
console.log(str.startsWith("中国"));  //false
console.log(str.endsWith("中国"));    //false


console.log(str.includes("中国", 6));     //false
console.log(str.startsWith("中国", 4));   //true
console.log(str.endsWith("中国", 6));     //true