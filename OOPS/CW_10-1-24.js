// // Encapsulation

// class Employee {
//     id;
//     name;
//     #salary; // # is private method 
//     #insentive; // # is private method

//     constructor(id, name, salary) {
//         this.id = id;
//         this.name = name;
//         this.#salary = salary;
//     }

//     // setter
//     set insentive(i) {
//         this.#insentive = i;
//     }

//     // getter
//     get insentive() {
//         return this.#insentive;
//     }

//     employeeInfo() {
//         console.log('ID :' + this.id);
//         console.log('Name :' + this.name);
//         console.log('Salary :' + this.#salary);
//         console.log('Insentive :' + this.#insentive);
//         console.log('Total Salary is : ' , this.#salary + this.#insentive);
//     }

// }

// const emp1 = new Employee(101, 'John Doe', 50000);
// // emp1.salary = 3000

// // emp1.get(2000);

// emp1.insentive = 2000;

// emp1.employeeInfo()


// -------------- Inheritance + Encapsulation --------------

// class Institute {
//     name;
//     address;
//     #income;
//     expense;

//     constructor(name, address, income, expense) {
//         this.name = name;
//         this.address = address;
//         this.#income = income;
//         this.expense = expense;
//     }

//     set income (i) {
//         this.#income = i;
//     }

//     get income () {
//         return this.#income;
//     } 

//     instiInfo() {
//         console.log('Name : ', this.name);
//         console.log('Address : ', this.address);
//         console.log('Expense : ', this.expense);
//     }

//     totalIncome() {
//         console.log('Income : ', this.#income);
//     }
// } 

// class Infrastructure extends Institute {
//     iname;
//     #cost;
//     #discount;

//     constructor(iname, name, address, income, expense) {
//         super(name, address, income, expense);
//         this.iname = iname;
//     }

//     set cost (c) {
//         this.#cost = c;
//     }

//     get cost () {
//         return this.#cost;
//     }

//     set discount (d) {
//         this.#discount = d;
//     }

//     get discount () {
//         return this.#discount;
//     }

//     infraInfo() {
//         console.log('Name : ', this.iname);
//         console.log('Cost : ', this.#cost);
//         console.log('Discount : ', this.#discount);
//     }
// }


// const infraObj = new Infrastructure('Building1', 'ABC Institute', 'RiseOn Plaza', 5000, 200);
// infraObj.income = 1000;
// infraObj.cost = 1000;
// infraObj.discount = 300;
// infraObj.instiInfo();
// infraObj.infraInfo();
// infraObj.totalIncome();