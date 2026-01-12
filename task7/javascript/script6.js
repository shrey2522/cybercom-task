function checkValue() {
    let value = document.getElementById("inputValue").value;

    if (value) {
        document.getElementById("result").innerHTML = "Truthy Value";
    } else {
        document.getElementById("result").innerHTML = "Falsy Value";
    }
}
