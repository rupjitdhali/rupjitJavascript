// Functions in js
/*
A function in JavaScript is a block of code designed to perform a specific task.

You can reuse it anywhere in your code
*/

// Important points of function
// 1. declare a function
// 2. call the function

// Note : always use these 2 points to use a function

// How to write a function syntax

// 1. write a function keyword
// 2. function name and add ()
// 3. Add function block
// 4. call the function name
 

// 1. Simple function
function sayHello() {
    console.log('Hi Suhail');
    console.log('Hi Suhail');
    console.log('Hi Suhail');
}
sayHello()
sayHello()

function orderingbiriyani() {
    console.log('How to make biriyani');
    console.log('How to make biriyani');
    console.log('How to make biriyani');
}
orderingbiriyani()
orderingbiriyani()

// 2. FUnction with parameters
// Parameters ==> Passed as variables
// Arguments ==> Passed as Values

// let a = 10;
// let b = 20;

function sayrupjit(a, b, c) {
    console.log(a + b + c);
}

sayrupjit (10, 20, 5)

function whoamI(fullName) {
    console.log(`I am ${fullName} from CFI`);
}

whoamI('rupjit');