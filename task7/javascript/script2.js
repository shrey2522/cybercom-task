function checkEvenOdd() {
    let number = Number(document.getElementById("num").value);

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = "Even Number";
    } else {
        document.getElementById("result").innerHTML = "Odd Number";
    }
}
