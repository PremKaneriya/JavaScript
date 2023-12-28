// Learn to access Objects

// const person = {
//     name: "amit",
//     Age : "20"
// }

// console.log(person.name, person["Age"]);


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//     },
//     {
//         name: "Piyush",
//         age: 40,
//     }
// ];

// console.log(person[0].name, person[1].age);

// person.map((v) => {
//     console.log(v.name, v.age);
// })


// const person = [    
//     {
//         name: "Amit",
//        age: 25,
//        course: [
//            "c",
//            "html"
//        ]
//     }
    
// ];  

// person.map((v) => {
//     console.log(v.name, v.age);

//     v.course.map((v) => console.log(v))

// })


// const person =[
//     {
//         name:"amit",
//         age:19,
//         course:[
//             "c",
//             "html"
//         ]
//     },
//     {
//         name:"mayur",
//         age:20,
//         course:[
//              "c",
//              "html"
//             ]
//     }
// ];

// person.map((v) => {
//     console.log(v.name, v.age);

//     v.course.map((v) => console.log(v))
// })

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// };

// for (let k in data) {
//     if (k === 'personal_info') {
//         for(let j in data[k]){
//             console.log(data[k][j]);
//         }
//     } else if (k === 'courses') {
//         data.courses.map((v) => console.log(v));
//     } else if (k === 'branches') {
//         for (let i in data[k]) {
//             for (let p in data[k][i]) {
//                 console.log(data[k][i][p]);
//             }           
//         }
//     }
// }

// const myObj = {
//     name:"jd",
//     age:20,
//     cars:{
//         car1:"ford",
//         car2:"breza",
//         car3:"BMW"
//     }
// }

// for (let k in myObj) {
//     if (k === 'cars') {
//         for (let j in myObj[k]) {
//             console.log(myObj[k][j]);
//         }
//     } else {
//         console.log(myObj[k]);
//     }
// }

//{
    // One Rule
    // when object forin,
    // when array map
//}