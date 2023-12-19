let arr = [];

const taskDefault = () => {
    let print = '';

    print = print + '<ul>';

    arr.map((v, i) => {
        print = print + '<div><i class="fa-solid fa-circle-dot"></i>' + v + '</div>' + '<button id="removeBTN" onclick="remove('+ i +')"><i class="fa-solid fa-trash"></i></button>'
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


