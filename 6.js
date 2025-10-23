//Single LIne Comments

/*
Multi Line comment

*/
// Scoping in Javascript

//There are thre  types of scoping in JS

//1. Block Scope
//2. Function Scope
//3. Global Scope

//Block Scope

/*
{

}

*/

//Block Scope                                     VAR                 LET                  CONST
//Inside of Block                                 Yes                 Yes                   Yes 
//Outside of Block                                Yes                  No                    No

var age = 10;
age = 20;


let box = 30;
box = 50;

const aadharCard = "123456789"

{
   const a = 10
   console.log(a)   
}