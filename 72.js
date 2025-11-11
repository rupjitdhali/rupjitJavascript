//Math Methods

/*
In JavaScript, the Math object provides a set of built-in mathematical methods and constants for performing common math operations - like rounding numbers, generating random values, trigonometry, logarithms, etc.

*/

// Method                    Description                              Example            Output 

// math.abs(x)               Returns absolute positive value         Math.abs(- 9)        9

// math.round(x)             Rounds to nearest integer               Math.round(4.7)      5

// math.ceil(x)              Rounds up                               Math.ceil(4.1)       5

// math.floor(x)             Rounds down                             Math.floor(4.9)      4

// math.trunc(x)             Removes decimal part                    Math.trunc(4.9)      4

// math.sign(x)              Returns 1, -1, or 0(sign of number)     math.sign(-5)        -i


//Random Numbers

//Method                      Description                                                             Example                                  Output

Math.random()                 Returns random number between 0 (inclusive) and 1 (exclusive)           Math.random()                            0.3847...

Custom range                  Random between min and mix                                              Math.random() * (mex - min) + min        

Exanple(1-10)                 Random ineger between 1 and 10                                          Math.floor(Math.random() * 10) + 1       e.g. 7