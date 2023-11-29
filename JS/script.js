// Navigation Bar:
function toggleNavbar() {
    // x and assigns it the value of the HTML element with the ID navbar
    // getElementById method allows JavaScript to interact with HTML elements
    let x = document.getElementById("navbar");
    // checks if className (HTML) of element navbar is equal to the string navbar
    if (x.className === "navbar") {
        // this line adds to the end of the string to make it "responsive" to the existing class name(s) of the element
        x.className += " responsive";
        // 
    } else {
        // It sets the className property of the element to "navbar," effectively removing the "responsive" class if it was previously added.
        x.className = "navbar";
    }
}

// To Do List:
let todoList = [];
const listContainer = document.getElementById("toDoList");
const taskNameInput = document.getElementById("taskName");

function renderList() {
    listContainer.innerHTML = "";

    todoList.forEach((item) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.completed;
        checkbox.addEventListener("change", () => toggleComplete(item.id));

        const itemName = document.createElement("span");
        itemName.textContent = item.name;

        const deleteIcon = document.createElement("span");
        deleteIcon.textContent = "❌";
        deleteIcon.className = "delete";
        deleteIcon.addEventListener("click", () => deleteItem(item.id));

        listItem.appendChild(checkbox);
        listItem.appendChild(itemName);
        listItem.appendChild(deleteIcon);

        listContainer.appendChild(listItem);

        if (item.completed) {
            itemName.style.textDecoration = "line-through";
        }
    });
}

function addItem() {
    const taskName = taskNameInput.value.trim();

    if (taskName.length > 0) {
        const newItem = {
            name: taskName,
            completed: false,
        };

        todoList.push(newItem);
        taskNameInput.value = "";
        renderList();
    } else {
        alert("Please enter a valid task name.");
    }
}

addItemButton.addEventListener("click", addItem);

function toggleComplete(itemId) {
    const item = todoList.find((item) => item.id === itemId);
    if (item) {
        item.completed = !item.completed;
        renderList();
    }
}

function deleteItem(itemId) {
    todoList = todoList.filter((item) => item.id !== itemId);
    renderList();
}

function sortItems() {
    todoList.sort((a, b) => a.name.localeCompare(b.name));
    renderList();
}

window.addEventListener("load", renderList);