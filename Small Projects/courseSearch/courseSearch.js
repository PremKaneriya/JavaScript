let arr = [];
let update = null;

const updateArray = (value, index) => {
    document.getElementById("courseSelect").value = `${value}`;
    update = index;
}

const taskDefault = () => {
    let print = '';

    print = print + '<ul>';

    arr.map((v, i) => {
        print = print + `<li><button id="uupadate" onclick="updateArray('${v}', ${i})">E</button>${v}<button id="removeBTN" onclick="remove('${i}')"> D </button>` 
        // print = print + `<div id="printDiv"><p id="uupadate" onclick="updateArray('${v}', ${i})"><i class="fa-solid fa-pencil" style="color: #000000;"></i></p><h4>${v}</h4><p id="removeBTN" onclick="remove('${i}')"><i class="fa-solid fa-xmark fa-lg" style="color: #000000;"></i></p></div id="printDiv">`;
    });
    
    print = print + '</ul>';

    document.getElementById("dispCourse").innerHTML = print;
    document.getElementById("courseSelect").value = '';
}

const remove = (index) => {
    arr.splice(index, 1);
    taskDefault();
}

const taskReturn = () => {
    event.preventDefault();
    let courseSelect = document.getElementById("courseSelect").value;

    if (update !== null || update === 0) {
        arr[update] = courseSelect;
        update = null;
    } else {
        arr.push(courseSelect);
    }
    taskDefault();
}

const searchCourses = () => {
    
    let search = document.getElementById("searchInput").value;

    let doSearchCode = arr.filter(course => course.includes(search));

    const displaySearch = `<ul>${doSearchCode.map((v, i) => `<li><button onclick="updateArray('${v}', ${i})">E</button> ${v} <button onclick="remove(${i})">R</button></li>`).join('')}</ul>`;
    
    document.getElementById("dispCourse").innerHTML = displaySearch;

};
