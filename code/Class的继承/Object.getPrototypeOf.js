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
        console.log('student read book!');
    }

    write() {
        console.log('student do the homework!');
    }
}


console.log(Object.getPrototypeOf(Student) === People);           //true