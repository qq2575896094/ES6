/**
 * Created by qq2575896094 on 2017/11/6.
 */

let obj = {
    age: 23
};
/**
 * { value: 23,writable: true, enumerable: true, configurable: true }
 *  value       :   属性值
 *  writable    :   属性是否可修改
 *  enumerable  :   属性是否可枚举
 *  configurable:
 */
console.log(Object.getOwnPropertyDescriptor(obj, "age"));
// console.log(Object.getOwnPropertyDescriptors());        //TypeError: Cannot convert undefined or null to object