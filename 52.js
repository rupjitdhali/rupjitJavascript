//for of loop

/*
for of loop
Used to loop directly through the values o an iterale to an array

*/

let students = ["saboor", "kaif", "kamran"]
//                 0        1         1
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for (let i= 0; i <= students.length - 1; i++) {
//     console.log(students[i]);
// }

//for of

console.log(students);

for (let ele of students) {
    console.log(ele);
}
