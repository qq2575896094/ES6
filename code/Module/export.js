/**
 * Created by qq2575896094 on 2017/11/10.
 */

/**
 * 写法一
 */
export const firstName = "田";
export const lastName = "雨";
export let age = 27;

/**
 * 写法二
 */
let name = '12';
export {name};

/**
 * 写法三
 */

export {name as n};

export function add(x, y) {
    return x + y;
}

export {
    add as Add
}