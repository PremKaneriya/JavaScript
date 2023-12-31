document.getElementById('box2').style.display = 'none';

function checkOrder() {
    event.preventDefault();

    let food = document.getElementById("selectFood").value;
    let foodQuant = parseInt(document.getElementById("Foodquantity").value);

    let fries = document.getElementById("frenchFries").value;
    let friesQuant = parseInt(document.getElementById("Friesquantity").value);

    let drinks = document.getElementById("coldDrinks").value;
    let coldQuant = parseInt(document.getElementById("Drinkquantity").value);

    let codee = document.getElementById("code").value;

    let foodPrice = 0;
    let friesPrice = 0;
    let drinksPrice = 0;

    if (food === "Burger") {
        foodPrice = 149;
    } else if (food === "Pizza") {
        foodPrice = 239;
    } else if (food === "Salad") {
        foodPrice = 99;
    }

    if (fries === "SmallFries") {
        friesPrice = 199;
    } else if (fries === "MediumFries") {
        friesPrice = 249;
    } else if (fries === "LargeFries") {
        friesPrice = 289;
    }

    if (drinks === "Pepsi") {
        drinksPrice = 129;
    } else if (drinks === "CocaCola") {
        drinksPrice = 99;
    } else if (drinks === "RedBull") {
        drinksPrice = 199;
    }



    let totalFood = foodPrice * foodQuant;
    let totalFries = friesPrice * friesQuant;
    let totalDrinks = drinksPrice * coldQuant;

    let overallTotal = totalFood + totalFries + totalDrinks;

    // document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

    // document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

    // document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries; 

    // document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks; 

    let afterdic;

    // -------------------

    let checkFood = document.querySelector('select[name="checkFood"]');
    let checkFries = document.querySelector('select[name="checkFries"]');
    let checkDrink = document.querySelector('select[name="checkDrink"]');

    let chefood = true, chefries = true, chedrink = true;

    if (checkFood.value === "0") {
        document.getElementById("alertfood").innerHTML = 'Please Select Food';
    } else {
        document.getElementById("alertfood").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('box2').style.display = 'block';

        chefood = false;
    }

    if (checkFries.value === "0") {
        document.getElementById("alertfries").innerHTML = 'Please Select Fries';
    } else {
        document.getElementById("alertfries").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('box2').style.display = 'block';

        chefries = false;
    }

    if (checkDrink.value === "0") {
        document.getElementById("alertdrinks").innerHTML = 'Please Select Drinks';
    } else {
        document.getElementById("alertdrinks").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('drinkinfo').style.display = 'block';

        document.getElementById('totalOrder').style.display = 'block';
        document.getElementById('afterDiscount').style.display = 'block';


        chedrink = false;
    }

    // -----------------

    const checkfoodProp = document.getElementById('selectFood');
    const checkfriesProp = document.getElementById('frenchFries');
    const checkcoldProp = document.getElementById('coldDrinks');

    if (checkfoodProp.value === "0") {
        document.getElementById("alertfoodPart").innerHTML = 'Please Select Item';
    } else {
        document.getElementById("alertfoodPart").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('box2').style.display = 'block';


    }

    if (checkfriesProp.value === "0") {
        document.getElementById("alertfriesPart").innerHTML = 'Please Select Item';
    } else {
        document.getElementById("alertfriesPart").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('box2').style.display = 'block';

    }

    if (checkcoldProp.value === "0") {
        document.getElementById("alertdrinksPart").innerHTML = 'Please Select Item';
    } else {
        document.getElementById("alertdrinksPart").innerHTML = '';
        document.getElementById("totalOrder").innerHTML = "Your Total Order is: " + overallTotal;

        document.getElementById("foodinfo").innerHTML = "Food = " + food + ":" + " Food Price = " + foodPrice + "*" + foodQuant + " = " + totalFood;

        document.getElementById("friesinfo").innerHTML = "Fries = " + fries + ":" + " Fries Price = " + friesPrice + "*" + friesQuant + " = " + totalFries;

        document.getElementById("drinkinfo").innerHTML = "Drinks = " + drinks + ":" + " Drinks Price = " + drinksPrice + "*" + coldQuant + " = " + totalDrinks;

        document.getElementById('box2').style.display = 'block';

    }

    // -------------------

    if (codee === "DISCOUNT20") {
        afterdic = overallTotal - (overallTotal * 0.20);
        document.getElementById("afterDiscount").innerHTML = "After 20% Discount = " + afterdic;
    } else {
        document.getElementById("afterDiscount").innerHTML = "Coupon Not Applied";
    }

    if (chefood || chefries || chedrink) {
        return false;
    } else {
        return true;
    }

}