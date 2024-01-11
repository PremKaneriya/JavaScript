
// class Company {
//     name;
//     address;
//     #valuation;
//     #bonuses;

//     constructor(name, address, valuation, bonuses) {
//         this.name = name;
//         this.address = address;
//         this.#valuation = valuation;
//         this.#bonuses = bonuses;
//     }

//     get valuation() {
//         return this.#valuation;
//     }
//     set valuation(v) {
//         this.#valuation = v;
//     }

//     get bonuses() {
//         return this.#bonuses;
//     }
//     set bonuses(b) {
//         this.#bonuses = b;
//     }

//     display() {
//         console.log('Name :', this.name);
//         console.log('Address :', this.address);
//         console.log('Valuation :', this.valuation);
//         console.log('Bonuses :', this.bonuses);
//     }
// }

// class EmployeeSalary extends Company{
//     #salary;
//     #increment;

//     constructor(name, address, salary, increment) {
//         super(name, address);        
//         this.#salary = salary;
//         this.#increment = increment;
//     }

//     get salary() {
//         return this.#salary;
//     }
//     set salary(s) {
//         this.#salary = s;
//     }

//     get increment() {
//         return this.#increment;
//     }
//     set increment(i) {
//         this.#increment = i;
//     }

//     empDisplay() {
//         console.log('Increment :', this.#increment);
//         console.log('Salary :', this.#salary);
//     }

// }

// const emp = new EmployeeSalary('Apple Inc', 'Palo Alto');
// emp.valuation = 1000000;
// emp.bonuses = 500;
// emp.increment = 10;
// emp.salary = 1000;
// emp.display();
// emp.empDisplay();

// ---------------------------------------------------------------------------------------------------

// class Zoo {
//     name;
//     address;
//     #revenue;
//     #ticketsSold;

//     constructor(name, address, revenue, ticketsSold) {
//         this.name = name;
//         this.address = address;
//         this.#revenue = revenue;
//         this.#ticketsSold = ticketsSold;
//     }

//     set revenue(r) {
//         this.#revenue = r;
//     }
//     get revenue(){
//         return this.#revenue;
//     }

//     set ticketsSold(t) {
//         this.#ticketsSold = t;
//     }
//     get ticketsSold(){
//         return this.#ticketsSold;
//     }

//     display() {
//         console.log('Name :', this.name);
//         console.log('Address :', this.address);
//         console.log('Revenue :', this.#revenue);
//         console.log('Tickets Sold :', this.#ticketsSold);
//     }

// }

// class Animal extends Zoo {
//     #animalFoodCost;
//     #employeeBonus;
    
//     constructor(name, address, revenue, ticketsSold, animalFoodCost, employeeBonus) {
//         super(name, address, revenue, ticketsSold);
//         this.#animalFoodCost = animalFoodCost;
//         this.#employeeBonus = employeeBonus;
//     }

//     set animalFoodCost(a) {
//         this.#animalFoodCost = a;
//     }
//     get animalFoodCost(){
//         return this.#animalFoodCost;
//     }

//     set employeeBonus(e) {
//         this.#employeeBonus = e;
//     }
//     get employeeBonus(){
//         return this.#employeeBonus;
//     }

//     displaysec() {
//         console.log('Animal Food Cost :', this.#animalFoodCost);
//         console.log('Employee Bonus :', this.#employeeBonus);
//     }

// }

// const zoo1 = new Animal("National Zoo", "Sathana");
// zoo1.revenue = 1000;
// zoo1.ticketsSold = 10;
// zoo1.animalFoodCost = 200;
// zoo1.employeeBonus = 300;
// zoo1.display();
// zoo1.displaysec();

// ---------------------------------------------------------------------------------------------------

// class Movie {
//     name;
//     #budget;
//     #productionCost

//     constructor(name, budget, productionCost) {
//         this.name = name;
//         this.#budget = budget;
//         this.#productionCost = productionCost;
//     }

//     set budget(b) {
//         this.#budget = b;
//     }
//     get budget(){
//         return this.#budget;
//     }

//     set productionCost(p) {
//         this.#productionCost = p;
//     }
//     get productionCost(){
//         return this.#productionCost;
//     }

//     display() {
//         console.log('Name :', this.name);
//         console.log('Budget :', this.#budget);
//         console.log('Production Cost :', this.#productionCost);
//     }

// }

// class Distributor extends Movie {
//     #movieCollection;
//     #distributionCost;
//     #SellonOTT

//     constructor(name, budget, productionCost, movieCollection, distributionCost, SellonOTT) {
//         super(name, budget, productionCost);
//         this.#movieCollection = movieCollection;
//         this.#distributionCost = distributionCost;
//         this.#SellonOTT = SellonOTT;
//     }

//     set movieCollection(m) {
//         this.#movieCollection = m;
//     }
//     get movieCollection(){
//         return this.#movieCollection;
//     }

//     set distributionCost(d) {
//         this.#distributionCost = d;
//     }
//     get distributionCost(){
//         return this.#distributionCost;
//     }

//     set SellonOTT(s) {
//         this.#SellonOTT = s;
//     }
//     get SellonOTT(){
//         return this.#SellonOTT;
//     }

//     displayDistrubution() {
//         console.log('Movie Collection :', this.movieCollection);
//         console.log('Distribution Cost :', this.#distributionCost);
//         console.log('Sell on OTT :', this.#SellonOTT);
//     }
    
// }

// const movieAll = new Distributor('Animal');
// movieAll.budget = 1000000;
// movieAll.productionCost = 30000;
// movieAll.movieCollection = 500000;
// movieAll.distributionCost = 7000;
// movieAll.SellonOTT = 250000;
// movieAll.display();
// movieAll.displayDistrubution();

