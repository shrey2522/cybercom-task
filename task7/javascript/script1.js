let marks = Number();



if (typeof(marks) !== "number" || isNaN(marks)) {
    document.getElementById("output").innerHTML = "Invalid input! Please enter a number.";
    
} else if (marks >= 80) {
   document.getElementById("output").innerHTML = "Grade A";
   
} else if(marks>=70) {
    document.getElementById("output").innerHTML = "Grade B";  
}
else if(marks>=60) {
     document.getElementById("output").innerHTML = "Grade C";
     
}
else{
    document.getElementById("output").innerHTML = "Grade D";
}

// let text=marks >=80  ? "Grade A" :
//  marks>=70 && marks<80 ? "Grade B" :  
//  marks>=60 && marks<70  ? "Grade C" : "Grade D";

// document.getElementById("output").innerHTML = telo


