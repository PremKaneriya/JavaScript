let arr = [];

const  taskReturn = () => {
    event.preventDefault();
    
    let task = document.getElementById("task").value;

    arr.push(task);

    let print = '';

    print = print + '<ul>';

    arr.map((v) => {
        print = print + '<div><i class="fa-solid fa-circle-dot"></i>' + v + '</div>'
    });

    print = print + '</ul>';
    
    document.getElementById("displayTask").innerHTML = print;

    document.getElementById("task").value = '';

}


