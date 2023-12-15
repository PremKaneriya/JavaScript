// Split

// let char = 'Hello World';
// let ans = char.split('');
// console.log(ans);

// Slice

// let num = [1,2,3,4,5,6,7,8];
// let ans = num.slice(2,5); // 3,4,5
// console.log(ans);

// Filter

// let age = [12,4,77,44,22,43];
// let ans = age.filter(wantLicence);

// function wantLicence(age) {
//     return age >= 15
// }

// console.log(ans);

// Every

// let num = [3,5,9,13];
// let odd = num.every( function (odd) {
//     return odd % 2 === 1;
// })

// console.log(odd);

// includes

// let veganFood = ["greenLeaf", "tofu", "caremal", "fruits"];
// let ans = veganFood.includes("tofu");
// console.log(ans);

// sort
// Utf 16 units value, sse
// let num = [33,44,1,5,3,788];
// let ans = num.sort();
// console.log(ans); 

// reverse
// let num = [1,2,3,4,5];
// let ans = num.reverse();
// console.log(ans); 

// fill 
// let heros = ["spideman", "batman", "ironman"];
// let ans = heros.fill('Joker',1,3)
// console.log(ans);

// ----------------------------------------------------- //

// Map

// let rollno = [2,44,76,25,19];

// Iteration
// for (let i = 0; i < rollno.length; i++) {
//     console.log(rollno[i]);
    
// }

// ForEach
// rollno.forEach((v, i) => {
//     console.log(v, i);
// })

// Using Map
// rollno.map((v, i) => {
//     console.log(i, v);
// })

// rollno.map((v, i) => console.log(v, i));

// Arrow Function

// const disp = (a, b) => {
//     console.log("Hello", a, b);
// }

// disp(11, 22);

// const disp = (a, b) => console.log("hello", a, b);

// disp(11, 22);

// ---------------------- // 
// split
// let sp = "how are you";
// let ans = sp.split(' ');
// console.log(ans); // string into elements and blocks

// slice
// let sl = [1,2,3,4,5];
// let ans = sl.slice(2,5);
// console.log(ans); //  slice of the piece of array of given element 

// IndexOf
// let ind = [1,2,3,4,5,6,4];
// let ans = ind.indexOf(4);
// console.log(ans); // find index of element

// lastIndexOf
// let ind = [1,2,3,4,5,6,4];
// let ans = ind.lastIndexOf(4);
// console.log(ans); // find last index of element

// Every 
// let age = [11,22,33,46,88];
// let ans = age.every((fage) => fage > 18);
// console.log(ans); //  every element must be true, in boolean

// Includes
// let fruits = ['banana', 'apple', 'kiwi', 'guava', 'orange'];
// let ans = fruits.includes('kiwi');
// console.log(ans); //  if one true, returns true in boolean

// findIndex
// let num = [1,2,3,4,5,66,3];
// let ans = num.findIndex((age) => age > 18);
// console.log(ans);  // only return first index that satisfy the condition

// fill
// let veges = ['potato', 'tomato', 'chili', 'brocalli'];
// let ans = veges.fill('vegan', 0,2);
// console.log(ans); // fill the given element and overwrite

// Sort
// let roll_no = [12,19,18,17,25,26,99];
// let ans = roll_no.sort();
// console.log(ans);  // Puts all in acending and use UTF function to compare or return string

// Reverse
// let rev = [1,2,3,4,5];
// let ans = rev.reverse();
// console.log(ans); //  just do reverse
