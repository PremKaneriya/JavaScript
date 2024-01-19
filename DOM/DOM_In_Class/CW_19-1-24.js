const handleRemove = (id) => {
    const removeId = document.getElementById(id);
    removeId.remove();

    console.log(id);
} 

const handleAddDom = () => {
    event.preventDefault();
    const input = document.getElementById('input').value;

    let rNo = Math.floor(Math.random() * 10000)

    const div = document.createElement('div');
    div.setAttribute('id', 'city-' + rNo);
    const textContent = document.createTextNode(input);
    div.appendChild(textContent);

    const btn = document.createElement('button');
    btn.setAttribute('onclick', `handleRemove('city-${rNo}')`);
    const btnText = document.createTextNode('x');
    div.appendChild(btn)
    btn.appendChild(btnText)

    const display = document.getElementById('display');

    display.appendChild(div);

}

const formId = document.getElementById('formId')

formId.addEventListener('submit', handleAddDom);
