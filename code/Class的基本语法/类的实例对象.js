/**
 * Created by qq2575896094 on 2017/11/7.
 */

class People {

    constructor(name) {
        this.name = name;
    }


    read() {
        console.log(this.name);
    }
}

let people = new People('people');
console.log(people);        //People { name: 'people' }

console.log(people.hasOwnProperty('name'));                 //true
console.log(people.hasOwnProperty('read'));                 //false
console.log(people.__proto__.hasOwnProperty('read'));       //true


let peo = new People('peo');
console.log(peo.__proto__ === people.__proto__);            //true
