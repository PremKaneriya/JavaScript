// classtask

// const myPromise = new Promise((resolve, reject) => {
//     let a = 1+1;

//     if(a === 2){
//         resolve();
//     } else {
//         reject();
//     }
// });
// myPromise.then(() => {
//     console.log('Resolved');
// })
// .catch(() => {
//     console.log('Rejected');
// })
// .finally(() => {
//     console.log('Finally');
// })

// -----------------------------------------------
// Promise

// console.log('Program Start');

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = {id: 101, name: 'Amit'}
//         resolve(data);
//     }, 2000);
// })
// myPromise
//     .then((res) => console.log(res));
// myPromise
//     .catch((error) => console.log('Got an Error', error));

// console.log('In the Program...');

// -----------------------------------------------
// fetch

// console.log('Program Start');

// const fetchData = async () => {
//     const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
//     const data = await response.json();
//     console.log(data);
// } 
// fetchData()

// console.log('Program in run');

// -----------------------------------------------
// promise.all

const promise1 = fetch('https://fakestoreapi.com/products')
const promise2 = fetch('https://fakestoreapi.com/carts')
const promise3 = fetch('https://fakestoreapi.com/users')

const allPromise = Promise.all([promise1, promise2, promise3])
    .then((response) => {
        return Promise.all(response.map((r) => r.json()))
    })

    allPromise
        .then((v) => console.log(v))
        .catch((e) => console.log(e))

