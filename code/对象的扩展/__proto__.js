/**
 * Created by qq2575896094 on 2017/11/6.
 */

let people = {
    name: 'people',
    say() {
        console.log(this.name);
    }
};

let man = {
    name: 'man',
    write() {
        console.log(this.name);
    }
};

let woman = {
    name: 'woman',
    read() {
        console.log(this.name);
    }
};

man.__proto__ = people;
man.say();              //man
console.log(man);       //{ name: 'child',write: [Function: write] }

// woman = Object.create(people);
// console.log(woman);     //{}
// woman.say();            //people


Object.setPrototypeOf(woman, people);
console.log(woman);     //{ name: 'woman', read: [Function: read] }
woman.say();            //woman

console.log(Object.getPrototypeOf(woman));      //{ name: 'people', say: [Function: say] }
