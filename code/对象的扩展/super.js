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
    read() {
        super.say();                    //man
        console.log(super.name);        //people
        console.log(this.name);         //man
    }
};

Object.setPrototypeOf(man, people);
man.read();