//Object methods

//1.entries Method
/*
Object.entries() in JavaScript is a built-in method that returns an array of key-value pairs from an object.
*/
// let person = {
//     fname: 'suhail',
//     age: 20,
//     isAlive: true,
// };

// let output = Object.entries(person);
// console.log(object);

let students = ['suhail', 'kaif', 'kamran'];
console.log(students[2]);

let arr = [
    ['fname', 'suhail'],
    ['age', 20],
    ['isAlive', true], //2
    //2 0       2 1
];


// console.log(arr[1][1]);

console.log(arr.at(1));

//2nd Object.keys()
/*
Returns an array of keys (property names) of the object.
*/
let user = {
    fname: 'Suhail',
    age: 20,
    city: 'Hyd',
};

console.log(Object.keys(user));


//3. Object.values()
//Returns an array of values from the object.

//4.Object.freeze()

// /*
// Freezes an object so that:

//You cannot add, remove, or change properties.

//It makes the object completely immutable.
// */
// Object.freeze(person); //freeze


let person = {
    fName: 'Rupjit',
    class: 'CFI'
}

Object.freeze(person); //freeze

console.log(Object.isFrozen(person)); //true

person.phone = 7892345125;

console.log(person);










//add
students.city = "hyderabad"

//update
students.age = 20;

//delete

delete students.fname






