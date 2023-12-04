function intCalc() {
    event.preventDefault();

    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let y = parseFloat(document.getElementById("years").value);

    let total = (p * r * y) / 100;

    let res = document.querySelector("#result")
    res.innerHTML = "interest = " + total;
    res.style.backgroundColor = "red"

}