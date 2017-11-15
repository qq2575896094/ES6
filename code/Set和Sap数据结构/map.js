/**
 * Created by qq2575896094 on 2017/11/15.
 */

const map = new Map();
const obj = {name: 'zl', age: 24};
map.set(obj, '234');
console.log(map);           //Map { { name: 'zl', age: 24 } => '234' }
console.log(map.size);      //1
console.log(map.has(obj));  //true
console.log(map.get(obj));  //234

console.log([...map]);      //[ [ { name: 'zl', age: 24 }, '234' ] ]

map.delete(obj);

console.log(map.has(obj));  //false
console.log(map.get(obj));  //undefined
console.log(map.size);      //0

console.log(new Map([['23key','23value'],['key12','value12']]));    //Map { '23key' => '23value', 'key12' => 'value12' }


const mp = new Map();
for(let key of Object.keys(obj)){
    mp.set(key,obj[key]);
}
console.log(mp);        //Map { 'name' => 'zl', 'age' => 24 }
console.log()