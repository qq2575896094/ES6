/**
 * Created by qq2575896094 on 2017/11/7.
 */

const PeopleClass = class People {

    read() {
        console.log("People");
    }
};

const manClass = new class {
    read() {
        console.log("Man");
    }
}();

console.log(manClass);      //{}
manClass.read();            //Man


let people = new PeopleClass();
// let peo = new People();             //ReferenceError: People is not defined

// console.log(people.__proto__ === peo.__proto__);

