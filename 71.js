//Dates in JavaScript

/*
JavaScript Data and Time
In JavaScript, data and time are represented by the Date object. The Date object provides the date and time information and also provides various methods. 

A JavaScript data defines the ECMAScript epoch (predomainant base value for computer-recorded date and time values).

Creating Data Objects
Thereare four ways to create a date object. 

new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

JavaScript has a built-in Date object to handle dates and times.

*/

// const  currentDate = new Date();
// console.log(currentDate);


// const date1 = new Date('2025-11-10T11:23:45.432');
// console.log(date1);

// const date2 = new Date(2025, 11, 10, 19, 14, 29);
// console.log(date2);

// const date3 = new Date(1700000000000000);
// console.log(date3);

const now = new Date()
console.log(now);

//Date Methods
//Fetch Specific things from current time
let onlyMilliseconds = now.getMilliseconds();
console.log(onlyMilliseconds);
// 0. getMilliseconds()
// 1. getfullYear()
// 2. getMonth() ==> 0 Jan ...till 11
// 3. getDate() ==> 1 - 31
// 4. getDay()  ===> ( 0 -- sunday )(1 -- monday)
// 5. getHours() ==> 0 to 24
// 6. getMinutes() ==> 0 to 60
// 7. getSeconds()
//

const d = new Date();
console.log(d);

//How to get till New Milliseconds

console.log(d.getTime());

// let now = new Date();

let tillNowMilliSeconds = Date.now();
console.log(tillNowMilliSeconds);

let tillNow = +new Date();
console.log(tillNow);