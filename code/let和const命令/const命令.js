/**
 * Created by qq2575896094 on 2017/10/27.
 */

{
    const PI = 3.1415;
    console.log(PI);
    // const PI = 3.14;        //SyntaxError: Identifier 'PI' has already been declared
    console.log(PI);
}

{
    // const P ;        //SyntaxError: Missing initializer in const declaration
    // P = 2;
    const P = 2;
    console.log(P);
}

{
    const P = 3;
    console.log(P);
}
// console.log(P);     //ReferenceError: P is not defined

{
    // console.log(P);     //ReferenceError: P is not defined
    const P = 3;
}

{
    const P = 3;
    // const P = 2;        //SyntaxError: Identifier 'P' has already been declared

}