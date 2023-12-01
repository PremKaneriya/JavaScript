// Operators in JavaScript

// Arithmatic Operators

// let a = 6;
// let b = 4;
console.log("(Addition)a + b =", a + b);
console.log("(Subtraction)a - b =", a - b);
console.log("(Multiplication)a * b =", a * b);
console.log("(Division)a / b =", a / b);
console.log("(Modulus)a % b =", a % b);

// unary 
// (Post Increment)a++         (Post Increment)a--
// (Pre Increment)++a          (Pre Increment)--a

// Assignment Operators
// let a = 6;
// let b = 4;

console.log("(Addition)a += b =", a += b);  //a = a + b
console.log("(Subtraction)a -= b =", a -= b);  // a = a - b
console.log("(Multiplication)a *= b =", a *= b);  //  a = a * b
console.log("(Division)a /= b =", a /= b); // a = a / b
console.log("(Modulus)a %= b =", a %= b);  // a = a % b

// Comparison Operators
// let a = 6;
// let b = 4;

console.log("(Equal to) a == b", a == b);
console.log("(Equal to & type) a === b", a === b); //(strict equality) check datatype also if not same false
console.log("(Not Equal) a != b", a != b);
console.log("(Not Equal to & type)a !== b", a !== b); //(strict inequality) check datatype also if same true

// Logical Operators
let a = 6;
let b = 4;
let isFalse = false;
let isTrue = true;

console.log("a > b && b < a =",a > b && b < a); // Logical And Both should be ture
console.log("a > b || b > a =",a > b || b > a); // Logical Or anyone can be true
console.log("!isfalse =", !isFalse); // If the operand is false, ! will return true. 
console.log("!isTrue =", !isTrue);  // If the operand is true, ! will return false.
