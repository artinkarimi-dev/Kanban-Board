

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
  task.classList.add("task-item");

  
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
    e.target.parentElement.remove(); 
  }
});