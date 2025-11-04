//Recursions

//Recursion is when a function calls itself to solve a smaller version of the same problem - until it reaches a base case (a stopping point).

// function hello() {
//     console.log('Hello CFI');
//     hello();
// }

// hello();

//10th line hello()
//5th function hello
//6th ==> Hello CFI
//5th function hello
 //6th ==> Hello CFI

 function call(num) {
    console.log('num value =', num); //10
    if (num == 3) return console.log('Stopped');

    console.log('Calling the function');
    call(num - 1);
 }

 call(5);