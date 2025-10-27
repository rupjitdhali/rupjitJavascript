function sumNumbers(a, b) {
    return a + b;
}
let final = sumNumbers(2, 5);
console.log(final + 2); //undefined

function sum(a, b) {
    let x = a + b;
    console.log(x);
    return x;
}
let total = sum(2, 3);
console.log(total * 2);

//Note :
//1. use return to pass the value
//2. we can't write after return