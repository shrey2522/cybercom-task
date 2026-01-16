// 1. ELEMENT SELECTION
const taskInput = document.getElementById('taskInput');
const addBtn = document.querySelector('#addBtn'); // Using querySelector
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const description = document.getElementById('description');

// 2. EVENTS - Adding a click event listener
addBtn.addEventListener('click', function() {
    const taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. DYNAMIC UI UPDATE - Creating a new element
    const li = document.createElement('li');
    
    // Setting inner HTML dynamically
    li.innerHTML = `
        <span>${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    

    // Remove specific element
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // Appending the new element to the list
    taskList.appendChild(li);

    // Resetting input field
    taskInput.value = "";
});

// Clear All functionality
clearBtn.addEventListener('click', function() {
    // Changing CSS style directly via JS (DOM Manipulation)
    taskList.innerHTML = "";
    description.innerText = "All tasks cleared!";
    description.style.color = "red";
});