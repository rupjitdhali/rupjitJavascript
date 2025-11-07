/*

A callback function is a function passed as an argument to another function,
and is called ('called back') later inside that function.

*/

function greet(a, b) {
    console.log('Hello ' + a);
    b(); //== afterGreeting()   
}

function afterGreeting() {
    console.log('Welcome to code.live!');
}

greet("Suhail", afterGreeting)