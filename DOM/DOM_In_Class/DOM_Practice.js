const liItem = document.querySelectorAll('li');

liItem.forEach((v) => {
    v.style.color = 'orange';
    v.style.fontSize = '20px';
    v.addEventListener('click', function(){
        console.log(v);
    })
})

const selectH1 = document.querySelector('h1');
selectH1.textContent += ' Node JS'
selectH1.innerHTML += ' React JS'
selectH1.innerText += ' Mongo DB'
// Method 1 - Using Event Listener
// selectH1.addEventListener('mouseover', ()=>{
//     selectH1.style.color = 'red';
// }) 
// selectH1.addEventListener('mouseleave', ()=>{
//     selectH1.style.color = 'white';
// }) 


const newDiv = document.createElement('div')
newDiv.textContent = 'New Div DOM JS'
document.body.appendChild(newDiv)

const newh1 = document.createElement('h1');
const logh1 = document.getElementById('demo');
logh1.setAttribute('class', 'demoDOM')
logh1.textContent = 'New Append Child'
logh1.appendChild(newh1)

const newLi = document.getElementById('newLi');
const dispLi = document.createTextNode('New Li TextNode Element')
newLi.style.color = 'orange'
newLi.style.padding = '12px'
newLi.style.border = '2px solid white'
newLi.style.margin = '20px 0'
newLi.appendChild(dispLi)

const demo2 = document.getElementById('demo2');
const newDemo = document.createTextNode('New Demo 2');
demo2.style.color = 'green'
demo2.style.padding = '12px'
demo2.style.border = '2px solid white'
demo2.style.margin = '20px 0'
demo2.appendChild(newDemo)