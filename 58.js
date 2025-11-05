//Asynchronous(non - Blocking)
//These are delegated to the browser or Node.js APIs and run in the background allowing JS to move on.

//Common Async operations:

//|                              TYPES                        |         EXAMPLE                                                  |
//|timers                                                     |    setTimeout(), setInterval()                                   |
//|promises                                                   | promise.resolve(), promise.reject(), then, catch                 |
//|async functions                                            | async function getData() {await fetch(...)}                      |
//|fetch API                                                  | fetch("https://api.examplr.com")                                 |
//|network requests                                           | XMLHTTPrequests, axious.get()                                    |
//|file system                                                | fs.readFile(), fs.writeFile() (async version)                    |
//|database queries                                           | mongoDB, mysql, queries, etc.                                    |
//|event listeners                                            | buttion, addEventlistener("click", .......)                      |
//|animation frames                                           | requestanimationFrame()                                          |
//|web workers                                                | background threads for heavy compulation                         |

//this execute in order and block the call stack until done.


