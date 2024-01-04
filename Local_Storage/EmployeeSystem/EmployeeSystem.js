const empForm = document.getElementById('employeeForm');

empForm.addEventListener('submit', function () {
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

});
