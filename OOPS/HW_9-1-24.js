// ------------ Object ------------ 

// const user = {
//     name : 'John',
//     age : 50,
//     country : 'United Kingdom',
//     profession : 'Actor',
//     netIncome : 500000
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.keys(user));
// Object.freeze(obj):
// Object.seal(obj):
// Object.getOwnPropertyNames(obj):
// Object.hasOwnProperty(prop):
// Object.seal(obj):
// Object.assign(target, source1, source2, ...):

// ------------ Class ------------ 

// The constructor method is a special method of a class for creating and initializing an object instance of that class.
// It is executed automatically when a new class is created

// The super keyword in JavaScript is used to call the constructor of a parent class in the constructor of a child class, ensuring that the parent class's initialization is performed.

// In a class, the this keyword refers to the instance of the class and is used to access or modify its properties and methods.

// The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// class appUser {
//     name ='John Jacobs';
//     dailyActive = true;
//     age = 50;
//     country = 'United Kingdom';
//     profession = 'Actor';
//     netIncome = 500000;
//     salary = 10000
// }

// const ans = new appUser;

// console.log(ans);

// class course {
//     courseName = 'Full Stack';
//     industry = 'IT';
//     duration = 12;
//     language = 'English';
//     present = true;
// }

// const ans = new course;

// console.log(ans);


// class info {
//     constructor() {
//         console.log('Class Run');
//     }
//     name() {
//         console.log('James Bond');
//     }
//     age() {
//         console.log(50);
//     }
// }

// const obj = new info;

// class bodyBuilding {
//     constructor() {
//         this.name = 'Jay Cutler'
//     }
// }

// const objName = new bodyBuilding;

// console.log(objName.name);

// class company {
//     constructor(name) {
//         this.name = name
//     }

//     logIn() {
//         console.log(this.name);
//     }
// }

// const obj = new company('FAANG');
// obj.logIn();




// ------------ Inheritance ------------ 
// To create a class inheritance, use the extends keyword.
// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.


// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
//     food() {
//         console.log(`${this.name} Eat food.`);
//     }
// }

// class dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks.`);
//     }
//     food() {
//         console.log(`${this.name} Eat Padigree.`);
//     }

// }

// const myDog = new dog('tommy');

// myDog.food()

// this:
// this refers to the current instance of the object or class in which it is used.
// Inside a class method, this is used to refer to the instance of that class.

// super:
// super is used to call functions on an object's parent, i.e., to call the parent class's methods.
// It is often used in the constructor of a child class to call the constructor of the parent class.

// extends:
//  extends is used to create a subclass (child class) that inherits properties and methods from a superclass (parent class).
//  It establishes a prototype chain between the child and parent classes.
