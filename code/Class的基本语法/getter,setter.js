/**
 * Created by qq2575896094 on 2017/11/8.
 */

class People {

    constructor() {
        // this.age = age
    }

    get age() {
        return this.age;
    }

    set age(value) {
        // console.log(value);
        this.age = value;
    }


}

let people = new People();
people.age = 30;
console.log(people.age);