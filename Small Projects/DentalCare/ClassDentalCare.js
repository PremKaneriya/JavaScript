const rtc_s = 5, rtc_c = 5000;
const rcc_s = 12, rcc_c = 10000;
const tc_s = 1, tc_c = 500;
const trr_s = 3, trr_c = 2000;

let tr_name, tr_s = 0, tr_c = 0;

function handleTreatment() {
    event.preventDefault();

    let treat = document.getElementById("treatment").value;

    if (treat == "rtc") {
        tr_name = "Root Canal";
        tr_s = rtc_s;
        tr_c = rtc_c;
    } else if (treat == "rtcc") {
        tr_name = "RTC + Cover";
        tr_s = rcc_s;
        tr_c = rcc_c;
    } else if (treat == "tc") {
        tr_name = "Teeth Cleaning";
        tr_s = tc_s;
        tr_c = tc_c;
    } else if (treat == "tr") {
        tr_name = "Teeth Removing";
        tr_s = trr_s;
        tr_c = trr_c;
    }

    if (treat == "0") {
        document.getElementById("tableNone").style.display = "none";
    } else {
        document.getElementById("tableNone").style.display = "contents";
    }

    document.getElementById("treatData").innerHTML = tr_name;
    document.getElementById("seatDate").innerHTML = tr_s;
    document.getElementById("costDate").innerHTML = tr_c;

    document.getElementById("hide_div").style.display = "contents";
}

function appointmentDate() {
    event.preventDefault();

    const aptDating = document.getElementById("aptDate").value;
    
    let d = new Date(aptDating);
    // Creates a new Date object using the value of aptDating.

    // console.log(d.getDate(), d.getMonth(), d.getFullYear());
    // this log stores date, month, year in d variable

    let print = "<table border='1'> <tr> <th>Treatment</th><th>Seating</th> <th>Costing</th> </tr>";
    // prints table

    for (let i = 0; i < tr_s; i++) {
        //this loop start with 0 to selected sittings

        print = print + "<tr>";
    
        if (i === 0) {
            // checks 0 and start rowspan
            print = print + "<td rowspan='" + tr_s + "'>";
            print = print + tr_name;
            //Adds the treatment name to the cell.
            print = print + "</td>";
        }

        print = print + "<td>";
        print = print + d.toDateString();
        // this todatestring Adds date to cell
        print = print + "</td>";

        print = print + "<td>";
        print = print + tr_c / tr_s;
        // calculate the cost to sitting
        print = print + "</td>";

        print = print + "</tr>";

        d.setDate(d.getDate() + 7);
        // Increments the date by 7 days for the next sitting.
    }

    print = print + "</table>";

    document.getElementById("appointmentDisplay").innerHTML = print;
}
