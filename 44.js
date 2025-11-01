//How to calculate time in code's

console.time('Start')
let num = [1, 2, 3, 4, 5];

num.forEach((x) => {
    console.log(x);
});

console.timeEnd('Start');

//21. map Method ()

//map Method
//Transforms each element and
//returns a new array

//Return Value : New Array
//Chainable : Yes
//Changes Original : Yes
//Common Use Case : Creating new arrays

//ex: Creates a new array with modified values and
// returns in a new array by default

let numbers = [1, 2, 3, 4, 5];
//forEach
numbers.forEach((x) => {
    console.log(x);
});

console.log(numbers);
let final = numbers.map((x) => x * 2);
console.log(final);
console.log(numbers);

//Mutability 

//Mutating vs Non-Mutating

//1. push
//2. pop
//3. shift
//4. unshift
//5. splice
//6. sort
//7. reverse
//8.forEach (with forcefully)

//Non-Mutating
//1.map
//2.filter
//3.slice
//4.concat
//5.reduce

let a1 = [10, 20, 30, 40];
let a2 = [50, 60];

console.log(a1);

let a3 = a1.concat(a2);
