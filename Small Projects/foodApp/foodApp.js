function checkOrder() {
    event.preventDefault();

    let food = parseInt(document.getElementById("selectFood").value);
    let foodQuant = parseInt(document.getElementById("Foodquantity").value);

    let fries = parseInt(document.getElementById("frenchFries").value);
    let friesQuant = parseInt(document.getElementById("Friesquantity").value);

    let drinks = parseInt(document.getElementById("coldDrinks").value);
    let coldQuant = parseInt(document.getElementById("Drinkquantity").value);

    let code = parseInt(document.getElementById("code").value);
    
    if (foodQuant >= 1) {
        food = food * foodQuant;
    }

    if (friesQuant >= 1) {
        fries = fries * friesQuant;
    }

    if (coldQuant >= 1) {
        drinks = drinks * coldQuant;
    }

    total = food + fries + drinks;

    if (total > 500) {
        discount = total * 0.20; 
    } 

    totaldis = total - discount;
 
    parseInt(document.getElementById("totalOrder").innerHTML = "Total Order is = " + total);
    parseInt(document.getElementById("discount").innerHTML = "Discount = " + discount);
    parseInt(document.getElementById("totaldiscount").innerHTML = "Total Discount = " + totaldis);
}