// function ongive(){
//     event.preventDefault()

//     let sal = parseFloat(document.getElementById("salary").value);
//     let tax = document.querySelector("#tax");

//     if (sal > 0 && sal <= 300000) {
//         let nill = "nill"
//         nill.querySelector("#nill").innerHTML = "No tax";
//     } else if (sal > 300000 && sal <= 600000) {
//         let taxSlab1 = sal * 0.5;
//         taxSlab1.querySelector("#three").innerHTML = "Tax = " + taxSlab1; 
//         console.log(taxSlab1);
//     } else if (sal > 600001 && sal <= 900000) {
//         tax = 300000 * 0.5 + (sal - 300000) * 0.10; 
//     } else if (sal > 900001 && sal <= 1200000) {
//         tax = 300000 * 0.5 + 600001 * 0.10 + (sal - 600001) * 0.15;
//     } else if (sal > 1200001 && sal <= 1500000) { 
//         tax = 300000 * 0.5 + 600001 * 0.10 + 900001 * 0.15 + (sal -900001) * 0.20; 
//     } else if (sal > 1500000) {
//         tax = 300000 * 0.5 + 600001 * 0.10 + 900001 * 0.15 + 1200001 * 0.20 + (sal - 1200001) * 0.30;
//     }

// }

// function ongive() {
//     event.preventDefault();

//     let sal = parseFloat(document.getElementById("salary").value);
//     let tax = document.querySelector("#tax");

//     if (sal > 0 && sal <= 300000) {
//         nill.innerHTML = "No tax";
//     } else if (sal > 300000 && sal <= 600000) {
//         let taxSlab1 = (sal - 300000) * 0.05;
//         three.innerHTML = "Tax = " + taxSlab1;
//         console.log(taxSlab1);
//     } else if (sal > 600001 && sal <= 900000) {
//         let taxSlab2 = 300000 * 0.05 + (sal - 600000) * 0.1;
//         six.innerHTML = "Tax = " + taxSlab2;
//         console.log(taxSlab2);
//     } else if (sal > 900001 && sal <= 1200000) {
//         let taxSlab3 = 300000 * 0.05 + 300000 * 0.1 + (sal - 900000) * 0.15;
//         nine.innerHTML = "Tax = " + taxSlab3;
//         console.log(taxSlab3);
//     } else if (sal > 1200001 && sal <= 1500000) {
//         let taxSlab4 = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (sal - 1200000) * 0.2;
//         twele.innerHTML = "Tax = " + taxSlab4;
//         console.log(taxSlab4);
//     } else if (sal > 1500000) {
//         let taxSlab5 = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + 300000 * 0.2 + (sal - 1500000) * 0.3;
//         fifteen.innerHTML = "Tax = " + taxSlab5;
//         console.log(taxSlab5);
//     }
// }


// --------------------------------------- // 

// function ongive() {
//     event.preventDefault();

//     let sal = parseFloat(document.getElementById("salary").value);
//     let tax = document.querySelector("#totalTax");

//     document.getElementById("nill").innerHTML = "";
//     document.getElementById("three").innerHTML = "";
//     document.getElementById("six").innerHTML = "";
//     document.getElementById("nine").innerHTML = "";
//     document.getElementById("twele").innerHTML = "";
//     document.getElementById("fifteen").innerHTML = "";

//     let totalTax = 0;

//     if (sal > 0 && sal <= 300000 ) {
//         document.getElementById("nill").innerHTML = "No tax";
//     } else if (sal > 300000 && sal <= 600000) {
//         let slabTax = (sal - 300000) * 0.05;
//         document.getElementById("three").innerHTML = "Tax = " + slabTax;
//         totalTax = totalTax + slabTax;
//     } else if (sal > 600001 && sal <= 900000) {
//         let slabTax = 300000 * 0.05 + (sal - 600000) * 0.1;
//         document.getElementById("six").innerHTML = "Tax = " + slabTax;
//         totalTax = totalTax + slabTax;
//     } else if (sal > 900001 && sal <= 1200000) {
//         let slabTax = 300000 * 0.05 + 300000 * 0.1 + (sal - 900000) * 0.15;
//         document.getElementById("nine").innerHTML = "Tax = " + slabTax;
//         totalTax = totalTax + slabTax;
//     } else if (sal > 1200001 && sal <= 1500000) {
//         let slabTax = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + (sal - 1200000) * 0.2;
//         document.getElementById("twele").innerHTML = "Tax = " + slabTax;
//         totalTax = totalTax + slabTax;
//     } else if (sal > 1500000) {
//         let slabTax = 300000 * 0.05 + 300000 * 0.1 + 300000 * 0.15 + 300000 * 0.2 + (sal - 1500000) * 0.3;
//         document.getElementById("fifteen").innerHTML = "Tax = " + slabTax;
//         totalTax = totalTax + slabTax;
//     }


//     tax.innerHTML = "Total Tax = " + totalTax;
// }

// --------------------------------------------------------------- // 

function ongive() {
    let salary = parseFloat(document.getElementById("salary").value);

    let nill = "nill", three = 0, six = 0, nine = 0, twele = 0, fifteen = 0, total;
    
    if (!salary) {
        document.getElementById('salErr').innerHTML = 'Please select a salary range';
        return;
    } else {
        document.getElementById('salErr').innerHTML = '';
    }

    if (salary <= 300000 ) {
        nill = 0, three = 0, six = 0, nine = 0, twele = 0, fifteen = 0;
    } else if (salary > 300000 && salary <= 600000) {
        nill = 0;
        three = (salary - 300000) * 0.05;
    } else if (salary > 600000 && salary <= 900000) {
        nill = 0;
        three = 300000 * 0.05;
        six = (salary - 600000) * 0.10;
    } else if (salary > 900000 && salary <= 1200000) {
        nill = 0;
        three = 300000 * 0.05;
        six = 300000 * 0.10;
        nine = (salary - 900000) * 0.15;
    } else if (salary > 1200000 && salary <= 1500000) {
        nill = 0;
        three = 300000 * 0.05;
        six = 300000 * 0.10;
        nine = 300000 * 0.15;
        twele = (salary - 1200000) * 0.20;
    } else if (salary > 1500000) {
        nill = 0;
        three = 300000 * 0.05;
        six = 300000 * 0.10;
        nine = 300000 * 0.15;
        twele = 300000 * 0.20;
        fifteen = (salary - 1500000) * 0.30;
    }

    total = nill + three + six + nine + twele + fifteen;

    document.getElementById("totalTax").innerHTML = "Total = " + total;
    document.getElementById("nill").innerHTML = nill;
    document.getElementById("three").innerHTML = three;
    document.getElementById("six").innerHTML = six;
    document.getElementById("nine").innerHTML = nine;
    document.getElementById("twele").innerHTML = twele;
    document.getElementById("fifteen").innerHTML = fifteen;
}