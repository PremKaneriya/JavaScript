// Electricity Bill

let unitCount = parseInt(prompt("Enter Electricity units: "));

let bill;
let totalBill;

if (unitCount > 0 && unitCount <= 50) {
    bill = unitCount * 0.50;
} else if (unitCount > 51 && unitCount <= 150) {
    bill = 50 * 0.50 + (unitCount - 50) * 0.75;
} else if (unitCount > 151 && unitCount <= 250){
    bill =  50 * 0.50 + 100 * 0.75 + (unitCount - 150) * 1.20;
} else if (unitCount > 251){
    bill = 50 * 0.50 + 100 * 0.75 + 100 * 0.75 + (unitCount - 250) * 1.50;
} else {
    console.log("Invalid Input");
}

totalBill = bill + (bill * 0.20);

console.log("Total Bill =", totalBill);