// try...catch...finally
// It's a way to handle errors in Javascript so your program doesnt crash

// Syntax

try {
    //code that might cause an error
} catch (error) {
    //code that runs *if* an error happens
} finally {
    // Code that always runs (error or not)
}

try {
    let output = 10 / 0;
    console.log(output);
} catch (error) {
    console.log(error);
}

try {
    let output = 10 / 0;
    console.log(output); //Infinity
    // console.log(output + a);
} catch (error) {
    console.log('Error');
    console.log(error.name, error.message);
} finally {
    console.log('Hello I ll be there');
}


