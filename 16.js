// Explicit Conversion

//1. Using Number() Method

let a = Number("10");
console.log(a);

a = Number(true);
console.log(a);
a = Number(null);
console.log(a);
a = Number('');
console.log(a);
a - Number('hello');
console.log(a); //0

//String Method
let b;
b = String(234);
console.log(b);
b - String(true);
console.log(b);
b = String(null);
console.log(b);
b = String(undefined);
console.log(b);

//Boolean Method

let c;
c = Boolean(1)
console.log(c)
c = Boolean(undefined)
console.log(c)
c = Boolean(null)
console.log(c)
c = Boolean("24")
console.log(c)
