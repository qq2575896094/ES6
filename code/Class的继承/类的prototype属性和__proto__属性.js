/**
 * Created by qq2575896094 on 2017/11/9.
 */

class People {
    eat() {
        console.log('people eat food!');
    }
}

class Student extends People {
    constructor() {
        super();
    }

    read() {
        super.eat();
        console.log('student read book!');
    }

    write() {
        super.eat();
        console.log('student do the homework!');
    }
}

let people = new People();
let student = new Student();

console.log(Student === Student.prototype.constructor);

console.log(Student.prototype === student.__proto__);                   //true
console.log(Student.prototype.__proto__ === People.prototype);          //true
console.log(student.__proto__.__proto__ === People.prototype);          //true
console.log(student.__proto__.__proto__.__proto__===Object.prototype);  //true
console.log(student.__proto__.__proto__.__proto__ === people);          //false


