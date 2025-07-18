
const TASKS_KEY = "kanbanTasks";
let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || {};

function generateUniqueId() {
    return `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function saveTasks(columnId) {
    const columnTasks = [];
    document.querySelectorAll(`#${columnId} .text, #${columnId} .text2, #${columnId} .text3`).forEach(task => {
        columnTasks.push(task.value);
    });
    if (columnId === "div_text") localStorage.setItem("tasks1", JSON.stringify(columnTasks));
    else if (columnId === "div_text2") localStorage.setItem("tasks2", JSON.stringify(columnTasks));
    else if (columnId === "div_text3") localStorage.setItem("tasks3", JSON.stringify(columnTasks));
}

function loadTasks() {
    tasks = {};
    const saved1 = JSON.parse(localStorage.getItem("tasks1")) || [];
    saved1.forEach(todo => {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text" };
        renderTask(taskId);
    });
    const saved2 = JSON.parse(localStorage.getItem("tasks2")) || [];
    saved2.forEach(todo => {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text2" };
        renderTask(taskId);
    });
    const saved3 = JSON.parse(localStorage.getItem("tasks3")) || [];
    saved3.forEach(todo => {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text3" };
        renderTask(taskId);
    });
    assignTaskIds();
    console.log("Tasks loaded:", tasks); // برای دیباگ
}

function assignTaskIds() {
    document.querySelectorAll(".task-item, .task-item2, .task-item3").forEach((task, index) => {
        if (!task.id) {
            task.id = `task-${Date.now()}-${index}`;
        }
    });
}

function renderTask(taskId) {
    const task = tasks[taskId];
    if (!task) return;

    let taskElement = document.getElementById(taskId);
    if (!taskElement) {
        taskElement = document.createElement("div");
        taskElement.id = taskId;
        taskElement.setAttribute("draggable", "true");
        taskElement.addEventListener("dragstart", drag);

        const Icon = document.createElement("i");
        Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
        Icon.style.cursor = "pointer";
        Icon.addEventListener("click", () => {
            removeTask(taskId, task.columnId);
        });

        const input = document.createElement("input");
        input.value = task.value;
        input.type = "text";
        input.className = `text ${getClassForInput(task.columnId)}`;
        input.addEventListener("input", (e) => {
            tasks[taskId].value = e.target.value;
            saveTasks(task.columnId); // به‌روزرسانی localStorage با تغییر اینپوت
        });

        taskElement.classList.add("task-item", getClassForTask(task.columnId));
        taskElement.appendChild(Icon);
        taskElement.appendChild(input);
    } else {
        // به‌روزرسانی مقدار اینپوت اگه قبلاً رندر شده
        taskElement.querySelector("input").value = task.value;
    }

    document.getElementById(task.columnId).appendChild(taskElement);
}

function getClassForTask(columnId) {
    switch (columnId) {
        case "div_text": return "task-item";
        case "div_text2": return "task-item2";
        case "div_text3": return "task-item3";
        default: return "task-item";
    }
}

function getClassForInput(columnId) {
    switch (columnId) {
        case "div_text": return "text";
        case "div_text2": return "text2";
        case "div_text3": return "text3";
        default: return "text";
    }
}

function Goal() {
    let todo = document.getElementById("main_input").value;
    if (todo) {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text" };
        renderTask(taskId);
        saveTasks("div_text");
        assignTaskIds();
    }
    document.getElementById("main_input").value = "";
}

function Goal2() {
    let todo = document.getElementById("main_input2").value;
    if (todo) {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text2" };
        renderTask(taskId);
        saveTasks("div_text2");
        assignTaskIds();
    }
    document.getElementById("main_input2").value = "";
}

function Goal3() {
    let todo = document.getElementById("main_input3").value;
    if (todo) {
        const taskId = generateUniqueId();
        tasks[taskId] = { value: todo, columnId: "div_text3" };
        renderTask(taskId);
        saveTasks("div_text3");
        assignTaskIds();
    }
    document.getElementById("main_input3").value = "";
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    const taskId = ev.target.id;
    ev.dataTransfer.setData("text", taskId);
    ev.dataTransfer.setData("sourceDiv", tasks[taskId].columnId);
}

function drop(ev, targetId) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("text");
    const sourceDivId = ev.dataTransfer.getData("sourceDiv");
    const taskElement = document.getElementById(taskId);

    if (taskElement && sourceDivId !== targetId) {
        if (targetId === "div_text") {
            taskElement.classList.remove("task-item2", "task-item3");
            taskElement.classList.add("task-item");
            taskElement.querySelector("input").classList.remove("text2", "text3");
            taskElement.querySelector("input").classList.add("text");
        } else if (targetId === "div_text2") {
            taskElement.classList.remove("task-item", "task-item3");
            taskElement.classList.add("task-item2");
            taskElement.querySelector("input").classList.remove("text", "text3");
            taskElement.querySelector("input").classList.add("text2");
        } else if (targetId === "div_text3") {
            taskElement.classList.remove("task-item", "task-item2");
            taskElement.classList.add("task-item3");
            taskElement.querySelector("input").classList.remove("text", "text2");
            taskElement.querySelector("input").classList.add("text3");
        }

        document.getElementById(targetId).appendChild(taskElement);
        tasks[taskId].columnId = targetId;

        // حذف از localStorage ستون مبدا
        removeFromLocalStorage(sourceDivId, taskElement.querySelector("input").value);
        // به‌روزرسانی localStorage ستون مقصد
        saveTasks(sourceDivId); // به‌روزرسانی مبدا
        saveTasks(targetId);    // به‌روزرسانی مقصد
        assignTaskIds();
    }
}

function removeFromLocalStorage(key, valueToRemove) {
    const tasks = JSON.parse(localStorage.getItem(key)) || [];
    const updatedTasks = tasks.filter(task => task !== valueToRemove);
    localStorage.setItem(key, JSON.stringify(updatedTasks));
}

function removeTask(taskId, columnId) {
    const task = tasks[taskId];
    if (task) {
        removeFromLocalStorage(columnId, task.value);
        delete tasks[taskId];
        const taskElement = document.getElementById(taskId);
        if (taskElement) taskElement.remove();
        saveTasks(columnId); // به‌روزرسانی localStorage بعد از حذف
        console.log("Task removed:", taskId, tasks); // برای دیباگ
    }
}

document.addEventListener("keydown", function (x) {
    if (x.key === "Enter") {
        if (document.activeElement === document.getElementById("main_input")) Goal();
        else if (document.activeElement === document.getElementById("main_input2")) Goal2();
        else if (document.activeElement === document.getElementById("main_input3")) Goal3();
    }
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-trash")) {
        const taskElement = e.target.parentElement;
        const taskId = taskElement.id;
        const columnId = taskElement.parentElement.id;
        removeTask(taskId, columnId);
    }
});

loadTasks();
assignTaskIds();