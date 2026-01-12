function checkAge() {
    let age = Number(document.getElementById("age").value);

    if (age >= 18) {
        document.getElementById("output").innerHTML = "Eligible for vote";
    } else {
        document.getElementById("output").innerHTML = "Not Eligible for vote";
    }
}
