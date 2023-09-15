const taskInput = document.getElementById("taskInput");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;
        pendingTasks.appendChild(taskItem);
        taskInput.value = "";
    }
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector("span");
    const newText = prompt("Edit task:", taskText.innerText);
    if (newText !== null) {
        taskText.innerText = newText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

function toggleTaskStatus(taskItem) {
    if (taskItem.classList.contains("completed")) {
        taskItem.classList.remove("completed");
        pendingTasks.appendChild(taskItem);
    } else {
        taskItem.classList.add("completed");
        completedTasks.appendChild(taskItem);
    }
}

pendingTasks.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        toggleTaskStatus(e.target);
    }
});

completedTasks.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        toggleTaskStatus(e.target);
    }
});
