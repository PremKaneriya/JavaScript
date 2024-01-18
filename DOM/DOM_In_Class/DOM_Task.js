// CreateElement // appendChild
const div = document.createElement('div');
div.innerHTML = 'New Div'
div.style.color = 'black'
div.style.border = '2px solid black'
div.style.padding = '12px'
document.body.appendChild(div);

// CreatetextNode // appendChild
const textNode = document.createTextNode('A textNode in JavaScript (DOM)')
const createDiv = document.getElementById('demo')
createDiv.style.border = '2px solid red'
createDiv.style.padding = '12px'
createDiv.style.marginBottom = '12px'
createDiv.appendChild(textNode);

// .remove
const textNodeRemove = document.createTextNode('Remove Div')
const dotRemove = document.getElementById('demo2')
dotRemove.appendChild(textNodeRemove);
dotRemove.remove()

// setAttribute
const setAttri = document.createTextNode('Set Attribute')
const setAttr = document.getElementById('demo3')
setAttr.setAttribute('title', 'demo 3');
setAttr.setAttribute('class', 'newDemo3')
setAttr.setAttribute('id', Math.floor(Math.random() * 1000))
setAttr.appendChild(setAttri)