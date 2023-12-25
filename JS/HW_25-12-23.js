// 11.    Splitting an array into two arrays based on a condition.

// let mixArr = [11,'Java',22, 'script',33,'Programming',44, 'language', 55];

// let numArr = mixArr.filter((a) => typeof a === 'number'); 
// let strArr = mixArr.filter((a) => typeof a === 'string');

// console.log(strArr);
// console.log(numArr);

// 13.    Rotating an array by a given number of positions.

// let orgArr = [10,20,30,40,50];

// const rotateElem = (arr, positions) => {
//     const n = arr.length;

//     let ADJpositions = positions % n;

//     return arr.slice(-ADJpositions).concat(arr.slice(0, n - ADJpositions));

// } 
// const numOfPos = 2;
// const rotatedArray = rotateElem(orgArr, numOfPos);

// console.log(rotatedArray);

// 14.    Finding the second largest element in an array.

// function findSecondLargest(arr) {
    // Handle edge cases
    if (arr.length < 2) {
      return null; // Not enough elements to have a second largest
    }
  
    // Find the largest and second largest elements in a single pass
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (const num of arr) {
      if (num > largest) {
        secondLargest = largest; // Shift the previous largest to second
        largest = num; // Update the largest
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num; // Update second largest if it's greater
      }
    }
  
    return secondLargest;
  //}
  
  // Example usage:
 // const myArray = [10,20,30,40,33];
 // const secondLargestElement = findSecondLargest(myArray);
 // console.log('Second Largest :',secondLargestElement); // Output: 8 
  

//  15.    Finding the k-th smallest element in an array.

// function findKthSmallest(arr, k) {
//     arr.sort((a, b) => a - b); // Sort the array in ascending order
//     return arr[k - 1]; // Access the k-th smallest element (1-indexed)
// }

// Example usage:
// const myArray = [5, 2, 8, 1, 9];
// const k = 3; // Find the 3rd smallest element
// const kthSmallest = findKthSmallest(myArray, k);
// console.log(kthSmallest); // Output: 5

// 17.    Finding the median of an array.

// function findMedian(arr) {
//     const sortedArr = [...arr].sort((a, b) => a - b);
//     const middle = Math.floor(sortedArr.length / 2);

//     if (sortedArr.length % 2 === 0) {
//         return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
//     } else {
//         return sortedArr[middle];
//     }
// }

// // Example usage:
// const myArray = [5, 2, 8, 1, 9];
// const medianValue = findMedian(myArray);
// console.log(medianValue); // Output: 5
