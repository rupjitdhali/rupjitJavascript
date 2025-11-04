//reduce method

/*
The reduce() method runs a function in each element of an array to reduce it to a single value (like sum, product, or contained result).

*/

// Reduce Method has 3 parameters
//1. accumulator => stores the previous step
//2. current Value ==> current array element
//3. initial value ==> starting Value

let numbers = [10, 20, 30, 40, 50];
let str = ['H','E', 'L', 'L', 'O'];

let total = str.reduce((acc, cur) =>{
    return acc + cur;
}, );

console.log(total);

// acc     acc + curr   total