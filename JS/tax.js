// Calculate Tax

let income = parseInt(prompt("Enter Your Income: "));

let tax;

if (income >= 10000 && income <= 15000) {
    tax = income * 0.10;
} else if (income > 15000) {
    tax = income * 0.15;
} else {
    console.log("Not Eligible for Tax");
}

console.log("Tax Ensure:", tax);
