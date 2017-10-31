/**
 * Created by qq2575896094 on 2017/10/31.
 */


console.log(`我们都是中国人`);     //我们都是中国人

let name = "yuTian";
let country = "China";

console.log(`My name is ${name}.I am from ${country}`);     //My name is yuTian.I am from China

let list = `
<ul>
    <li>${name}</li>
    <li>${country}</li>
</ul>
`.trim();
document.body.innerHTML = list;