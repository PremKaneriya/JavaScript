// reCaptcha

let dis = document.getElementById("display").innerHTML = Math.floor(Math.random()*10);
let dis1 = document.getElementById("display2").innerHTML = Math.floor(Math.random()*10);

let total =  dis + dis1;

function corrCaptcha() {
    let ans = document.getElementById("ans").value;

    if (total == ans) {
        alert("Correct Captcha");
    } else {
        alert("InCorrect Captcha");
    }
}