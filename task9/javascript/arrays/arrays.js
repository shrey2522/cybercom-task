//finding an element in an array

let arr = ["1", 2, 4];

console.log(arr.indexOf(2));


// normalize array
arr = arr.map(String);

let value = "2";

// normalize value
console.log(arr.includes(String(value))); // true

console.log(arr);

//slice and splice operation 

const myArr1=arr.slice(0,1);
console.log(myArr1);


const myArr2=arr.splice(0,2);
console.log(myArr2);