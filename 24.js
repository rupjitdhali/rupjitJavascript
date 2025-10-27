// Break and continue
 

for (let i = 1; i<= 10; i++) {
    console.log(i);
    if (i==5) {
        console.log("I have stopped");
        break;
    }
}


for (let i=1; i<=10; i++) {
    if (i==5) {
        continue;
    }
    console.log(i);
}