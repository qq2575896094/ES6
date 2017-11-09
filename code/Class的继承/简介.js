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

let student = new Student();
student.eat();              //people eat food!
student.read();             //student read book!
student.write();            //student do the homework!