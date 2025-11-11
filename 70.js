/*
JSON Methods in JavaScript

JavaScript provides two main global methods under the JSON object:

1. JSON.stringify()
Converts a JavaScript object -> JSON string


2. JSON.parse()
Converts a JSON string -> JavaScript Object

*/


let person = {

    fullName: 'Suhail',
    age: 20,
    isAlive: true,
    isSleeping: null,
};

// console.log(person);
// console.log(typeof person);

// let final = JSONstringify(person);
// console.log(final);
// console.log(typeof final);

let jsonPerson = `{'fullName':'Suhail', 'age': 20, 'isAlive': true, 'isSleeping':null}`;
console.log(jsonPerson);
console.log(typeof jsonPerson);


let convertToObject = JSON.parse(jsonPerson);
console.log(convertToObject);
console.log(typeof convertToObject);