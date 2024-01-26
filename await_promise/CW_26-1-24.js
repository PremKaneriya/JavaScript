// callback hell

// const first = (a, callback) => {
//     setTimeout(() => {
//         console.log("The first process");
//         callback(a+10);
//     }, 2000)
//   }
  
//   const second = (a, callback) => {
//     setTimeout(() => {
//         console.log("The second process");
//         callback(a*5);
//     }, 2000)
//   }
  
//   const third = (a, callback) => {
//     setTimeout(() => {
//         console.log("The third process");
//         callback(a-20);
//     }, 2000)
//   }
  
  
//   first(10, function(r1) {
//     second(r1, function(r2) {
//         third(r2, function(r3) {
//             console.log(r3);
//         })
//     })
//   });


// const first = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('First log')
//             resolve(a + 10)
//         }, 2000);
//     })
// }

// const second = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Second log')
//             resolve(a * 10)
//         }, 2000);
//     })
// }

// const third = (a) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Third log');
//             resolve(a - 20)
//         }, 2000);
//     })
// }

// first(10)
//     .then((data1) => second(data1))
//     .then((data2) => third(data2))
//     .then((data3) => console.log(data3))

// ------------------------------------------------------------------------

// Spreading

// let arr = [1,2,34,56]

// let arr1 = [...arr]

// Destructure

// const [first, second, third, fourth] = arr
// console.log(first); 

// spreading in object

// let obj = {
//     id : 101,
//     name:'amit',
//     city: 'surat'
// }

// let obj1 = {...obj, city:'vapi'}
// console.log(obj1);

