document.getElementById("offBro").style.display = "none";
document.getElementById("hideorno").style.display = "none";

function selectionOfTreatment() {
    event.preventDefault();

    let treats = document.getElementById("treatSelect").value;
    let price = 0;

    if (treats === "RTC") {
        price = 500;
    } else if (treats === "Root Canal") {
        price = 5000;
    } else if (treats === "Teeth Cleaning") {
        price = 1000;
    } else if (treats === "Teeth Removing") {
        price = 2000;
    }

    document.getElementById("treatDisplay").innerHTML = "Treatment = " + treats + "<br>Price = " + price;

    document.getElementById("offBro").style.display = "block";

}

function displayDate() {
    event.preventDefault();


    document.getElementById("hideorno").style.display = "block";

    let treats = document.getElementById("treatSelect").value;
    let price = 0;
    let datesel = document.getElementById("myDateInput").value;

    if (treats === "RTC") {
        price = 500;
    } else if (treats === "Root Canal") {
        price = 5000;
    } else if (treats === "Teeth Cleaning") {
        price = 1000;
    } else if (treats === "Teeth Removing") {
        price = 2000;
    }

    let sittings = 0;

    if (treats === "RTC") {
        sittings = 6;
    } else if (treats === "Root Canal") {
        sittings = 12;
    } else if (treats === "Teeth Cleaning") {
        sittings = 1;
    } else if (treats === "Teeth Removing") {
        sittings = 2;
    }



    // let results;

    // if (dateSelect === "15 - 12 - 23" || dateSelect === "16 - 12 - 23" || dateSelect === "17 - 12 - 23" || dateSelect === "18 - 12 - 23" ) {
    // results = "Treatment : " + treats + "<br>Price = " + price + "<br>Sittings = " + sittings ;
    // } else {
    //     results = "Invalid Input";
    // }
    // document.getElementById("output").innerHTML = "Selected Date: " + datesel;

    document.getElementById("tabletreat").innerHTML = treats;
    document.getElementById("tabledate").innerHTML = datesel;
    document.getElementById("tablesitting").innerHTML = sittings;
    document.getElementById("tableprice").innerHTML = price;

}