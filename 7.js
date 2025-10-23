//Function Scope                       VAR            LET          CONST
//Inside of Function                   yes            yes          yes
//Outside of Function                   no            no             no

//declaration
function hello() {
    var a = 10;
}
console.log(a);

hello();//calling function