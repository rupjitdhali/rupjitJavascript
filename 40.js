//11. includes() Method
//it gives tue and false basis of present in array or not
//true = exist
//false = not exist
//output in boolean value

let arr = ['saboor', 'rayyan', 'kaif'];

console.log(arr.includes('kaif'));



//12. join() Method;

// let arr1 = ['saboor', 'rayyan', 'kaif']
console.log(arr.join('|'));


//13. reverse method
let arr1 = ['saboor', 'rayyan', 'kaif']
console.log(arr1.reverse());


let arr2 = [10, 9, 8]
console.log(arr2.reverse());


let arr3 = [5, 7, 2]
console.log(arr3.reverse());


//14. sort() Method

let arr4 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr4.sort((a, b) => a - b));
console.log(arr4.sort((a, b) => b - a));

(() => {
    console.log('testing');
})

();

//IIFE
//Immediately Invoked Function Expression


//15. flat() Method

let arr5 = ['hello', 'hi', ['bye', 'test'], 'ok'];
console.log(arr5.flat());


//16. Array.of() Method

//A method is used to create a new array

let output = Array.of('hi', 'hello', 23, 12, 54, false);
console.log(output);

