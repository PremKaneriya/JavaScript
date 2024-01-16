// Q-1 [Each 1 Marks]

// let arr1 = [10,8,61,31,5]; 

// arr1[2] = 20

// console.log(arr1);

// -----------------------

// const ans = arr1.splice(1, 1);
// console.log(ans);

// -------------------------

// const ans = arr1.splice(1,0,20,30,40)

// console.log(ans);   

// -------------------------

// let ans = arr1.indexOf(5)

// console.log(ans);

// ---------------------------

// let ans = arr1.includes(99);

// console.log(ans);

// ----------------------

// Q-2 [Each 2 Marks]

// let arr2 = [10,20,30,40,50];
// let arr3 = [6,9,80];

// const ans = arr2.concat(arr3);

// console.log(ans);

// ---------------------------

// let ans = arr2.splice(1,4)

// console.log(ans);

// ---------------------------


// const ans = arr3.reduce((accum, val) => {
//     return accum + val;
// })

// console.log(ans);

// ---------------------------


// const ans = arr3.every((v) => v > 10);

// console.log(ans);

// ---------------------------


// const ans = arr3.sort((a, b) => b - a);

// console.log(ans);

// ---------------------------




// Q-3 [Each 2 Marks]

// let obj1 = {
//     id: 101,
//     name: "amit",
//     city: "surat"
// }

// console.log(obj1.hasOwnProperty(percentage)); // undefined

// obj1.favColor =  'blue',

// obj1.city = 'vapi'

// console.log(Object.entries(obj1)); convert into array

// delete obj1.city

// console.log(obj1);



// -----------------------------

// Q-4 [Each 3 Marks]

// let arr4 = [
//     { id: 1, name: 'mobile', price: 8000, qty: 20},
//     { id: 2, name: 'laptop', price: 50000, qty: 3 },
//     { id: 3, name: 'book', price: 120, qty: 60 },
//     { id: 4, name: 'botle', price: 50, qty: 10 },
//     { id: 5, name: 'ac', price: 35000, qty: 2 }
// ]



// let print;

// print = print + '<table>'

// const ans = arr4.map((v) => {
//     print = `<ul> <li> ${v} </li>` 
//     print = '</ul>'
// })

// print = print + '</table>'

// document.getElementById('table').innerHTML = print


// arr4.splice(3,1)
// console.log(arr4);

// let ans = arr4.filter((v) => v.price > 20000);
// console.log(ans);

// console.log(ans);




// ----------------------------------


const complexData = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        contact: {
            email: 'john@example.com',
            phone: {
                mobile: '123-456-7890',
                home: '987-654-3210'
            }
        },
        skills: ['JavaScript', 'React', 'Node.js'],
        projects: [
            {
                projectName: 'Project A',
                technologies: ['React', 'Node.js'],
                team: [
                    { name: 'Alice', role: 'Developer' },
                    { name: 'Bob', role: 'Designer' },
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 25,
        contact: {
            email: 'jane@example.com',
            phone: {
                mobile: '987-654-3210',
                home: '123-456-7890'
            }
        },
        skills: ['HTML', 'CSS', 'Vue.js'],
        projects: [
            {
                projectName: 'Project B',
                technologies: ['Vue.js', 'CSS'],
                team: [
                    { name: 'Charlie', role: 'Developer' },
                    { name: 'David', role: 'Tester' },
                ]
            },
        ]
    },
];




for (const k in complexData) {
    
}

// Q1 - 
// 1. 1 
// 2. 1
// 3. 1
// 4. 1
// 5. 1

// Q2 - 
// 1. 2
// 2. 2
// 3. 2
// 4. 2
// 5. 2

// Q3 - 
// 1. 2
// 2. 2
// 3. 2
// 4. 2
// 5. 2

// Q4 - 
// 1. 3
// 2. 2
// 3. 0
// 4. 0
// 5. 3

