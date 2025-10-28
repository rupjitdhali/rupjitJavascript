// try catch in javascript

/*
The try...catch statement in JavaScript is used to handle runtime errors - it lets your code keep running even if something goes wrong*/


// Basic Syntax

// try {

// }catch (error) {
//     console.log(error);
// }

try {
    a = 10;
console.log(b);
} catch (error) {
    console.log('Bhai error agaya');
    console.log(error.name, error.mesage);
}