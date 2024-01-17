// DOM

// const parent = document.querySelector('.parent')

// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);    
// }

// parent.children[1].style.color = 'orange'
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log('Nodes: ', parent.childNodes);

// ------------------------------------------------------

// const div = document.createElement('div');
// console.log(div);
// div.className = 'newClassDiv'
// div.id = (Math.random() * 100 + 1)
// div.setAttribute("title", "newDiv")
// div.style.backgroundColor = 'blue'
// div.style.color = 'white'
// div.style.fontWeight = 'bolder'
// div.style.padding = '22px'
// div.innerText = 'DOM Manipulation'
// const addText = document.createTextNode('DOM Manipulation')
// div.appendChild(addText)

// document.body.appendChild(div)

// ------------------------------------------------------

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li); 
}
addLanguage('Python')
addLanguage('TypeScript')


function addOptimalDom (langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addOptimalDom('JavaScript')
addOptimalDom('NodeJS')


// Edit in DOM

// const sssecLang = document.querySelector("li:nth-child(2)")
// // console.log(sssecLang);
// // sssecLang.innerHTML = 'C#';
// const newli = document.createElement('li')
// newli.textContent = 'C language'
// newli.style.color = 'orange'
// sssecLang.replaceWith(newli);

// edit
// const firstLang = document.querySelector('li:nth-child()')
// firstLang.outerHTML = '<li>MongoDB</li>'


// Remove from DOM
// const lastLang = document.querySelector('li:last-child')
// lastLang.remove();
