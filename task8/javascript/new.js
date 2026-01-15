//for loop
// const grades = [80, 90, 70];

// for (let i = 0; i < grades.length; i++) {
//   console.log(`Test #${i + 1}: ${grades[i]}`);
// }

//for of loop
// const colors = ["Red", "Green", "Blue"];

// for (const color of colors) {
//   console.log(`Current color: ${color}`);
// }

//for of loop with object
// const person={
//     name:"John",
//     age:30,
//     city:"New York"
// };

// for (const key of Object.keys(person)) {
//     console.log(key,person[key]);
// }

//for in loop
// const laptop = { brand: "Apple", chip: "M3", ram: "16GB" };

// for (const key in laptop) {
//   console.log(`${key} is ${laptop[key]}`);
// }

//while loop
// let fuel = 3;
// while (fuel > 0) {
//   console.log(`Driving... fuel left: ${fuel}L`);
//   fuel--;
// }

//do while loop
// let attempts = 0;
// do {
//   console.log("Connecting to database...");
//   attempts++;
// } while (attempts < 1); // Even if this was false, the code above ran once.
// let  arr = [1,2,4];
// console.log(arr.includes(1));

let arr = ["1", 2, 4].map(String);
console.log(arr.includes(1)); 
