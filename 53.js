//for in loop

/*

👉 Used to loop through the properties (keys) of an oject or values
*/

let myDetails = {
    fullName: "Suhail",
    age: 10,
    isALive: true,
    isSleeping: null,
    isAwake: undefined,
};

for (let keys in myDetails) {
    console.log(keys, myDetails[keys]);
}
