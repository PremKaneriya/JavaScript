// 19.    Checking if two arrays are equal or not.

// let arr1 = [11,44,55,66,78];
// let arr2 = [11,44,55,66,78];

// let ans = arr1.every((a, index) => a === arr2[index]);

// console.log(ans);

// ----------------------------------------

// 23.    Finding the index of the first occurrence of an element in an array.

// let arr = [11,33,44,55,66,77,88,99,55];

// let ans = arr.indexOf(55);

// console.log("Index of the first occurrence:", ans);

// -----------------------------------------

// 24.    Finding the index of the last occurrence of an element in an array.

// let arr = [11,33,44,55,66,77,88,99,55];

// let ans = arr.lastIndexOf(55);

// console.log("Index of the first occurrence:", ans);

// -------------------------------------------

// ---------------------- ClassWork ----------------------------

// 19.    Checking if two arrays are equal or not.

// let arr1 = [11,22,33,44,55];
// let arr2 = [11,22,33,44,55];

// const findSame = (arr1, arr2) => {
    
//     if (arr1.length === arr2.length) {
//             let flag = true
//             arr1.map((v, i) => {
//                 if (arr1[i] !== arr2[i]) {
//                     flag = false;
//                 } 
//             });

//             if (flag) {
//                 console.log("Arrays are the same");
//             } else {
//                 console.log("Arrays are different");
//             }
        
//     } else {
//         console.log("not same");
//     }


// }

// findSame(arr1, arr2);

// ----------------------------------------------------

// 30.    Finding the first three maximum number's sum an array.

// let arr = [21,54,900,50,50];

// const trdMax = (arr, n) => {

//     let ans = arr.sort((a, b) => b - a)
//         .slice(0, n)
//             .reduce((curr, ind) => curr + ind);

//     console.log(ans);

// }

// trdMax(arr, 3)

// ------------------------------------------------------

// 28.    Checking if an array is sorted in ascending order.

// let arr = [11, 22, 3, 4, 5];
// const checkSortedAsc = (arr) => {

//     let flag = true;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//             flag = false;
//             break;
//         }
//     }
//     console.log(flag);
// }

// checkSortedAsc(arr);

// ---------------------------------------------------

// 29.    Checking if an array is sorted in descending order.

// let arr = [99,88,77,66,100];

// const checkSortedDec = (arr) => {

//     let flag = true;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[i+1]) {
//             flag = false;
//             break;
//         }
//     }
//     console.log(flag);
// }

// checkSortedDec(arr);

// ----------------------------------------------------

// 27.    Creating a new array with the elements of the original array in reverse order, without modifying the original array.

// let arr = [11,22,33,44,55];

// const reverseArr = (arr) => {

//     let arr2 = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr2.push(arr[i]);       
//     }

//     console.log(arr);
//     console.log(arr2);
// }

// reverseArr(arr);

// --------------------------------------------------------

// 25.    Removing all occurrences of an element from an array.

// let arr = [11,22,33,44,55,55,55];

// const removeElement = (arr, elem) => {

//     let arr2 = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != elem){
//             arr2.push(arr[i]);
//         }
//     }

//     console.log(arr2);

// }

// removeElement(arr,55);

// --------------------------------------------------------

// 26.    Replacing all occurrences of an element in an array with a new element.

// let arr = [11,22,33,44,55,55,55];

// const replaceElement = (arr, elem, newElem) => {
    
//     let arr2 = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         if (arr[i] == elem){
//             arr2.push(newElem)   
//         } else {
//             arr2.push(arr[i]);
//         }

//     }

//     console.log(arr2);

// }

// replaceElement(arr,11,100);