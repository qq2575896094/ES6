/**
 * Created by qq2575896094 on 2017/11/9.
 */

class People {
    static eat() {
        console.log('people eat food!');
    }
}

class Student extends People {
    constructor() {
        super();
    }

    read() {
        // super.eat();
        console.log('student read book!');
    }

    write() {
        super.eat();
        console.log('student do the homework!');
    }
}

let student = new Student();
student.read();                     //people eat food!      student read book!
// student.write();                    //TypeError: student.write is not a function
Student.write();