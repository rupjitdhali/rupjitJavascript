//Synchronous vs Asynchronous

/*
In synchronous code, each line runs one after another, waiting for the previous one to finish before moving on.
*/
//➡️JS waits for each line to complete before running the next one.

//These run immediately, line-by-line, and block the next task until they finish

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// // | Type                             |  Example                                                       |
//    | ---------------------------------|----------------------------------------------------------------|
//    | Normal code execution            | `console.log()`, variable declarations                         |
//    | Math operations                  | `let sum = a + b;                                              |
//    | Loops                            | `for`, `while`, `do...while`                                   |
//    | Conditional statements           | `if`, `else`, `switch`                                         |
//    | Function calls (normal)          | `function myFunc() []` -> `myFunc();`                          |
//    | JSON parsing                     | `JSON.parse()`, `JSON.stringify()`                             |
//    | DOM manipulation (usually)       | `document.getElementById()`, `element.innerHTML = "..."        |
//    | Error handling                   | `try { ... } catch (err) { ... }`                              |
//    | Blocking alerts                  | `alert(), `prompt()`, `confirm()`                              |