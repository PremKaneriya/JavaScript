let arr = [];

const taskDefault = () => {
    let print = '';

    print = print + '<ul>';

    arr.map((v, i) => {
        print = print + '<li><i class="fa-solid fa-circle-dot"></i>' + v + '</li>' + '<button id="removeBTN" onclick="remove('+ i +')">x</button>'
    });

    print = print + '</ul>';
    
    document.getElementById("displayTask").innerHTML = print;

    document.getElementById("task").value = '';
}

const remove = (index) => {
    arr.splice(index, 1);
    taskDefault();
}

const  taskReturn = () => {
    event.preventDefault();
    
    let task = document.getElementById("task").value;

    arr.push(task);

    taskDefault();

}


