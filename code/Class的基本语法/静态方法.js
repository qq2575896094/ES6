/**
 * Created by qq2575896094 on 2017/11/8.
 */

class People {
    static write() {
        console.log("write : " + this.name);
    }
    read(){
        console.log('read : '+this.name);
    }
}

People.write();         //write : People
// People.read();          //TypeError: People.read is not a function
let people = new People();
people.read();          //read : undefined