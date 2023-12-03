/* The code you provided is written in JavaScript and it demonstrates the usage of the Document Object
Model (DOM) in manipulating HTML elements. */
// Document Object Model

// 1. Selection Of Element

// let a = document.querySelector("h1")
// console.log(a);

// 2. Changing HTML

// let a = document.querySelector("h1")
// a.innerHTML = "Hello World" // This changes text 

// 3. Changing CSS

// let a = document.querySelector("h1")
// a.style.fontSize = "40px"
// a.style.color = "blue"
// a.style.backgroundColor = "lightblue"

// 4. Event Listener

// let a = document.querySelector("h1")
// a.addEventListener("click",function() {
//     a.style.background = "red"
// })

// ---------------------------------------------------------- // 

// let a = document.querySelector("h1")
// let btn = document.querySelector("#on")
// let btnoff = document.querySelector("#off")

// btn.addEventListener("click",function(){
//         a.style.color = "yellow"
//         a.style.backgroundColor = "black"
// })

// btnoff.addEventListener("click",function(){
//     a.style.color = "black"
//     a.style.backgroundColor = "white"
// })

// --------------------------------------------------- // 

// let a = document.querySelector("h1")
// a.style.color = "red" // this can do only for one (h1) to do for all h1 is to use
// document.querySelecterAll

// let a = document.querySelectorAll("h1");

// a.forEach(element => {
//     element.style.color = "red"
// });

// if your want to do this with Id
document.querySelector("box") // do not use # hashtag for all querySelecter 

// if your want to do this with Class
document.querySelectorClassName("box") // do not use . dot for all querySelecter 
// ----------------------------------------------------------- //

