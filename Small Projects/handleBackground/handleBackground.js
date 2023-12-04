function handleBackground() {
    event.preventDefault();
    let select = document.querySelector("select")
    let body = document.getElementById("body")
    
    if (select.value == "in") {
        body.style.backgroundColor = "red"
    } else if (select.value == "us") {
        body.style.backgroundColor = "green"
    } else if (select.value == "uk") {
        body.style.backgroundColor = "purple"
    } else {
        body.style.backgroundColor = "white"
    }

}