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
        print = print + `<div id="printDiv"><p id="uupadate" onclick="updateArray('${v}', ${i})"><i class="fa-solid fa-plus fa-lg" style="color: #000000;"></i></p><h4>${v}</h4><p id="removeBTN" onclick="remove('${i}')"><i class="fa-solid fa-xmark fa-lg" style="color: #000000;"></i></p></div id="printDiv">`;
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

    if (update !== null || update === 0) {
        arr[update] = task;
        update = null;
    } else {
        arr.push(task);
    }
    taskDefault();
}


