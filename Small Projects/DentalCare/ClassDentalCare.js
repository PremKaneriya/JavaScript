const rtc_s = 5, rtc_c = 5000;
const rcc_s = 12, rcc_c = 12000;
const tc_s = 1, tc_c = 500;
const trr_s = 3, trr_c = 3000;

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

    let print = "<table border='1'> <tr> <th>Treatment</th><th>Seating</th> <th>Costing</th> </tr>";

    for (let i = 0; i < tr_s; i++) {
        print = print + "<tr>";
        if (i === 0) {
            print = print + '<td rowspan='+ tr_s +'>' + tr_name + '</td>';
        }
        print = print + "<td>"  + d.toLocaleDateString() + "</td>"
        print = print + "<td>" + tr_c / tr_s + "</td>"
        print = print + "</tr>";


        d.setDate(d.getDate() + 7);
    }


    print = print + "</table>";

    document.getElementById("appointmentDisplay").innerHTML = print;
}
