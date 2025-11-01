//20. forEach() Method

//Purpose : executes a function for each element
// Return Value : undefined
// Chainable: No
//Changes Original Array : no
// Common use : Logging, Saving data

//ex: forEach just : Just loops - doesn't return anything

let numbers = [1, 2, 3, 4, 5]

for(let i =0; i< numbers.length; i++)

numbers.forEach((ele) => {
    console.log(ele * 2);
});

console.log(numbers);


let names = ['kaif', 'saboor', 'rayyan', 'kamran'];

names.forEach((x) => {
    console.log(x);
});

