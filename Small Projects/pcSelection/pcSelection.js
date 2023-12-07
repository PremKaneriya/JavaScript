function calculatePrice() {
    event.preventDefault();

    let p = document.getElementById("processor").value;
    let r = document.getElementById("ram").value;
    let s = document.getElementById("storage").value;
    let g = document.getElementById("graphiccard").value;

    let processorPrice = {"Intel i3":3000, "Intel i5":6000, "Intel i7":9000};
    let ramPrices = {"4 GB":1000, "8 GB":2000, "16 GB":4000};
    let storagePrice = {"128 SSD":2000,"256 SSD":4000, "1 TB HDD":3000};
    let graphiccardPrice = {"With Graphic Card":3000,"No Graphic Card":0 };
    
    let total = processorPrice[p] + ramPrices[r] + storagePrice[s] + graphiccardPrice[g];

    document.getElementById("price").innerHTML = "Bill = " + total;
    document.getElementById("secifications").innerHTML = "Specifications <br>" + "Processor = " + p + "<br>RAM = " + r + "<br>Storage = " + s + "<br>Graphic = " + g ;
    
    if (total <= 13000) {
        document.getElementById("pc-body").innerHTML = "For Usage of = Student PC";
    } else if (total > 13000 && total <= 15000) {
        document.getElementById("pc-body").innerHTML = "For Usage of = Professional PC";
    } else if (total > 15000 && total <= 18000) {
        document.getElementById("pc-body").innerHTML = "For Usage of = Gaming PC";
    }

}   