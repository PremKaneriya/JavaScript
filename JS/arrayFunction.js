// Split()
// The split method is used to split a string into an array of substrings based on a specified delimiter.
// let sen = 'hello how are you';
// let ans = sen.split('');
// console.log(ans);


// Slice()
// The slice method extracts a portion of an array and returns a new array without modifying the original.
// let num = [1,2,3,4,5];
// let ans = num.slice(1, 4);
// console.log(ans);


// Map() 
// The map method creates a new array by applying a function to each element of an existing array.
//  The map() method of Array creates a new array populated with the results of calling a provided function on every element in the calling array. 
// let num = [10,20,30,40,50];
// let ans = num.map((x) => x * 2);
// console.log(ans);


// Filter()
// The filter method creates a new array with elements that satisfy a given condition.
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// let age = [10, 18, 5, 8, 9, 90, 33, 55];
// let res = age.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(res);


// Reduce()
// The reduce() method of Array executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
// let arr = [1,2,3,4,5];
// let iniVal = 0;
// let sum = arr.reduce((accum, currVal) => accum + currVal, iniVal);
// console.log(sum);


// indexOf()
// The indexOf method returns the first index at which a given element is found in the array, or -1 if it is not present.
// let fruit = ['apple', 'banana', 'orange'];
// let index = fruit.indexOf('banana');
// console.log(index);


// lastIndexOf()
// The lastIndexOf method returns the last index at which a given element is found in the array, or -1 if it is not present.
// let num = [1,2,3,4,5,6];
// let lastIndex = num.lastIndexOf(4)
// console.log(lastIndex); 


// Every()
// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
// let num = [2, 4, 6, 8, 10];
// let even = num.every(function (allEven) {
//     return allEven % 2 === 0;
// })
// console.log(even);


// Includes()
// The includes method checks if a specific element is present in the array, returning true or false as appropriate.
// let fruits = ['apple', 'banana', 'orange'];
// let includes = fruits.includes('apple');
// console.log(includes);


// findIndex()
// The findIndex method returns the index of the first element in the array that satisfies a given condition.  If no elements satisfy the testing function, -1 is returned.
// let num = [1,45,66,85, 23];
// let large = (elem) => elem > 60;
// console.log(num.findIndex(large));


// Fill()
// The fill method fills all the elements of an array with a static value. The fill() method overwrites the original array.
// let veges = ['Brocalli', 'Salad', 'Tomato'];
// let ans = veges.fill('olives', 0, 2)
// console.log(ans);


// Sort()
// The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// let fruits = ['banana', 'apple', 'orange', 'grapes', 'dragonfuit'];
// let ans = fruits.sort();
// console.log(fruits);


// Reverse()
// The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// let num = [1,2,3,4,5];
// let ans = num.reverse();
// console.log(ans);

