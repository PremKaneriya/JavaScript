
// const fetchData = fetch('https://fakestoreapi.com/carts')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// create a callback hell

// const fetchData = fetch('https://fakestoreapi.com/carts')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         return fetch('https://fakestoreapi.com/products')
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 return fetch('https://fakestoreapi.com/products')
//                     .then((res) => res.json())
//                     .then((data) => {
//                         console.log(data);
//                         return fetch('https://fakestoreapi.com/products')
//                             .then((res) => res.json())
//                             .then((data) => {
//                                 console.log(data);
//                             });
//                     });
//             });
//     })


console.log('Program Start');

const promise1 = fetch('https://fakestoreapi.com/products')
const promise2 = fetch('https://fakestoreapi.com/carts')
const promise3 = fetch('https://fakestoreapi.com/products')

const allPromise = Promise.all([promise1, promise2, promise3])
    .then((response) => {
        return Promise.all(response.map((r) => r.json()));
    })

    allPromise
        .then((v) => console.log(v))

console.log('Program Running');
