# In JavaScript, async is a keyword used in function declarations to indicate that the function returns a promise. An asynchronous function is a function that operates asynchronously via the event loop, using an implicit Promise to return its result. The async keyword is used to write asynchronous code more concisely and to handle promises in a cleaner way.

# Project 1

```javascript
    <h1>Async In Js</h1>
    <button id="stop">Stop</button>

    const timeOut = () => {
        console.log('Async in Javascript');
    }

    const changeText = () => {
        document.querySelector('h1').innerHTML = 'Learn Javascript'
    }

    const changeTimeOut = setTimeout(changeText, 2000);

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeTimeOut);
        console.log('Time Out Stop ');
    })
```

# Project 2

```javascript
   <h1>Learn Async In JS</h1>
    <button id="start">start</button>
    <button id="stop">stop</button>

    const setIntervalTest = () => {
        console.log('Prem', Date.now);
    }


    document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(setInter);
        console.log('Time Out Stop ');
    })

    document.querySelector('#start').addEventListener('click', function() {
        setInter = setInterval(setIntervalTest, 1000);
    })
```

# Project 3

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table border="1px solid white">
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === '' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>

    </table>
    </div>
    `;
});
```

# Project 4

```javascript
const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalValid;
const changeColorLoop = () => {
    if(!intervalValid){
        intervalValid = setInterval(changeBgStart, 1000);
    }

    function changeBgStart(){
        document.body.style.backgroundColor = randomColor();
    }
}

const changeBgEnd = () => {
    clearInterval(intervalValid);
    intervalValid = null;
}

document.querySelector('#start').addEventListener('click', changeColorLoop);
document.querySelector('#stop').addEventListener('click', changeBgEnd);
```
