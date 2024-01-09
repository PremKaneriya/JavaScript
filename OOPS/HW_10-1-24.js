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




// -------------------- Abstraction --------------------

// Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

// Abstraction helps in reducing the complexity of code and ensures that the code is easy to understand and maintain. In JavaScript, abstraction can be achieved using abstract classes and interfaces.

// Abstraction in JavaScript is the concept of showing only the essential features of an object while hiding the complexity and unnecessary details. It allows you to hide the internal details of an object and only show the functionality.



// -------------------- Polymorphism -------------------- 

// Polymorphism in JavaScript refers to the ability of objects or functions to take on multiple forms based on the context in which they are used. This allows you to use a single interface to represent different types or classes and enables code to be more flexible and reusable.

// poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times.
// Polymorphism is the presentation of one interface for multiple data types.

// Polymorphism is the OOPs principle which provides the facility to perform one task in many ways. 



// Polymorphism is a core concept of object-oriented programming that allows objects to take on many forms depending on the context . It refers to the ability of different data types to be processed by a single function or method . In JavaScript, polymorphism can be achieved through prototype inheritance and method overloading.

// function add(x, y) {
//     return x + y;
//   }
  
//   function add(x, y, z) {
//     return x + y + z;
//   }
  
//   console.log(add(1, 2)); // Output: 3
//   console.log(add(1, 2, 3)); // Output: 6
  