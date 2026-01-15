// --- 1. DATA STORAGE: ARRAYS ---
// A list of items (ordered collection)
let tasks = ["Study JavaScript", "Fix bugs", "Code Review"];

// Using slice to copy (non-destructive)
let viewOnlyTasks = tasks.slice(0, 2); 

// Using splice to update (destructive)
tasks.splice(1, 1, "Practice Objects"); // Removes "Fix bugs" and adds "Practice Objects"


// --- 2. DATA STORAGE: OBJECTS ---
// Grouping related data (key-value pairs)
let mentor = {
    name: "Alex",
    role: "Senior Developer",
    yearsExperience: 5,
    isAvailable: true
};


// --- 3. DATA STORAGE: ARRAY OF OBJECTS ---
// This is how we store complex data for "Data Storage and Display"
let students = [
    { id: 1, name: "Sam", score: 85 },
    { id: 2, name: "Jordan", score: 92 },
    { id: 3, name: "Taylor", score: 78 }
];


// --- 4. ITERATION (Processing the Data) ---
console.log("--- Student Performance Report ---");

// Using .forEach to display each item
students.forEach((student) => {
    let status = student.score >= 80 ? "Excellent" : "Good";
    console.log(`Student: ${student.name} | Grade: ${status}`);
});

// Using .map to normalize/transform data (as we did in your previous code)
let studentNames = students.map(student => student.name.toUpperCase());

console.log("\n--- Summary ---");
console.log("Current Tasks:", tasks);
console.log("Student Names List:", studentNames);
console.log("Mentor Name:", mentor.name);