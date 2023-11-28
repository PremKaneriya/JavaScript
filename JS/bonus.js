// Find your Bonus

let gender = prompt("Enter Gender (m / f): ");
let salary = parseInt(prompt("Enter your salary: "));

let bonus;

if(salary <= 10000){
    if (gender == 'm') {
        bonus = salary * 0.020;
    } else if (gender == 'f'){
        bonus = salary * 0.030;
    }
} else {
    console.log("Not Eligible for Bonus");
}

console.log("Bonus = ", bonus);