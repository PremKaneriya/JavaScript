// 1.    Finding the maximum element in an array.

// let arr = [11,22,876,33,4,56];
// let ans = Math.max(...arr);
// console.log(ans);


// 2.    Finding the minimum element in an array.

// let arr = [11,22,876,33,4,56];
// let ans = Math.min(...arr);
// console.log(ans);


// 3.    Sorting an array in ascending order.

// let arr = [99,65,67,86,55,77,88];
// let ans = arr.sort();
// console.log(ans);


// 4.    Sorting an array in descending order.

// let arr = [99,65,67,86,55,77,88];
// let ans = arr.sort();
// ans.reverse();
// console.log(ans);


// 5.    Reversing an array.

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let ans = arr.reverse();
// console.log(ans);


// 6.    Finding the sum of all elements in an array.

// let arr = [1,2,3,4,5];
// let ans = arr.reduce(function(accum, v) {
//     return accum + v;
// },0);
// console.log(ans);

// -------------- With Logic --------------------------- // 

// 1.    Finding the maximum element in an array.

// let arr = [11, 2, 356, 67, 44]; // Array(5) [ 356, 67, 44, 11, 2 ]

// const findMax = () => {

//     const max = arr.sort((a, b) => b - a);

//     console.log(max);
// }

// findMax();

// 2.    Finding the minimum element in an array.

// let arr = [11, 2, 356, 67, 44]; // Array(5) [ 2, 11, 44, 67, 356 ]

// const findMin = () => {

//     const min = arr.sort((a, b) => a - b);

//     console.log(min);
// }

// findMin();



// 3.    Sorting an array in ascending order.

// let arr = [12, 53, 86, 3, 78];

// const assendingArr = () => {
//     let temp;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     console.log(arr);

// }

// assendingArr();



// 4.    Sorting an array in descending order.

// let arr = [12, 53, 86, 3, 78];

// const desendingArr = () => {
//     let temp;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }

//     console.log(arr);

// }

// desendingArr();



// 5.    Reversing an array.

let arr = [23,4,86,89,243,36];

const reverseArr = () => {

    let newArr = [];

    for (let i = arr.length - 1; i >= 0 ; i--) {
        newArr.push(arr[i]);
    }

    console.log(newArr);

}

reverseArr(); 