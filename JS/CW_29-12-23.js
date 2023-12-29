// Object.Keys

// const companyInfo = {
//     name:'Google',
//     address:'Palo Alto',
//     ceo:'Sundar Pichai'
// }

// console.log(Object.keys(companyInfo));

// const tinderUser = {
//     name:'Sundar Pichai',
//     age:50,
//     profession:'Actor',
//     netIncome:500000
// }

// console.log(Object.keys(tinderUser));


// Object.Values

// const course = {
//     name:'Javascript',
//     duration:3,
//     language:'English'
// }

// console.log(Object.values(course));

// const finservCo = {
//     name:'Bajaj Finserv',
//     symbol:'BAJAJFINSV',
//     price:100,
//     sector:'Financial Services',
//     marketCap:50000000,
//     industry:'Financial Services',
//     country:'India',
//     revenue:50000000
// }

// console.log(Object.values(finservCo));


// Object.entries

// const bankAc = {
//     name:'SBI',
//     balance:50000,
//     currency:'INR',
//     accountType:'Savings',
//     branch:'Surat',
//     ifsc:'SBIINR000000'
// }

// console.log(Object.entries(bankAc));

// const loanDuration = {
//     name:'HSDC',
//     duration:5,
//     interestRate:10
// }

// console.log(Object.entries(loanDuration));


// Object.fromEntries

// const stockBroker = {
//     symbol:'MRF',
//     price:100,
//     sector:'Tyre Services',
//     marketCap:50000000,
//     industry:'Tyre Services',
//     country:'India',
//     revenue:50000000
// }

// const entries = Object.entries(stockBroker);
// const Answer = Object.fromEntries(entries);

// console.log(Answer);


// const languageLearn = {
//     city:'Madrid',
//     level:'Native',
//     language:'Spanish'
// }

// const entries = Object.entries(languageLearn);
// const ans = Object.fromEntries(entries);

// console.log(ans);

// Object.hasOwnProperty

// const loanDuration = {
//     name:'HSDC',
//     duration:5,
//     interestRate:10
// }

// console.log(Object.hasOwnProperty('name'));

// console.log(Object.freeze(loanDuration));

// loanDuration.name = 'ICICI';

// delete loanDuration.name;

// loanDuration['duration'] = 23;

// loanDuration.branch = 'varachha'

// console.log(loanDuration);

// ----------------- CW -------------------

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
];


const answer = institues.map((v) =>  {
    return {
        name: v.name,
        seat: Object.fromEntries(Object.entries(v.seat[0]).filter(([keys, val]) => val > 0))
    }
});

console.log(answer.filter((v) => Object.keys(v.seat).length > 0));