let arr = [];

let update = null;

const updateArray = (value, index) => {
    document.getElementById("task").value = `${value}`;
    print = print + `<li>${value}</li>`;
    update = index;
}

const taskDefault = () => {

    let print = '';

    print = print + '<ul>';

    arr.map((v, i) => {
        print = print + `<div id="printDiv"><p id="uupadate" onclick="updateArray('${v}', ${i})"><i class="fa-solid fa-pencil" style="color: #000000;"></i></p><h4>${v}</h4><p id="removeBTN" onclick="remove('${i}')"><i class="fa-solid fa-xmark fa-lg" style="color: #000000;"></i></p></div id="printDiv">`;
    });

    print = print + '</ul>';


    document.getElementById("displayTask").innerHTML = print;

    document.getElementById("task").value = '';

}

const remove = (index) => {
    arr.splice(index, 1);
    taskDefault();
}

const taskReturn = () => {
    event.preventDefault();

    let task = document.getElementById("task").value;

    if (!task.trim()) {
        document.getElementById('taskerror').innerHTML = 'Please enter task';
        return;
    } else {
        document.getElementById('taskerror').innerHTML = '';
    }

    if (update !== null || update === 0) {
        arr[update] = task;
        update = null;
    } else {
        arr.push(task);
    }
    taskDefault();
}


// ------------------ cursor --------------------

const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
    })
    TweenMax.to($smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
    })
}

// Hover an element
function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 4
    })
}

function onMouseHoverOut() {
    TweenMax.to($bigBall, .3, {
        scale: 1
    })
}

// ------------------ cursor --------------------
