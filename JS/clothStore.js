// Cloth Store

let purchaseItem = prompt("Enter Which cloth material you buy (m for mill / h for handloom): ");
let amountPurchase = parseInt(prompt("Enter purchase amount"));

let discount;

if (purchaseItem == 'm' || purchaseItem == 'M') {
    if(amountPurchase > 100 && amountPurchase <= 200){
        discount = amount * 0.05;
    } else if (amountPurchase > 200 && amountPurchase <= 300){
        discount = amountPurchase * 0.075;
    } else if (amountPurchase > 300){
        discount = amountPurchase * 0.10;
    } else {
        console.log("Not Eligible for Discount, Purchase More");
    }
} else if (purchaseItem == 'h' || purchaseItem == 'H'){
    if (amountPurchase > 0 && amountPurchase <= 100) {
        discount = amount * 0.05;
    } else if(amountPurchase > 100 && amountPurchase <= 200){
        discount = amount * 0.075;
    } else if (amountPurchase > 200 && amountPurchase <= 300){
        discount = amountPurchase * 0.10;
    } else if (amountPurchase > 300){
        discount = amountPurchase * 0.15;
    } else {
        console.log("Not Eligible for Discount, Purchase More");
    }
} else {
    console.log("Invalid Input");
}

console.log("Congratulations for Dicount of", discount);