/**
 * Created by qq2575896094 on 2017/11/14.
 */


{
    const set = new Set();
    let arr = [1, 2, 3, 4, 5, 4, 3];
    arr.forEach((val, ind) => {
        console.log(val);
        console.log(ind);
        set.add(val);
    });
    for (let i of set) {
        console.log(i);
    }
}

{
    const set = new Set([1, 2, 3, 4, 3]);
    console.log([...set]);      //[ 1, 2, 3, 4 ]
    console.log(set.size);      //4
}

{
    const set = new Set();
    set.add(1).add(2).add(3).add(2);
    console.log(set.size);          //3
    console.log(set.has(3));        //true
    console.log(set.has(4));        //false
    console.log(Array.from(set));   //[ 1, 2, 3 ]
    set.clear();
    console.log(set.size);          //0
    console.log(set.has(3));        //false

}