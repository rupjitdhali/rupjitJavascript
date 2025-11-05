//   NUMBER METHODS

//1. parseFloat(): they are built-in javascript functions that convert strings into numbers.


//Convert to decimal number
//string to Number

console.log(parseFloat('43.5')); //43.5

console.log(parseFloat("99.43cm")); // 99.43

console.log(parseFloat("ca 99.23")); //NAN

console.log(parseFloat("a12b3c")); //NAN


//2. parseInt ...converts to number
//we use parseInt for number systems

//15
//10
//8
//100
// 99



// console.log(parseInt('1111', 2)); //15
// console.log(parseInt('1010', 2));
// console.log(parseInt('1000', 2));
// console.log(parseInt('1100100', 2));
// console.log(parseInt('1100011', 2));

// console.log(parseInt('45.4543'));

let num = 57.7783;

console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(7));
console.log(num.toFixed(8));

//4. tolocaleString()

/*
tolocaleString() is a Number method that formats a number according to a specific locale (country/language) or style - like adding commas, currency, or percentage.
*/

//syntax ==> number.tolocaleString([locales], [options])
//

/*
locales -> optional string like 'en-US', 'hi-IN', 'de-DE', etc.
(defines language and region format)

options -> optional object to control formatting style (currency, decimals, etc.)
*/

let num1 = 1234567.89
console.log(num1.toLocaleString('en-US'));
// *1,234,567.89 (based on your system's locale)

let num2 = 1234567.89;

console.log(num2.toLocaleString('en-US')); // 1,234,567.89
console.log(num2.toLocaleString('de-DE')); // 1.234.567,89
console.log(num2.toLocaleString('hi-IN')); //12,34,567.89

let price = 2500;

console.log(price.toLocaleString('en-US'), {style: 'currency', currency: 'USD'});

console.log(price.toLocaleString('hi-IN'), {style: 'currency', currency: 'USD'});

console.log(price.toLocaleString('ar-SA'), {style: 'currency', currency: 'USD'});
