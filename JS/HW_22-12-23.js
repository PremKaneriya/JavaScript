
// ---------------------- WithOut Logic ----------------------

// 6.    Finding the sum of all elements in an array.

// let arr = [1,2,3,4,5];

// const sumOfArr = () => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {    
//         sum = sum + arr[i];
//     }

//     console.log(sum);
// }

// sumOfArr();


// 7.    Finding the average of all elements in an array.

// let arr = [1,2,3,4,5];

// const avgOfArr = () => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {    
//         sum = sum + arr[i];
//     }

//     avg = sum / arr.length;

//     console.log(avg);
// }

// avgOfArr();

// 8.    Checking if an array contains a specific element.

// let arr = [12,44,663,'array'];
// let specific = 'array';

// const checkSpecificElem = () => {
//     if (arr.includes(specific)) {
//         console.log("With Specific Element");
//     } else {
//         console.log('No Specific Element');
//     }
// } 

// checkSpecificElem();


// 9.    Removing duplicates from an array.

// let arr = [22,77,54,77,65];

// const findDuplicate = () => {

//     let n = arr.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] == arr[j]) {
//                 for (let k = j; k < n; k++) {
//                     arr[k] = arr[k+1];
//                 }
//                 n--;
//                 j--;
//             } 

//         }

//     }   
//     arr.length = n;
//     console.log(arr);
// }

// findDuplicate();


// 10.    Merging two arrays into a new array.

// let arr = [11,22,33,44,55];
// let arr1 = [1,2,3,4,5];
// let mergeArr = [];

// const mergeArray = () => {
//     for (let i=0 ; i<arr.length ; i++ ) {
//         mergeArr = arr + arr1;
//     }

//     console.log(mergeArr);
// }

// mergeArray();

// ---------------------- With Logic ----------------------

// let arr = [23,54,67,98,83];

// const sumOfArr = arr.reduce((accum, currVal) => {
//     return accum + currVal;
// })

// console.log(sumOfArr);

// -------------------------------------------------------

// const avgOfArr = () => {
//     const sum = arr.reduce((accum, currVal) => {
//         return accum + currVal;
//     },0);

//     let avg = sum / arr.length;

//     console.log(avg);
// }

// avgOfArr();

// -------------------------------------------------------

// let arr = [12, 44, 663, 'array'];
// let elem = 'array'; 
// const checkSpecificEleem = () => {
//     if (arr.includes(elem)) {
//         console.log("Array contains the specific element");
//     } else {
//         console.log("Array does not contain the specific element");
//     }
// }

// checkSpecificEleem();

// -------------------------------------------------------

// let arr = [23, 46, 27, 86, 92, 55];

// const removeDuplicateArr = () => {
//     const answerArr = arr.reduce((accum, currVal) => {
//         return accum + currVal;
//     },0);

//     console.log(answerArr);
// }

// removeDuplicateArr();


// -------------------------------------------------------

// let arr = [22,43,56,76,89];
// let arr1 = [43,67,24,87,99];

// const mergeArr = () => {
//     const mgArr = arr.concat(arr1);

//     console.log(mgArr);
// }

// mergeArr();
