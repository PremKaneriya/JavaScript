const handleDelete = (id) => {
    // console.log(id);

    let localRemove = JSON.parse(localStorage.getItem('employee'));

    const index = localRemove.findIndex((v) => v.id === id);

    // console.log(index);

    localRemove.splice(index, 1);

    localStorage.setItem('employee', JSON.stringify(localRemove));

    displayLocalStorage();
}

const handleUpdate = (empName, salary) => {
    // console.log(empName, salary);

    let updateEmp = JSON.parse(localStorage.getItem('employee'));

    document.getElementById('empName').value = empName;
    document.getElementById('empNum').value = salary;

    updateEmp.empName = empName;
    updateEmp.empNum = empNum;

    localStorage.setItem('employee', JSON.stringify(updateEmp));

    displayLocalStorage();

}

const displayLocalStorage = () => {
    let localStoreDisp = JSON.parse(localStorage.getItem('employee'));

    let print = '';

    print += '<table border="1px solid black" id="jsTable"><tr><th>Name</th><th>Salary</th><th>Actions</th></tr>';

    localStoreDisp.map((v, i) => {
        print += `<tr><td>${v.empName}</td><td>${v.salary}</td><td><button onclick="handleUpdate('${v.empName}', ${v.salary})">E</button><button onclick="handleDelete(${v.id})">X</button></td></tr>`
    });

    print += '</table>';

    document.getElementById('displayLocalStorage').innerHTML = print;

}

const handleSubmit = () => {
    event.preventDefault();

    let empName = document.getElementById("empName").value;
    let empNum = document.getElementById("empNum").value;

    const locObj = {
        id: Math.floor(Math.random() * 10000),
        empName,
        salary: parseInt(empNum)
    }

    console.log(locObj);

    const localStoreData = JSON.parse(localStorage.getItem('employee'));

    if (localStoreData === null) {
        localStorage.setItem('employee', JSON.stringify([locObj]));
    } else {
        localStoreData.push(locObj);
        localStorage.setItem('employee', JSON.stringify(localStoreData))
    }

    displayLocalStorage();
}


const empForm = document.getElementById('employeeForm');

empForm.addEventListener('submit', handleSubmit);

window.onload = displayLocalStorage;