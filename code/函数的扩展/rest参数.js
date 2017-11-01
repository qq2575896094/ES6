/**
 * Created by qq2575896094 on 2017/11/1.
 */


function fun(a, b, ...c) {
    console.log(a);     //1
    console.log(b);     //2
    console.log(c);     //[ 4, 5, 6, 7 ]
}

fun(1, 2, 4, 5, 6, 7);
