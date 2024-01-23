// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise in JavaScript is an object representing the eventual success or failure of an asynchronous operation, allowing more readable and structured handling of asynchronous code.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved');
    }, 2000)
})
.then(result => console.log(result)) // Resolved
.catch(error => console.log(error))
.finally(() => console.log('Finally'));

// The new Promise() constructor takes a callback function as an argument. The callback function takes two arguments: resolve and reject.

// The resolve() function is used to resolve the promise and the reject() function is used to reject the promise.



// The await operator is used to wait for a Promise and get its fulfillment value. It can only be used inside an async function or at the top level of a module.

// await is used in an asynchronous function to pause the execution of the function until a Promise is settled (resolved or rejected), and to resume execution of the function and return the resolved value. It can only be used within functions marked with the async keyword.


// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// Promise.all is a method in JavaScript that takes an iterable (e.g., an array) of promises as input and returns a single Promise that is fulfilled with an array of the results when all the input promises are fulfilled. If any of the input promises is rejected, the returned Promise is also rejected with the reason of the first rejected promise. It allows for parallel execution of multiple asynchronous operations and is commonly used when you need to wait for the completion of several asynchronous tasks before proceeding.