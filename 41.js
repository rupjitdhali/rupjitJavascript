//String Methods

//1. chatAt()


let str1 = 'Hello';
//
console.log(str1.charAt());


//2. concat()

let a1 = 'Hello';
let b1 = ' World';

console.log(a1.concat(b1));

//3. includes


let c1 = 'Hello I am CFI Student';
console.log(c1.includes('CFI'));

//4. length

let d1 = 'Hello I am a code guy'
console.log(d1.length);


//5. indexOf
let e1 = 'Hello I am bro'
console.log(e1.indexOf("Hello"));


//6. lastindexOf
let f1 = 'Hello I am bro'
console.log(f1.lastIndexOf("bro"));

//7. repeat() Method

let g1 = 'Test CFI ';
console.log(g1.repeat(10));


//8. replace()

let h1 = 'Hello World';
console.log (h1.replace('Hello', 'Bye'));


//9. split Mwthod

let i1 = "Hello,I,am,Suhail";
console.log(i1.split(','));

//10. toUpperCase() Method

let j1 = "hello cfi students"
console.log( j1.toUpperCase());

//11. toLowerCase()
console.log(j1.toLowerCase());


//12. trim() Method

let k1 = ' Hello I am CFI   ';
console.log(k1.trim());


//13. slice() Method

let m1 = 'Hello';
console.log(m1.slice(0, 4));

//14. PadStart Method()

let n1 = "Hello";
console.log(n1.padStart(10, '*'));
console.log(n1.padEnd(10, '*'));
