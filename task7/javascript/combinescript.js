// 1. Odd or Even
function checkEvenOdd() {
    let num = Number(document.getElementById("evenOddInput").value);
    document.getElementById("evenOddResult").innerHTML =
        (num % 2 === 0) ? "Even Number" : "Odd Number";
}

// 2. Greater of Two Numbers
function compareNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (a > b) {
        document.getElementById("compareResult").innerHTML = "Number 1 is greater";
    } else if (a < b) {
        document.getElementById("compareResult").innerHTML = "Number 2 is greater";
    } else {
        document.getElementById("compareResult").innerHTML = "Both numbers are equal";
    }
}

// 3. Age Eligibility
function checkAge() {
    let age = Number(document.getElementById("ageInput").value);
    document.getElementById("ageResult").innerHTML =
        age >= 18 ? "Eligible" : "Not Eligible";
}

// 4. Day Finder (Switch Case)
function findDay() {
    let day = document.getElementById("dayInput").value;
    let dayName;

    switch (day) {
        case "1": dayName = "Monday"; break;
        case "2": dayName = "Tuesday"; break;
        case "3": dayName = "Wednesday"; break;
        case "4": dayName = "Thursday"; break;
        case "5": dayName = "Friday"; break;
        case "6": dayName = "Saturday"; break;
        case "7": dayName = "Sunday"; break;
        default: dayName = "Invalid day";
    }

    document.getElementById("dayResult").innerHTML = dayName;
}

// 5. Truthy & Falsy
function checkTruthyFalsy() {
    let value = document.getElementById("truthyInput").value;
    document.getElementById("truthyResult").innerHTML =
        value ? "Truthy Value" : "Falsy Value";
}
