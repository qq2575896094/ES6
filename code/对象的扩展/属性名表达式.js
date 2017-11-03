/**
 * Created by qq2575896094 on 2017/11/3.
 */

let language = "chinese";

let obj = {
    sex: 'm',
    [language]: language,
    ['parent']: 'tianXia'
};
obj.name = "yuTian";
obj['age'] = 24;

console.log(obj);       //{ sex: 'm',chinese: 'chinese',parent: 'tianXia',name: 'yuTian',age: 24 }