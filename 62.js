//throw in js
/*
throw is used to manually create (throw) an error in your code. 

You can think of it like saying:

"If something goes wrong here, stop everything and jump to the catch block."
*/

try {
    let age = 15;
    if (age < 18) {
        throw "You must be 18 or older";
    }
    console.log('Welcome');
} catch (error) {
    console.log(error);
}