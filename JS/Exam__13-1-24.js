// Q-1 [Each 1 Marks]

// let arr1 = [10,8,61,31,5];

// 1. Change 61 to 20.
// arr1[2] = 20;

// 2. Delete 8
// arr1.splice(1,1);

// 3. Add 20,30,40 after 10
// arr1.splice(1,0,20,30,40)

// 4. Find index of 5
// const ans = arr1.indexOf(5)

// console.log(ans);

// 5. Search 99 is available or not
// const ans = arr1.includes(99)

// ----------------------------------------------------

// Q-2 [Each 2 Marks]

// let arr2 = [10, 20, 30, 40, 50];
// let arr3 = [6, 9, 80];

// 1. Merge arr2 and arr3
// let ans = arr2.concat(arr3);

// 2. Get 20, 30, 40 as array from arr2
// let ans = arr2.slice(1,4);
// console.log(ans);

// 3. Give sum of all element of arr3 using reduce function
// let ans = arr3.reduce((curr, ind) => curr + ind);
// console.log(ans);

// 4. Check all element is greater than 10 or not from arr3
// let ans = arr3.every((v) => v > 10);
// console.log(ans);

// 5. Sort arr3 in descending order.
// let ans = arr3.sort((a, b) => b - a);
// console.log(ans);

// ----------------------------------------------------

// Q-3 [Each 2 Marks]

// let obj1 = {
//     id: 101,
//     name: 'amit',
//     city: 'surat'
// }

// 1. Check ‘percentage’ key is available or not in obj1.
// let ans = obj1.percentage;
// console.log(ans);

// 2. Add new property favColor: ‘blue’ in object.
// obj1.favColor = 'blue';
// console.log(obj1);

// 3. Change city to ‘vapi’
// obj1.city = 'vapi';
// console.log(obj1);

// 4. Convert all property to array.
// let arr = Object.entries(obj1);
// console.log(arr);

// 5. Delete ‘city’ property from obj1.
// delete obj1.city;
// console.log(obj1);

// ----------------------------------------------------

// Q-4 [Each 3 Marks]

// let arr4 = [
//     {id: 1, name: 'mobile', price: 8000, qty: 20},
//     {id: 2, name: 'laptop', price: 50000, qty: 3},
//     {id: 3, name: 'book', price: 120, qty: 60},
//     {id: 4, name: 'botle', price: 50, qty: 10},
//     {id: 5, name: 'ac', price: 35000, qty: 2}
// ]

// 1. Display all data in table format

// let print;

// print = print + '<table>'

// let ans = arr4.map((v) => {

//     print = print + `<tr>
//                         <td>${v.id}</td>
//                         <td>${v.name}</td>
//                         <td>${v.price}</td>
//                         <td>${v.qty}</td>
//                     </tr>`   
// });

// print = print + '</table>'

// document.getElementById("dispTable").innerHTML = print


// 2. Remove botle data from arr4
// arr4.splice(3,1)
// console.log(arr4);


// 3. Search ‘ac’ is available or not in arr4

// 4. Only Increase qty of laptop to 5


// 5. Give list of all products that have price more than 20000.
// let ans = arr4.filter((v) => v.price > 20000);
// console.log(ans);


// ----------------------------------------------------


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

for (const person of complexData) {

    console.log(person.id, person.name, person.age);
    console.log(person.contact.email, person.contact.phone.home, person.contact.phone.mobile);

    for (const skill of person.skills) {
        console.log(skill);
    }

    for (const project of person.projects) {
        console.log(project.projectName);
        for (const tech of project.technologies) {
            console.log(tech);
        }
        for (const member of project.team) {
            console.log(member.name, member.role);
        }
    }
    
}