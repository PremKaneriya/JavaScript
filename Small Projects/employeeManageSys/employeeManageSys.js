let arr = [];

const employeeSubmit = () => {
    event.preventDefault();
    
    let employeeName = document.getElementById("entname").value;
    let employeeSalary = document.getElementById("entsal").value;
    let employeeID = (Math.random() * 100).toFixed(7);


    const employeeObj = {
        id: employeeID,
        name: employeeName,
        salary: employeeSalary
    }

    arr.push(employeeObj);
    // console.log(arr);

    let print = '';

    print = print + '<ol>'
    arr.map((v) => {
        print = print + '<li>'
        print = print + '<br>' + 'ID :' + v.id + '<br>' + 'Name :' +  v.name + '<br>' + 'Salary Per Month :' + v.salary;
        print = print + '</li>' 
    });
    print = print + '</ol>'

    document.getElementById("displayData").innerHTML = print;

}