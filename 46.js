// //map Method
// console.time('nums');

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const table = nums.map((n) => {
//     return(`5 X ${n} = ${5 * n}`)
// })

// console.timeEnd('nums');



// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer Loop`, i);

//     for(let j = 1; j <= i; j ++) {
//         console.log(`    Inner Loop`, j);
//     }
// }


for (let i = 1; i <=5 ; i++) {
    let row = '';
    // console.log("before inner loop\n",row);
    for (let j = 1; j <=i; j++) {
        row += '*  ';    
    }
    console.log(row);
}