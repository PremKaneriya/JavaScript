// const studentInfo = {
//     fullName : "John Jacobs",
//     marks : 44,
//     age : 22,
//     present : true,
//     fun : function insideFun() {
//         console.log("marks",this.age); // this means parent object (studentInfo)
//     }
// }

// console.log(studentInfo);

// a prototypes are objects in an object, they are by_default;

// const employee = {
//     calculateTax(){
//         console.log("Tax = 10%");
//     } 
// }

// const BeeNew = {
//     salary : 50000,
//     calculateTax(){
//         console.log("Tax = 30%");
//     }  
// }

// console.log(BeeNew.calculateTax);

// ---------------Classes in JS------------------------

// class highEndCar {
//     constructor (brandName, price) {
//         console.log("Creating New Object");
//         this.brandName = brandName;
//         this.price = price;
//     }
//     start () {
//         console.log("Start");
//     }
//     stop () {
//         console.log("Stop");
//     }
// }



// let ferarri = new highEndCar("New Ferrari", 50000);
// let Tesla = new highEndCar("New Tesla", 68000);

// console.log(ferarri);

// -----------------Inheritance in JS---------------------------


// class parent {
//     hello () {
//         console.log("hello");
//     }
// }

// class child extends parent {
// }

// let obj = new child();


// class person {
//     constructor () {
//         this.species = 'homoSapiens'
//     }
//     eat () {
//         console.log('eat');
//     }
//     sleep () {
//         console.log('sleep');
//     }
//     work () {
//         console.log('do nothing');
//     }
// }

// class enginner extends person {
//     constructor(branch){
//         super(); // to invoke parent class constructor
//         this.branch = branch;
//     }
//     work () {
//         console.log('solve problems');
//     }
// }

// let premobj = new enginner('Computer eng');

// -------------------------------------------------

// -----------------Error Handling----------------------

// try {
//     Block of code to try
//  }
// catch(err) {
//     Block of code to handle errors
// } 