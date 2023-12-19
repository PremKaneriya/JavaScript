let arr = [10, 20, 30, 40, 50];

// push
arr.push(60);
console.log("After push:", arr);

// pop
arr.pop();
console.log("After pop:", arr);

// shift
arr.shift();
console.log("After shift:", arr);

// unshift
arr.unshift(5);
console.log("After unshift:", arr);

// every
let isEveryGreaterThanZero = arr.every(num => num > 0);
console.log("Every element greater than 0:", isEveryGreaterThanZero);

// some
let isSomeGreaterThan30 = arr.some(num => num > 30);
console.log("Some element greater than 30:", isSomeGreaterThan30);

// includes
let includes40 = arr.includes(40);
console.log("Includes 40:", includes40);

// splice
arr.splice(2, 2, 35, 45);
console.log("After splice:", arr);

// slice
let slicedArr = arr.slice(1, 4);
console.log("Sliced array:", slicedArr);

// map
let squaredArr = arr.map(num => num * num);
console.log("Squared array:", squaredArr);

// findIndex
let indexGreaterThan30 = arr.findIndex(num => num > 30);
console.log("Index of element greater than 30:", indexGreaterThan30);

// indexOf
let indexOf40 = arr.indexOf(40);
console.log("Index of 40:", indexOf40);

// lastIndexOf
let lastIndexOf30 = arr.lastIndexOf(30);
console.log("Last index of 30:", lastIndexOf30);

// split (Note: Split is not an array method, but it's often used with arrays)
let str = "apple,orange,banana";
let splitArr = str.split(",");
console.log("Split array:", splitArr);

// filter
let filteredArr = arr.filter(num => num > 20);
console.log("Filtered array (greater than 20):", filteredArr);

// fill
arr.fill(0);
console.log("After fill with 0:", arr);

// sort
arr.sort((a, b) => a - b);
console.log("After sorting in ascending order:", arr);

// reduce
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array elements:", sum);

// reverse
arr.reverse();
console.log("After reverse:", arr);
