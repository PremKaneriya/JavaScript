// Objects

// object is a complex data type that allows you to store and organize data using a collection of key-value pairs. Each key in the object is a string, and the corresponding value can be any valid JavaScript data type, including other objects. Objects are a fundamental part of the language and are used for a variety of purposes.

const personalInfo = {
    name : 'Tom Cruise',
    age : 50,
    country : 'United Kingdom',
    profession : 'Actor',
    netIncome : 500000
}

// console.log(personalInfo);
// console.log(personalInfo.name);
// console.log(personalInfo.age);
// console.log(personalInfo.country);


const schoolInfo = {
    name : 'Montersary',
    location : 'London',
    level : 'Secondary',
    numberOfStudents : 200,
    numberOfTeachers : 10,
    numberOfClasses : 10,
    hasLibrary : true,
    hasCafeteria : true,
    hasCanteen : false
}

// const keys = Object.keys(schoolInfo);
// console.log(keys);


const books = {
    name : 'The Lord of the Rings',
    author : 'J.R.R. Tolkien',
    edition : 14,
    publisher : 'HarperCollins',
    year : 1954,
    genre : 'Fantasy',
}

// const values = Object.values(books);
// console.log(values);

const indianStock = {
    name : 'Tata Power',
    symbol : 'TATAPOWER',
    price : 1000,
    sector : 'Energy',
    marketCap : 50000000,
    industry : 'Power Generation',
    country : 'India'
}

// const entry = Object.entries(indianStock);
// console.log(entry);


const person = {
    firstName : 'John',
    lastName : 'Jacobs',
    age : 50,
    fullName : function () {
        return this.firstName + '' + this.lastName;
    }
}

// console.log(person);
// console.log(person.fullName());


const indianFinanceCompany = {
    name : 'Bajaj Finserv',
    symbol : 'BAJAJFINSV',
    price : 100,
    sector : 'Financial Services',
    marketCap : 50000000,
    industry : 'Financial Services',
    country : 'India',
    ceo : 'Sundar Pichai',
    revenue : 50000000,
}

const freeze = Object.freeze(indianFinanceCompany);
console.log(freeze);