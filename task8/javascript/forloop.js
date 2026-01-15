// ================================
// FOR LOOP
// ================================
// console.log("For Loop:");

// for (let i = 1; i <= 5; i++) {
//     if(i==3) break;
//   console.log(i);
// }

// ================================
// WHILE LOOP
// ================================
// console.log("While Loop:");

// let j = 0;
// while (j <= 5) {
//     j++;
//     if(j==3) 
//         {continue;}
//   console.log(j);
  
  
// }

// ================================
// DO-WHILE LOOP
// ================================
// console.log("Do-While Loop:");

// let k = 2;
// do {
//   console.log(k);
//   k++;
// } while (k <= 1);

// ================================
// FOR...OF LOOP (Array)
// // ================================
// console.log("For...of Loop:");

// const names = ["Shrey", "Aman", "Ravi"];

// for (const name of names) {
//   console.log(name);
// }

// ================================
// FOR...IN LOOP (Object)
// ================================
// const car ={
//     manufacturer: "maruti",
//     model:"wagon R",
//     year:1999,
//     color:"white"
// };

// for (const key in car){
//     console.log(`${key} `);
    
// }


// for in for array and what is the problem of using it in the array situation 

// const arr=["banana","apple","orange"]

// for( const index in arr){
//     console.log(`Index:${index}, type of fruit ${arr[index]}`);
    
// }


//for of use in array 
// const tasks=["running", "sleeping","coding"]

// for( const task of tasks){
//     console.log(`to do:${task}`);
    
// }
// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }
// // "0" "1" "2" "foo"

// for (const i of arr) {
//   console.log(i);
// }

// function myFunct(obj) {
//     obj.make="toyota"
// }
// const myCar={
//     make:"honda",
//     year:2020,
//     color:"yellow"
// }
// console.log(myCar.make);
// myFunct(myCar);
// console.log(myCar.make);

// function arrayChange(theArr){
//     theArr[0]=30;
// }

// const arr=[45];
// console.log(arr[0]);
// arrayChange(arr);
// console.log(arr[0]);

// function addSquare(a,b){
//     const square= x =>x*x;
//     return square(a)+square(b);
// }
// console.log(addSquare(3,4));

// square(5);
// function square(n){
//     return n * n;
// }

// console.log(sum(1,3));

// function sum(a,b){
//     return a+b;
// }

/// function accesing before initilization 
// console.log(square(5));

// const square=function(n) {
//     return n*n;
// };


//IIFE
// (function (x,b){
//     const sum = x+b;
//     console.log(sum);
//     return sum;
// }) (2,3);

// const value= (function (x,b) {
//     subtract=x-b;
//     console.log(subtract);
//     return subtract;
// })(4,3);


// const pet = function (name){
//     const getName=function() {
//         return name;
//     };
//     return getName;
// };

// const myPet= pet("roni");
// console.log(myPet());

// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }
// console.log(multiply(5));

//arrow function
// const a=["hello", "how", "are", "you"];

// const a2=a.map(function(s){
//     return s.length;
// });
// console.log(a2);

// const a1=a.map((s)=>s.length);
// console.log(a1);

// function person(){
//     this.age=0;
// setInterval(function growUp(){
//     this.age++;
// },1000);
// }
// const p=new person();

// console.log(person);

//fix
function person(){
    this.age=0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}
const p=new person();