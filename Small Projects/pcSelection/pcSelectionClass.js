function seePrice() {
    event.preventDefault();
    
    let processor = parseInt(document.getElementById("processor").value);
    let ram = parseInt(document.getElementById("ram").value);
    let memory = parseInt(document.getElementById("memory").value);
    let graphic = parseInt(document.getElementById("graphic").value);
    
    console.log(processor, ram, memory, graphic);

    let type = ''; 

    if (processor == 3000) {
        type = 'Student PC'
    } else if (processor == 6000 ) {
        if (ram == 4000) {
            type = "Professional PC"
        } else {
            type = "Student PC"
        }
    } else if (processor == 9000 && memory > 4000) {
        if (graphic > 0) {
            type  = "Gaming PC"
        } else {
            type = "Professional PC"
        }
    }

    let total = processor + ram + memory + graphic;

    document.getElementById("display").innerHTML = "Price = " + total + "Type = " + type;
 
}