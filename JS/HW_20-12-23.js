let arr = [10, 20, 30, 40, 50];

// push
// arr.push(60); // Array(6) [ 10, 20, 30, 40, 50, 60 ]
// console.log("After push:", arr);

// pop
// arr.pop(); // Array(4) [ 10, 20, 30, 40 ]
// console.log("After pop:", arr);

// shift
// arr.shift(); // Array(4) [ 20, 30, 40, 50 ]
// console.log("After shift:", arr);

// unshift 
// arr.unshift(5); // Array(6) [ 5, 10, 20, 30, 40, 50 ]
// console.log("After unshift:", arr);

// every
// let isEveryGreaterThanZero = arr.every(num => num > 0); // Every element greater than 0: true
// console.log("Every element greater than 0:", isEveryGreaterThanZero);

// some
// let isSomeGreaterThan30 = arr.some(num => num > 30); // Some element greater than 30: true
// console.log("Some element greater than 30:", isSomeGreaterThan30);

// includes
// let includes40 = arr.includes(40); // Includes 40: true
// console.log("Includes 40:", includes40);

// splice
// arr.splice(2, 2, 35, 45); // Array(5) [ 10, 20, 35, 45, 50 ]
// console.log("After splice:", arr);

// slice
// let slicedArr = arr.slice(1, 4); // Array(3) [ 20, 30, 40 ]
// console.log("Sliced array:", slicedArr);

// map
// let squaredArr = arr.map(num => num * 10); // Array(5) [ 100, 200, 300, 400, 500 ]
// console.log("Squared array:", squaredArr);

// findIndex
// let indexGreaterThan30 = arr.findIndex(num => num > 30); // Index of element greater than 30: 3
// console.log("Index of element greater than 30:", indexGreaterThan30);

// indexOf
// let indexOf40 = arr.indexOf(40); // Index of 40: 3
// console.log("Index of 40:", indexOf40);

// lastIndexOf
// let lastIndexOf30 = arr.lastIndexOf(30); // Last index of 30: 2
// console.log("Last index of 30:", lastIndexOf30);

// split (Note: Split is not an array method, but it's often used with arrays)
// let str = "apple,orange,banana"; // Array(19) [ "a", "p", "p", "l", "e", ",", "o", "r", "a", "n", … ]
// let splitArr = str.split("");
// console.log("Split array:", splitArr);

// filter
// let filteredArr = arr.filter(num => num > 20); // Filtered array (greater than 20): Array(3) [ 30, 40, 50 ]
// console.log("Filtered array (greater than 20):", filteredArr);

// fill
// arr.fill(0, 2); //After fill with 0: Array(5) [ 10, 20, 0, 0, 0 ]
// console.log("After fill with 0:", arr);

// sort
// arr.sort((a, b) => a + b); // After desending in ascending order: Array(5) [ 50, 40, 30, 20, 10 ]
// console.log("After desending in ascending order:", arr);

// reduce
// let sum = arr.reduce((acc, curr) => acc + curr, 0); // Sum of array elements: 150
// console.log("Sum of array elements:", sum);

// reverse
// arr.reverse(); // After reverse: Array(5) [ 50, 40, 30, 20, 10 ]
// console.log("After reverse:", arr);
