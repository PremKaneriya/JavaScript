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

    print = print + '<ul>'
    arr.map((v) => {
        print = print + '<li>'
        print = print + '<br>' + v.id + '<br>' + v.name + '<br>' + v.salary;
        print = print + '</li>' 
    });
    print = print + '</ul>'

    document.getElementById("displayData").innerHTML = print;

}