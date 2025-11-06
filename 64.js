// Ternary Operator

/*
It's a shortcut of writing if...else statements - all in one line.
*/

//Syntax:
//condition ? doThisIfTrue : doThisIfFalse;


let myAge = 20;

if (myAge > 18) {
    console.log('I can Vote');
} else {
    console.log('I cant vote');
}

let output = myAge > 18 ? 'Vote' : 'No Vote';
console.log(output);