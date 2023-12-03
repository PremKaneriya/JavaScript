// ------------ Date ------------------------

//The Date object in JavaScript is a built-in object that provides methods for working with dates and times.

//The Date object provides various methods for getting and setting different components of a date, such as year, month, day, hours, minutes, seconds, and milliseconds. 

let currentDate = new Date;
console.log(currentDate);

// --------------- Math -------------------

// The Math object in JavaScript is a built-in object that provides a set of properties and methods for performing mathematical operations, It's Static.
// In JavaScript, the Math object is a built-in object that provides a collection of mathematical functions and constants. 
//These functions include operations like square root, absolute value, trigonometric functions, and logarithms.
//This Math object simplifies complex mathematical calculations in JavaScript applications.

let m = Math;

console.log(m);
console.log("The Value of Math.E is=", Math.E);
console.log("The Value of Math.LN10 is=", Math.LN10);
console.log("The Value of Math.LN2 is=", Math.LN2);
console.log("The Value of Math.LOG10E is=", Math.LOG10E);
console.log("The Value of Math.LOG2E is=", Math.LOG2E);
console.log("The Value of Math.PI is=", Math.PI);
console.log("The Value of Math.SQRT1_2 is=", Math.SQRT1_2);
console.log("The Value of Math.SQRT2 is=", Math.SQRT2);
let randomNumber = Math.random();
console.log("Random num", randomNumber);
// ---------------- Objects ------------------ 
// Objects in JavaScript are complex data types that allow you to store and organize data using key-value pairs. 

//Objects consist of key-value pairs, where each key is a unique identifier (string or symbol) associated with a specific value.

// You can add, modify, or remove properties and methods from an object on the fly, making them adaptable to changing requirements in your code. 

// These are 5 Types of Objects
//Object Literal:
//Object Constructor:
//Object.create():
//Function Constructor:
//Class (ES6 and later):

const bioDate = {
    firstName: "John",
    lastName: "Jenson",
    age: 34,
    education: true,
    salary: undefined,
    savings: null,
}

console.log(bioDate);
console.log(bioDate.age);
console.log(bioDate.firstName);
console.log(bioDate.savings);