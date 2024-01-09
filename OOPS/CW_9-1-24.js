// class Building {
//     constructor (w, l) {
//         this.width = w;
//         this.length = l;
//     }

//     area() {
//         let area;
//         area = this.width * this.length;
//         console.log("Building area is : "+area);
//     }
// }

// const b1 = new Building(100, 200);
// b1.area();

// const b2 = new Building(10, 20);
// b2.area();

// class Student {
//     constructor (name, rollNo, fees) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.fees = fees;
//     }

//     info() {
//         console.log(`Name : ${this.name} , RollNo : ${this.rollNo}`);
//     }

//     Paidfees() {
//         let discount = this.fees / 10;
//         console.log('Fees after 10% Discount: '+ discount);
//     }
// }

// const s1 = new Student('Ronnie Coleman', 101, 1000);

// s1.info();
// s1.Paidfees();

// ---------- Inheritance ---------------------

class Employee {
    constructor(n, d){
        this.name = n;
        this.doj = d;
    }

    employeeInfo() {
        console.log('Name :' + this.name);
        console.log('Date Of Joining :' , this.doj );
    }
}

class Salary extends Employee {
    constructor (n, d, s) {
        super(n, d)
        this.salary = s; 
    }

    salaryInfo() {
        console.log('Salary :' + this.salary );
    }
}

const e1 = new Salary('Amit', '12-09-2012', 3000);

e1.employeeInfo()
e1.salaryInfo()