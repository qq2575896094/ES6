/**
 * Created by qq2575896094 on 2017/11/6.
 */

let people = {
    name: 'people',
    age: 24,
    sex: 'm'
};

for (let key of Object.keys(people)) {
    console.log(key);               //name age sex
    console.log(people[key]);       //people 24 m
}

console.log('==================================');

for(let value of Object.values(people)){
    console.log(value);               //people 24 m
}

console.log('==================================');

// for(let [key,value] of Object.entries()){       //TypeError: Cannot convert undefined or null to object
//     console.log(key);
//     console.log(value);
// }