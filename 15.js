//Type Conversion
//Changing datatype from one type to another

//Ex : let a = "10"
// Convert 10 of string to 10 of Number


// There are 2 types of conversions in JS
// 1. Implicit conversions
// 2. Explicit conversions

//1. Implicit Conversion : ==> Automatic Conversions
//
//1. Anything (any datatype) to String

let result = 2;
console.log(typeof result);

let a = 2 + "hello";
console.log(a);

let b = "2" + 4;
console.log(b);

let c = 'true';
console.log(typeof c);

let d = undefined + "3"; 
console.log(d);

//num + str
//str + str
//boolean + str
//null + str
//undefined + str

//Anything to Number (use only( - ,/, *)

let
a1 = '2' + '3';
a2 = '5' - '3';
a3 = '5' * 3;
a4 = 10/ '2';
a5 = 'hello' + 'hi'; //NaN ==> Not a Number
console.log(a);

//Anything to Boolean
//false = 0
//true = 1
let a6 = '5' + 'true';
let a7 = 2 + true;
let a8 = 0 + false;
console.log(a8);

// Null to Number
// null = 0
let c1 = 4 + null;
console.group(c1, typeof c1);
//let c2 = '4' + nul;

//Undefined to Null

let d1 = undefined + 5;
let d2 = true + undefined;
console.log(d1);
