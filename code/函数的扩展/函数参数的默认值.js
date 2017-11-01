/**
 * Created by qq2575896094 on 2017/11/1.
 */


function foo(x = 0, y = 0) {
    console.log(x + y);
}

foo(2);         //2
foo(2, 3);      //5


function fn({x, y = 5} = {}) {
    console.log(x);     //undefined     undefined     1   2
    console.log(y);     //5             5             5   3
}

fn();
fn({});
fn({x: 1});
fn({x: 2, y: 3});

function fetch(url, {method = "GET", params = "", headers = {}}) {
    console.log(method);
    console.log(params);
    console.log(headers);
}

// fetch("https://wwww.baidu.com");    //TypeError: Cannot match against 'undefined' or 'null'.
fetch("https://wwww.baidu.com", {});     //GET '' {}


function ff0() {
    console.log('hello');
}

function ff1(x) {
}

function ff10(x = 1) {

}

console.log(ff0.length);     //0
console.log(ff1.length);    //1
console.log(ff10.length);   //0


let a = 1;

function an(a, b = a) {
    console.log(b);         //2
}

function ant(b = a) {
    let a = 2;
    console.log(b);     //1
}

an(2);
ant();