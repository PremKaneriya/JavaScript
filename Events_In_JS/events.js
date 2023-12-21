changeBg = () => {
    document.getElementById("body").style.backgroundColor = "lightblue";
}

changeBgDC = () => {
    document.getElementById("body").style.backgroundColor = "lightgreen";
}

changeCBG = () => {
    const bg = document.getElementById("opt").value;

    if (bg === 'blue') {
        document.getElementById("body").style.backgroundColor = "blue";
    } else if (bg === 'green') {
        document.getElementById("body").style.backgroundColor = "green";
    } else if (bg === 'black') {
        document.getElementById("body").style.backgroundColor = "black";
    }
}

// -----------------------------------------------------

const btn = document.getElementById("btn");

random = (number) => {
    return Math.floor(Math.random() * (number + 1)); 
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
})

// -----------------------------------------------------

// document.getElementById("div").onclick = function() {
//     alert('You clicked on the div!');   
// }

// attachEvent

// document.getElementById("div").addEventListener('click', function (){
//     alert("You clicked on the div!");
// });

// What you need to learn
// Type, Timestamp, defaultPrevented
// Target, toElement, scrElement, currectTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById("div").addEventListener('click', function(e){
//     console.log(e);
// },false); // you can do true also but by default it is false

// document.getElementById("div").addEventListener('click', function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Stoping");
// },false);

// document.getElementById("div").addEventListener('click', function(e){
//     console.log(e.target);
// },false);



