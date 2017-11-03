/**
 * Created by qq2575896094 on 2017/11/3.
 */

let obj = {
    name: 'name',
    set na(name) {
    },
    get na() {
    },
    say() {
        console.log('hello, everyone!');
    }
};

console.log(obj.say.name);      //say
// console.log(obj.na.name);       //TypeError: Cannot read property 'name' of undefined
let Descriptor = Object.getOwnPropertyDescriptor(obj, 'na');
console.log(Descriptor);                //{ get: [Function: get na],set: [Function: set na],enumerable: true, configurable: true }
console.log(Descriptor.get.name);       //get na
console.log(Descriptor.set.name);       //set na