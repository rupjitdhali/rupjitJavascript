//Asynchronous

//Timer Functions
/*
Timer functions let you schedule code execution - either after a delay or repeatedly at intervals.
They are part of the Web APIs (in browsers) or Node.js global timers (in backend JS).
*/

//1. setTimeout()
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

console.log('Step 1');

setTimeout(() =>
    console.log('Step 2'), 0);

console.log('Step 3');

//2. setInterval()

/*The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

It continues running until you stop it using clearInterval().

*/

//setInterval(() => {
//  console.log('Hello CFI');
// }, 2000 );

//clearInterval

let count = 1;

const timer = setInterval(()=>{
    console.log('Hello CFI');
    // count = count + 1;
    console.log(count);
    count++;

    if (count == 5) {
        clearInterval(timer);
        console.log('Stopped');
        clearInterval(timer);
    }
}, 1000);