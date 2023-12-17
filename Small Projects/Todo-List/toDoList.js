let arr = [];

function taskReturn() {
    event.preventDefault();
    
    let task = document.getElementById("task").value;

    arr.push(task);

    let disp = document.getElementById("displayTask");
       
    disp.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        disp.innerHTML = disp.innerHTML + '<div><i class="fa-solid fa-circle-dot"></i>' + arr[i] + '</div>';
    }
    
    document.getElementById("task").value = '';

}


