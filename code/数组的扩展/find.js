/**
 * Created by qq2575896094 on 2017/11/2.
 */

console.log([1, 2, 3, 4, 5].find((n) => {       //3
    return n > 2;
}));

console.log([1, 2, 3, 4, 5].find((value, index, arr) => {       //4
    if (value > 3) {
        return [value, index];
    }
}));