//Function expressions

// A Function can also be stored in a variable

//Simple Function
function mul(x, y) {
    return x * y;
}
let final = mul (2, 4);
console.log(final * 2);

//function expression
let mul1 = function (x, y){
    return x * y;
}

let final1 = mul1(2,5);
console.log(final1 * 2);