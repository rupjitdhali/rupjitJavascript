//Objects in Javascripts

// Non primitive ==> you can store multiple data types

//object uses key value pair
//left side is key
//right side is value
//to access value use the key
//ex: frame: "suhail"
//key: value
//add , after each value
let person = {
    fname: "suhail",
    phone: 7005936522,
    age: 10,
    isAlive: true,
    isSleeping: null,
    health: undefined
};
console.log(person);


//How to access object keys
//1. dot notation

console.log(person.fname);
console.log(person.age);

//2. using bracket notation

console.log(person['fname']);

//Access ==> variableName.key or variableName ['key']
//Add
//Modify/Update
//Delete

//Add a new key value
//variableName.newkey = newValue
//console.log(person);

//Update an object

//variableName.oldkey = updatingValue
//console.log(person)
//person.age = 20;
//console.log(person)

//How to delete an existing key in object

//delete variableName.key
//console.log(person)
//delete person.phone
//console.log(person)

// Access ==> Read
// Add/Create
// Update
// Delete

// ==> CRUD Operations
// C ==> create
// R ==> read
// U ==> Update
// D ==> Delete
