document.getElementById('display').style.display = 'none';

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
    } else if (processor == 6000) {
        if (ram == 4000) {
            type = "Professional PC"
        } else {
            type = "Student PC"
        }
    } else if (processor == 9000 && memory > 4000) {
        if (graphic > 0) {
            type = "Gaming PC"
        } else {
            type = "Professional PC"
        }
    }

    let checkProcessor = document.getElementById("processor");
    let checkRam = document.getElementById("ram")
    let checkMemory = document.getElementById("memory")
    let checkGraphics = document.getElementById("graphic")

    if (checkProcessor.value === '0') {
        document.getElementById('proErr').innerHTML = 'Please Select Processor';
    } else {
        document.getElementById('proErr').innerHTML = '';
        document.getElementById('display').style.display = 'block';

    }

    if (checkRam.value === '0') {
        document.getElementById('ramErr').innerHTML = 'Please Select Ram';
    } else {
        document.getElementById('ramErr').innerHTML = '';
        document.getElementById('display').style.display = 'block';

    }

    if (checkMemory.value === '0') {
        document.getElementById('memoErr').innerHTML = 'Please Select Memory';
    } else {
        document.getElementById('memoErr').innerHTML = '';
        document.getElementById('display').style.display = 'block';

    }
    
    if (checkGraphics.value === '0') {
        document.getElementById('graphicerr').innerHTML = 'Please Select Memory';
    } else {
        document.getElementById('graphicerr').innerHTML = '';
        document.getElementById('display').style.display = 'block';

    }

    let total = processor + ram + memory + graphic;
    

    document.getElementById("display").innerHTML = "Price = " + total + "Type = " + type;

}