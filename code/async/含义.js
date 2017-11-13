/**
 * Created by qq2575896094 on 2017/11/13.
 */

const fs = require('fs');

const asyncReadFile = async () => {
    const f1 = await readFile('../Class的基本语法/name.js');
    const f2 = await readFile('../Class的基本语法/简介');
    console.log(f1);
    console.log(f2.toString());
};
asyncReadFile();