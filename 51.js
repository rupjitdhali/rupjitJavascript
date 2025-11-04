//Slice method
// The slice() method is used to copy or extract a portion of an array (or string) without changing the original one.

let arr = [10, 20, 30, 40];
//         0    1   2   3
//         1    2   3   4

let output = arr.slice(1, 3);
//                     i  1
console.log(output);

//some() Method
/*
The some() method checks if at least one element in an array passes a test(condition).
It returns:

✅ true - if any element passes the condition
❌ false - if none do

*/

let arr1 = [2, 4, 6, 8, 11];
let output1 = arr1.every((x) => x % 2 == 0); //false
let output2 = arr1.some((x) => x % 2 == 0); //true
console.log(output1);
console.log(output2);
