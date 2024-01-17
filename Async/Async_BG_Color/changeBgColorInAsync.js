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