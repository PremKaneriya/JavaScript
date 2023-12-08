function checkOrder() {
    event.preventDefault();

    let food = document.getElementById("selectFood").value;
    let foodQuant = parseInt(document.getElementById("Foodquantity").value);

    let fries = document.getElementById("frenchFries").value;
    let friesQuant = parseInt(document.getElementById("Friesquantity").value);

    let drinks = document.getElementById("coldDrinks").value;
    let coldQuant = parseInt(document.getElementById("Drinkquantity").value);

    let code = document.getElementById("code").value;

    let foodPrice = 0;
    let friesPrice = 0;
    let drinksPrice = 0;

    if (food === "Burger") {
        foodPrice = 150;
    } else if (food === "Pizza") {
        foodPrice = 240;
    } else if (food === "Salad") {
        foodPrice = 100;
    }

    if (fries === "SmallFries") {
        friesPrice = 150;
    } else if (fries === "MediumFries") {
        friesPrice = 200;
    } else if (fries === "LargeFries") {
        friesPrice = 250;
    }

    if (drinks === "Pepsi") {
        drinksPrice = 150;
    } else if (drinks === "CocaCola") {
        drinksPrice = 200;
    } else if (drinks === "RedBull") {
        drinksPrice = 250;
    }    

    let totalFood = foodPrice * foodQuant;
    let totalFries = friesPrice * friesQuant;
    let totalDrinks = drinksPrice * coldQuant;

    let overallTotal = totalFood + totalFries + totalDrinks;

    document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

    document.getElementById("foodinfo").innerHTML = "Food =" + food + "Price = " + totalFood + "<br>Fries =" + fries + "Price =" + totalFries + "<br>Drinks" + drinks + "Price =" + totalDrinks ;
}