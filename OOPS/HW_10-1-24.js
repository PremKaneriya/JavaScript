// Homework

// class Student {
//     constructor (n, r) {
//         this.name = n;
//         this.rollNo = r;
//     }

//     studentInfo() {
//         console.log('Name : ', this.name);
//         console.log('RollNo : ', this.rollNo);
//     }
// }

// class Course extends Student {
//     constructor(n, r, cname, f) {
//         super(n, r)
//         this.courceName = cname;
//         this.fees = f;
//     }

//     courseInfo() {
//         console.log('Course Name : ', this.courceName);
//         console.log('Fees : ', this.fees);
//     }   

//     discountInfo() {
//         if (this.rollNo >= 100) {
//             let discount = this.fees / 10;
//             console.log('Fees Discount : ', discount);
//         } else {
//             console.log('No Discount, Fees Are : ', this.fees);
//         }
//     }
    
// }

// const s1 = new Course('Amit', 100, 'Full Stack', 1000);

// s1.studentInfo();
// s1.courseInfo();
// s1.discountInfo();


// ------------------- Encapsulation ---------------------

// Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world. 
// Encapsulation helps in maintaining the integrity of data and ensures that it is not accessed or modified inappropriately.

// Encapsulation is a concept in Object-Oriented Programming (OOP) where the properties and methods of a class are bundled within a single unit or entity, i.e., an object.
// In JavaScript, encapsulation is achieved using closures

// class Student {
//     constructor() {
//         // Private properties
//         this._name;
//         this._marks;
//     }

//     // Getter and setter for name
//     get name() {
//         return this._name;
//     }
//     set name(name) {
//         this._name = name;
//     }

//     // Getter and setter for marks
//     get marks() {
//         return this._marks;
//     }
//     set marks(marks) {
//         this._marks = marks;
//     }
// }

// let s1 = new Student();

// // Using setters to set values
// s1.name = 'Jacobs';
// s1.marks = 45;

// // Using getters to retrieve values
// console.log(s1.name, s1.marks);


// -------------------- Abstraction --------------------

// Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

// Abstraction helps in reducing the complexity of code and ensures that the code is easy to understand and maintain. In JavaScript, abstraction can be achieved using abstract classes and interfaces.

// Abstraction in JavaScript is the concept of showing only the essential features of an object while hiding the complexity and unnecessary details. It allows you to hide the internal details of an object and only show the functionality.

// class Employee {
//     constructor(name, age, baseSalary) {
//         this.name = name;
//         this.age = age;
//         this.baseSalary = baseSalary;
//         this.monthlyBonus = 1000;
//     }

//     calcFinalSalary(){
//         let finalSalary = this.monthlyBonus + this.baseSalary;
//         console.log('Final Salary : ', finalSalary); 
//     }

//     getempDetails(){
//         console.log('Name : ', this.name);
//         console.log('Age : ', this.age);
//         this.calcFinalSalary();
//     }

// }

// let emp1 = new Employee('James', 45, 3000);
// emp1.getempDetails();
// emp1.monthlyBonus = 10000 // this is a glitch


// -------------------- Polymorphism -------------------- 

// Polymorphism in JavaScript refers to the ability of objects or functions to take on multiple forms based on the context in which they are used. This allows you to use a single interface to represent different types or classes and enables code to be more flexible and reusable.

// poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times.
// Polymorphism is the presentation of one interface for multiple data types.

// Polymorphism is the OOPs principle which provides the facility to perform one task in many ways. 



// Polymorphism is a core concept of object-oriented programming that allows objects to take on many forms depending on the context . It refers to the ability of different data types to be processed by a single function or method . In JavaScript, polymorphism can be achieved through prototype inheritance and method overloading.


class Animal {
    constructor(name) {
        this.name = name;
    } 

    eats() {
        console.log(this.name, 'Eats food');
    }
}

class Alligator extends Animal {
    eats() {
        super.eats();
        console.log(this.name, 'Eats snails');
    }
}

let aligator = new Alligator('Alligator');
aligator.eats();