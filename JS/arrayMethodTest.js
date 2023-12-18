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


// ----------- Home Work ----------------------

// ------------ Pop -------------------------

// let plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']; // tomato
// let ans = plants.pop();
// console.log(ans);

// let nonVeg = ["chicken", "meat", "gosht", "fish"]; // fish
// let ans = nonVeg.pop();
// console.log(ans);

// let drinks = ["cola", "pepsi", "redbull", "monster"]; // monster
// let ans = drinks.pop();
// console.log(ans);


// ------------ Pop -------------------------

// ------------ push -------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"]; // Array(6) [ "Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon" ]
// let ans = fruits.push("Kiwi", "Lemon"); 
// console.log(fruits);

// let drinks = ["cola", "pepsi", "redbull", "monster"]; // Array(5) [ "cola", "pepsi", "redbull", "monster", "one8" ]
// let ans = drinks.push('one8');
// console.log(drinks);

// let vegetables = ["brocalli", "Carrots", "cauliflower", "beets"]; // Array(5) [ "brocalli", "Carrots", "cauliflower", "beets", "potatoes" ]
// let ans = vegetables.push('potatoes');
// console.log(vegetables);

// ------------ push -------------------------

// ------------ map -------------------------

// let numbers = [4, 9, 16, 25]; // Array(4) [ 2, 3, 4, 5 ]
// let root = numbers.map(Math.sqrt)
// console.log(root);

// let numbers = [65, 44, 12, 4]; // Array(4) [ 650, 440, 120, 40 ]
// let multiply = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }

// console.log(multiply);

// let age = [12,3,43,16,76,89];  // Array(6) [ true, true, false, true, false, false ]
// let teenAge = age.map((x) => x < 18);
// console.log(teenAge);

// ------------ map -------------------------

// ------------ Shift -------------------------

// let arr = [1, 2, 3];  // Array [ 2, 3 ]
// let ans = arr.shift();
// console.log(arr);

// let fruits = ["Banana", "Orange", "Apple", "Mango"];  // banana
// let ans = fruits.shift(); 
// console.log(ans);

// ------------ Shift -------------------------

// ------------ UnShift -------------------------

// let fruits = ["Banana", "Orange", "Apple", "Mango"];  // Array(6) [ "Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango" ]
// let ans = fruits.unshift("Lemon","Pineapple");
// console.log(fruits);

// const arr = [1, 2, 3];  // Array(5) [ 4, 5, 1, 2, 3 ]
// let ans = arr.unshift(4, 5);
// console.log(arr);

// ------------ UnShift -------------------------

// ------------ Splice -------------------------

// const months = ['Jan', 'March', 'April', 'June']; // Array(5) [ "Jan", "Feb", "March", "April", "June" ]
// let ans = months.splice(1, 0, 'Feb');
// console.log(months);

// const fruits = ["Banana", "Orange", "Apple", "Mango"]; // Array(6) [ "Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango" ]
// let ans = fruits.splice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

// let age = [11,34,54,88]; // Array(6) [ 11, 34, 54, 21, 83, 88 ]
// let ans = age.splice(3,0,21,83);
// console.log(age);

// ------------ Splice -------------------------


// ---------------------- // 
// split
// let sp = "how are you"; // Array(3) [ "how", "are", "you" ]
// let ans = sp.split(' ');
// console.log(ans); // string into elements and blocks

// let sp = "Good morning"; // Array [ "Good", "morning" ]
// let ans = sp.split(' ');
// console.log(ans);

// let sp = "hello"; // Array(5) [ "h", "e", "l", "l", "o" ] 
// let ans = sp.split('');
// console.log(ans);
// ----------------------------

// slice
// let sl = [1,2,3,4,5]; // Array(3) [ 3, 4, 5 ]
// let ans = sl.slice(2,5);
// console.log(ans); //  slice of the piece of array of given element 

// let sl = [10,22,34,45,55]; // Array(3) [22]
// let ans = sl.slice(1,2);
// console.log(ans); //  slice of the piece of array of given element 

