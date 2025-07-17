

function Goal() {
  let todo = document.getElementById("main_input").value;

 
 if(todo) {

 

  const task = document.createElement("div");
  task.classList.add("task-item");

  
  const Icon = document.createElement("i");
  Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
  Icon.style.cursor = "pointer";

  
  const input = document.createElement("input");
  input.value = todo;
  input.className = "text";
  input.type = "text";



  
  task.appendChild(Icon);
  task.appendChild(input);

 
  document.getElementById("div_text").appendChild(task);

  saveTasks1(); 


 }
 
  document.getElementById("main_input").value = "";
}


document.addEventListener("keydown", function (x) {
  if (x.key === "Enter") {
    Goal();
  }
});


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove(); 
  }
});







function Goal2() {
  let todo = document.getElementById("main_input2").value;

 
 if(todo) {

 

  const task = document.createElement("div");
  task.classList.add("task-item2");

  
  const Icon = document.createElement("i");
  Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
  Icon.style.cursor = "pointer";

  
  const input = document.createElement("input");
  input.value = todo;
  input.className = "text2";
  input.type = "text";


  
  task.appendChild(Icon);
  task.appendChild(input);

 
  document.getElementById("div_text2").appendChild(task);

  saveTasks2(); 

 }
 
  document.getElementById("main_input2").value = "";
}


document.addEventListener("keydown", function (m) {
  if (m.key === "Enter") {
    Goal2();
  }
});


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove(); 
  }
});





function Goal3() {
  let todo = document.getElementById("main_input3").value;

 
 if(todo) {

 

  const task = document.createElement("div");
  task.classList.add("task-item3");

  
  const Icon = document.createElement("i");
  Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
  Icon.style.cursor = "pointer";

  
  const input = document.createElement("input");
  input.value = todo;
  input.className = "text3";
  input.type = "text";



  
  task.appendChild(Icon);
  task.appendChild(input);

 
  document.getElementById("div_text3").appendChild(task);

 saveTasks3(); 

 }
 
  document.getElementById("main_input3").value = "";
}


document.addEventListener("keydown", function (n) {
  if (n.key === "Enter") {
    Goal3();
  }
});


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    const taskElement = e.target.parentElement;
    const inputElement = taskElement.querySelector("input");

    const value = inputElement.value;

    if (taskElement.classList.contains("task-item")) {
      removeFromLocalStorage("tasks1", value);
    } else if (taskElement.classList.contains("task-item2")) {
      removeFromLocalStorage("tasks2", value);
    } else if (taskElement.classList.contains("task-item3")) {
      removeFromLocalStorage("tasks3", value);
    }

    taskElement.remove(); // حذف از DOM
  }
});

function removeFromLocalStorage(key, valueToRemove) {
  const tasks = JSON.parse(localStorage.getItem(key)) || [];
  const updatedTasks = tasks.filter(task => task !== valueToRemove);
  localStorage.setItem(key, JSON.stringify(updatedTasks));
}


function removeFromLocalStorage(key, valueToRemove) {
  const tasks = JSON.parse(localStorage.getItem(key)) || [];
  const updatedTasks = tasks.filter(task => task !== valueToRemove);
  localStorage.setItem(key, JSON.stringify(updatedTasks));
}




function saveTasks1() {
  const tasks = [];
  document.querySelectorAll("#div_text .text").forEach(task => {
    tasks.push(task.value);
  });
  localStorage.setItem("tasks1", JSON.stringify(tasks));
}



function saveTasks2() {
  const tasks2 = [];
  document.querySelectorAll("#div_text2 .text2").forEach(task => {
    tasks2.push(task.value);
  });
  localStorage.setItem("tasks2", JSON.stringify(tasks2));
}



function saveTasks3() {
  const tasks3 = [];
  document.querySelectorAll("#div_text3 .text3").forEach(task => {
    tasks3.push(task.value);
  });
  localStorage.setItem("tasks3", JSON.stringify(tasks3));
}




function loadTasks1() {
  const saved = JSON.parse(localStorage.getItem("tasks1"));
  if (saved) {
    saved.forEach(todo => {
      const task = document.createElement("div");
      task.classList.add("task-item");

      const Icon = document.createElement("i");
      Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
      Icon.style.cursor = "pointer";

      const input = document.createElement("input");
      input.value = todo;
      input.className = "text";
      input.type = "text";

      task.appendChild(Icon);
      task.appendChild(input);

      document.getElementById("div_text").appendChild(task);
    });
  }
}




function loadTasks2() {
  const saved = JSON.parse(localStorage.getItem("tasks2"));
  if (saved) {
    saved.forEach(todo => {
      const task = document.createElement("div");
      task.classList.add("task-item2");

      const Icon = document.createElement("i");
      Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
      Icon.style.cursor = "pointer";

      const input = document.createElement("input");
      input.value = todo;
      input.className = "text2";
      input.type = "text";

      task.appendChild(Icon);
      task.appendChild(input);

      document.getElementById("div_text2").appendChild(task);
    });
  }
}

function loadTasks3() {
  const saved = JSON.parse(localStorage.getItem("tasks3"));
  if (saved) {
    saved.forEach(todo => {
      const task = document.createElement("div");
      task.classList.add("task-item3");

      const Icon = document.createElement("i");
      Icon.classList.add("fas", "fa-solid", "fa-trash", "fas-delete");
      Icon.style.cursor = "pointer";

      const input = document.createElement("input");
      input.value = todo;
      input.className = "text3";
      input.type = "text";

      task.appendChild(Icon);
      task.appendChild(input);

      document.getElementById("div_text3").appendChild(task);
    });
  }
}


loadTasks1(); 
loadTasks2();
loadTasks3(); 
