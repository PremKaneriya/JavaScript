// reCaptcha

let dis = document.getElementById("display").innerHTML = Math.floor(Math.random()*10);
let dis1 = document.getElementById("display2").innerHTML = Math.floor(Math.random()*10);

let total =  dis + dis1;

function corrCaptcha() {
    event.preventDefault();
    let ans = document.getElementById("ans").value;

    let cheCha = true;

    if (total == ans) {
        alert("Correct Captcha");
    } else {
        let checkCaptcha = document.querySelector('input[name="writeCaptcha"]:checked');

        if (checkCaptcha === null) {
            document.getElementById("captchaErr").innerHTML = 'Write answer';
        } else {
            document.getElementById("captchaErr").innerHTML = '';
            cheCha = false;
        }  
    }

    if (cheCha) {
        return true;
    } else {
        return false;
    }

}