// let sl = [10,22,34,45,55]; // Array [ 45, 55 ]
// let ans = sl.slice(3,5);
// console.log(ans); //  slice of the piece of array of given element 

// --------------------------------- 

// IndexOf
// let ind = [1,2,3,4,5,6,4]; // 3
// let ans = ind.indexOf(4);
// console.log(ans); // find index of element

// let ind = [1,2,3,4,5,6,4,3]; // 2  
// let ans = ind.indexOf(3);
// console.log(ans);

// let ind = [1,2,3,4,5,6,4,3]; // 1
// let ans = ind.indexOf(2);
// console.log(ans);

// ------------------------------------

// lastIndexOf
// let ind = [1,2,3,4,5,6,4]; // 6
// let ans = ind.lastIndexOf(4);
// console.log(ans); // find last index of element

// let ind = [1,2,3,4,5,6,4,2]; // 7
// let ans = ind.lastIndexOf(2);
// console.log(ans); // find last index of element

// let ind = [1,2,3,4,5,6,4,7,8,9,3]; // 10
// let ans = ind.lastIndexOf(3);
// console.log(ans); // find last index of element

// -------------------------------------

// Every 
// let age = [11,22,33,46,88]; // false
// let ans = age.every((fage) => fage > 18);
// console.log(ans); //  every element must be true, in boolean

// let percentage = [44,78,91,42,88]; // True
// let ans = percentage.every((per) => per > 40);
// console.log(ans); 

// let seniorCitz = [12, 66, 77, 88, 56]; // False
// let ans = seniorCitz.every((senior) => senior > 60);
// console.log(ans);

// ------------------------------------------

// Includes
// let fruits = ['banana', 'apple', 'kiwi', 'guava', 'orange']; // True
// let ans = fruits.includes('kiwi');
// console.log(ans); //  if one true, returns true in boolean

// let teenage = [14,55,66,19,20,21]; // True
// let ans = teenage.includes(21); 
// console.log(ans);

// let rollNo = [12,33,56,78]; // False
// let ans = rollNo.includes(3);
// console.log(ans);

// --------------------------------------------

// findIndex
// let num = [1,2,3,4,5,66,3]; // 5 
// let ans = num.findIndex((age) => age > 18);
// console.log(ans);  // only return first index that satisfy the condition

// let per = [33,55,89,91]; // 2
// let ans = per.findIndex((perCe) => perCe > 80);
// console.log(ans);

// let storage = [8,16,24,68]; // 2
// let maxStorage = storage.findIndex((gameS) => gameS > 16);
// console.log(maxStorage);

// ---------------------------------------------

// fill 
// let veges = ['potato', 'tomato', 'chili', 'brocalli']; // Array(4) [ "vegan", "vegan", "chili", "brocalli" ]
// let ans = veges.fill('vegan', 0,2);
// console.log(ans); // fill the given element and overwrite

// let fruits = ['apple','banana', 'pinapple', 'kiwi']; // Array(4) [ "apple", "orange", "orange", "kiwi" ]
// let ans = fruits.fill('orange', 1,3);
// console.log(ans);

// let changeRoll = [1,2,3,4,5]; // Array(5) [ 1, 2, 44, 4, 5 ]
// let ans = changeRoll.fill(44,2, 3);
// console.log(ans);

// ------------------------------------------------

// Sort
// let roll_no = [12,19,18,17,25,26,99];  // Array(7) [ 12, 17, 18, 19, 25, 26, 99 ]
// let ans = roll_no.sort();
// console.log(ans);  // Puts all in acending and use UTF function to compare or return string

// let marks = [45,66,98,23,77,100]; // Array(6) [ 23, 45, 66, 77, 98, 100 ]
// let ans = marks.sort((a, b) => a - b);
// console.log(ans);

// let age = [45,66,98,23,77,100];// Array(6) [ 100, 23, 45, 66, 77, 98 ]
// let ans = age.sort();
// console.log(ans);

// -------------------------------------------------

// Reverse
// let rev = [1,2,3,4,5];
// let ans = rev.reverse();
// console.log(ans); //  just do reverse
