/*
JavaScript ES6 (also known as ECMAScript2015 or ECMAScript) is the sixth edition of JavaScript in June 2015.

ECMAScript (European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.

This tutorial provides a summary of commonly used features and syntax improvements of ES6.

*/

// 1. let and const

// let a = 10;
// console.log(a);

// a = 20;
// console.log(a);

// const aadharCard = '8956742636';
// aadharCard = '87553584658';
// console.log(aadharCard);

//2. Arrow function
//3. Template Literals
//4. Default parameter

// function sayHello(name = 'Guest', age = 0) {
//  console.log(`My name is ${name} and my age is ${age}`);

// sayHello();


//5. Destructuring Assignment

let person = {
    fName: 'Suhail',
    age: 10,
    isAlive: true,
    isSleeping: null,
};

//

let { fName, age, isAlive, isSleeping } = person;
console.log(fName, age, isAlive, isSleeping);

// let age = person[1];
// console.log(age);

let [a, b, c, d] = person;

console.log(a, b, c, d);