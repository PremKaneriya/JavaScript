let update = null;

const handleSearch = () => {
    event.preventDefault();

    const searchInput = document.getElementById("handleSearch").value;

    let localStoreData = JSON.parse(localStorage.getItem('employee'));

    let searchFilter = localStoreData.filter((a) => a.empName.includes(searchInput) || a.salary.toString().includes(searchInput));

    displayLocalStorage(searchFilter);

    console.log(searchFilter);

}

const handleDelete = (id) => {
    // console.log(id);

    let localRemove = JSON.parse(localStorage.getItem('employee'));

    const index = localRemove.findIndex((v) => v.id === id);

    // console.log(index);

    localRemove.splice(index, 1);

    localStorage.setItem('employee', JSON.stringify(localRemove));

    displayLocalStorage();
}

const handleUpdate = (id) => {

    let updateData = JSON.parse(localStorage.getItem('employee'));

    let index = updateData.findIndex((v) => v.id === id);

    document.getElementById('empName').value = updateData[index].empName;
    document.getElementById('empNum').value = updateData[index].salary;

    update = index;

}

const displayLocalStorage = () => {
    let localStoreDisp = JSON.parse(localStorage.getItem('employee'));

    let print = '';

    print += '<table border="1px solid black" id="jsTable"><tr><th>Name</th><th>Salary</th><th>Actions</th></tr>';

    localStoreDisp.map((v, i) => {
        print += `<tr><td>${v.empName}</td><td>${v.salary}</td><td>
        
        <button onclick="handleUpdate(${v.id})">E</button>

        <button onclick="handleDelete(${v.id})">X</button></td></tr>`
    });

    print += '</table>';

    document.getElementById('displayLocalStorage').innerHTML = print;

}

const handleSubmit = () => {
    event.preventDefault();

    const localStoreData = JSON.parse(localStorage.getItem('employee'));

    let empName = document.getElementById("empName").value;
    let empNum = document.getElementById("empNum").value;

    const locObj = {
        id: Math.floor(Math.random() * 10000),
        empName,
        salary: parseInt(empNum)
    }


    if (update !== null) {
        console.log('yes');
        localStoreData[update].empName = empName;
        localStoreData[update].salary = parseInt(empNum);
        update = null;
    } else {
        localStoreData.push(locObj);
    }

    localStorage.setItem('employee', JSON.stringify(localStoreData));
    displayLocalStorage();

    document.getElementById('empName').value = '';
    document.getElementById('empNum').value = '';
}

const empForm = document.getElementById('employeeForm');

empForm.addEventListener('submit', handleSubmit);

window.onload = displayLocalStorage;