// Events in JavaScript
// Events are things that happen in the system you are programming, which the system tells you about so your code can react to them.

const dblclick = () => {
    document.getElementById("body").style.background = 'black'
}

document.getElementById("click").addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = 'blue';
})

document.getElementById("box").addEventListener("mouseenter", function () {
    document.getElementById("box").style.background = 'green';
    document.getElementById("box").innerHTML = 'Mouse is on box'
})
document.getElementById("box").addEventListener("mouseleave", function () {
    document.getElementById("box").style.background = 'red';
    document.getElementById("box").innerHTML = 'nothing'
})

// ----------------
// cursor
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (fun) {
    cursor.style.left = fun.clientX - cursor.offsetWidth / 2 + 'px';
    cursor.style.top = fun.clientY - cursor.offsetHeight / 2 + 'px';
})
// ----------------

document.getElementById("div").addEventListener('click', function (r) {
    console.log(r);
    console.log(r.target);
    console.log(r.type);
});

// const onloadBG = () => {
//     document.getElementById("body").style.background = 'grey';
// }

// ---------------

document.getElementById("eventlist").addEventListener('click', function () {
    document.getElementById("body").style.backgroundColor = 'red';
})

// -----------------

