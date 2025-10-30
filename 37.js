//Array Methods

//1. (at) Method

let arr = ['hi', 'hello', 'bye'];
//           0      1        2
console.log(arr.at(0));
console.log(arr.at(2));
//Index ==> Value

//2. concat() Method

let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];


let total = arr1.concat(arr2);
console.log(total);
console.log(arr1.concat(arr2));

// 3. fill() Method;

let fruits = ["Apple", "Mango", "Orange"];

let total1 = fruits.fill('Pineapple');
console.log(total1);
//Fill is an array method which will replace all the elements with given element

//4. indexof() Method

let nums = ["one", "two", "three", "four"];

console.log(nums.indexOf('one'));

console.log(nums.indexOf('three'));

console.log(nums.indexOf('four'));

console.log(nums.indexOf('five '));

console.log(['one', 'two', 'three', 'four'].indexOf('one'));


//5. lastindexOf()

let arr3 = [10, 20, 30, 40, 50, 60, 20, 10, 20];
console.log(arr3.lastIndexOf(10));


//6. length()

let arr4 = [10, 20, 30, 40, 50, 60];

console.log(arr4.length);

//7. push()
//push is an array method
//which add a new element
//in the last position of the array


let arr5 = [10, 20, 30];



console.log(arr5.push(40));

//8. pop()
//pop is an array method which deletes the last element from the array
//element from the array

let arr6 = [10, 20, 30];
arr6.pop();
console.log(arr6);


//9. unshift()

let arr7 = [10, 20, 30];
arr7.unshift(100);
console.log(arr7);


//10. shift()

let arr8 = [10, 20, 40];
arr8.shift();
console.log(arr8);





