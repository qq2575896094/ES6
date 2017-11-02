/**
 * Created by qq2575896094 on 2017/11/2.
 */


function fn(a, b, c, d) {
    let params = Array.from(arguments);
    console.log(params);
}

fn(1, 3, 2, 4, 6, 7);       //[ 1, 3, 2, 4, 6, 7 ]