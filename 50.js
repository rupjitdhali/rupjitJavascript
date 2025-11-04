//continuing filter method

//22. filter method

/*
The filter() method creates a new array filled with elements that pass a test (a condition you define in a function).


👉It does not change the original array.

*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let output = arr.filter((x) => {
//     return x > 5;
// });

// console.log(output);

// let arr = [10, 20, 30, 40, 50];


let students = ['suhail', 20, null, true, undefined, false];

let classRoom = [
    {
        fullName: 'Saboor',
        age: 81,
        college: 'MJ',
    },
    {
        fullName: 'Saboor',
        age: 81,
        college: 'MJ',
    },
    {
        fullName: 'Kaif',
        age: 21,
        college: 'drop'
    }
]


let output = classRoom.filter((x) => {
     return x.age < 40;
 });

 console.log(output);