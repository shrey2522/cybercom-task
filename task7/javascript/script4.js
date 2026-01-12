function compare() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (a > b) {
        document.getElementById("result").innerHTML = "Number 1 is greater";
    } else if (a < b) {
        document.getElementById("result").innerHTML = "Number 2 is greater";
    } else {
        document.getElementById("result").innerHTML = "Both numbers are equal";
    }
}
