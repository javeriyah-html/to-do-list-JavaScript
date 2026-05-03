function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Pehly task toh likho");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = taskText;

    // Check/Uncheck
    span.onclick = function () {
        span.classList.toggle("checked");
    };

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.marginRight = "10px";
    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask;
        }
    };

    // Delete Button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}