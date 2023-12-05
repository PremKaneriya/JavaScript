function sum() {
    event.preventDefault()
    let n = document.getElementById("name").value;
    let r = document.getElementById("roll").value;
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    let ans = a + b + c;
    let per = ans / 3;
    let displayResult = document.querySelector("#ans");
    displayResult.innerHTML = "Name : " + n + "<br>Roll No : " + r + "<br>Science : " + a + "<br > Maths : " + b + "<br > Physics : " +  a + "<br><br>Total Marks = " + ans + "<br><br> Percentage = " + parseInt(per);
}
