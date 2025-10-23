// DataTypes in Javascript

//There are two types of data types in Javascript

// 1. Primitive Data Type
// 2. Non Primitive Data Type

//1. Primitive Data Type: Its a type of data type
// which stores single type of data/value

// 2. Non Primitive Data Type : Its a type of datatype
// which can store multiple data and values

// Example for Primitive Data type
/*
1. string : ex : anything in ", " ,``
2. number : ex : 1234, 45.24, -34, 0
3. boolean : ex : true, false
4. bigint : ex : 4567890123n
5. null : ex : it denotes a empty value : let a = null;
6. undefined : ex : let a; if you don't store any value, it will become undefined

*/

// Example of Non Primitive Data
// 1. Object
// 2. Arrays

//example for object

let person = {
    firstName : "Suhail",
    age : 10,
    isAlive : true,
    banlBalance : 98456789789n,
    sleeping: null
}

console.log(person)


let personDetails = ['Suhail', 10, true, 5768793479786n, null]
console.log(personDetails)