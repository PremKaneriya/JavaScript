// Var 

// we can declare same name variables
// var x = 10;
// var x = 20;

// console.log(x); // 20

// var does not use any block scope

// var x = 10;
// {
//     var x = 20;
// }

// console.log(x); // 20

// var x;
// console.log(x); // undefined

// -------------------let-------------------------

// let
// we cannot redeclare same name variables

// let x = 10;
// let x = 20;
// console.log(x); // error

// let have a block scope
// let x = 10;
// {
//     let x = 20;
// }

// console.log(x); // 10

// let x = 10;
// x = x + 5;
// console.log(x); // 15

// let x; // declaration
// x = 10; // intializaton
// console.log(x); // 10 

// --------------- Const ---------------------

// we cannot declare same name variables
// const x = 10;
// const x = 20;
// console.log(x); // error

// We cannot change the value of const variables
// const x = 10;
// x = x + 5;

// console.log(x); // error

// Declare and initialize must be done at same time
// const x;
// x = 10;
// console.log(x); // error

// const have a block scope
// const x = 10;
// {
// x = 20; 
// }
// console.log(x); // 10