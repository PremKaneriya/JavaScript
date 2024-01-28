// let obj1 = {
//     name: 'Javascript',
//     duration: '12 Months',
//     language: 'English',
// }

// Object.prototype.Prem = function(){
//     console.log('Hello');
// }

// console.log(obj1);

// const promise1 = fetch('https://jsonplaceholder.typicode.com/posts')
// const promise2 = fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
// const promise3 = fetch('https://jsonplaceholder.typicode.com/posts')

// const allPromise = Promise.all([promise1, promise2, promise3])
//     .then((respone) => {
//         return Promise.all(respone.map((v) => v.json()))
//     })

//     allPromise.then((v) => console.log('API Data' , v))
//     allPromise.catch((c) => console.log(c))


// const myApi = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) =>{
//         console.log(data);
//     })

// const myPromise1 = fetch('https://jsonplaceholder.typicode.com/posts') 
// const myPromise2 = fetch('https://jsonplaceholder.typicode.com/posts') 
// const myPromise3 = fetch('https://jsonplaceholder.typicode.com/posts')

// const allPromise = Promise.all([myPromise1, myPromise2, myPromise3])
//     .then((response) => {
//         return Promise.all(response.map((res) => res.json()))
//     })
//     .then((v) => {
//         console.log('API Data', v);
//     })

// const fetching = async () => {
//     const api = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const dataResponse = await api.json();
//     console.log(dataResponse);
// }
// fetching()

const fetchrr = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await api.json()
    console.log(response); 
}

fetchrr()