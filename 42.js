

// 17. every() Method
//checks if every element in the array passes a test (returns true/false). 
//Returns true if all elements pass the condition otherwose false.
let nums = [2, 4, -10, 8, 10];

let check = nums.every((x) => x > 5);




//function test(x) {
//return x > 0;
//}

console.log(check);
// >0
/*
//18. find() method

Returns the first element that satisfies a condition


Returns: the element itself, or undefined if not found


*/


// function test(x) {}

let nums1 = [2, 4, -10, 8, 10];

let check1 = nums.every((x) => x > 5);


console.log(check1);

// 19. findindex()

//Returns the index of the first element that satisfies a condition

//returns : index number , or -1 if not found

let nums2 = [2, 4, -10, 8, 10];

let check2 = nums.findIndex((x) => x > 5);

console.log(check2);
