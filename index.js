function addTask() {
    // ya function tb call hota hai jb user addtask per click krta hai

    let input = document.getElementById("taskInput");
    // taskinput sy user ka likha hua task liya jae rha hai

    let taskText = input.value.trim();
    // trim() extra spaces agay ya peechy sy hata deta hai

    if (taskText === "") {
        alert("Pehly task toh likho");
        return;
    }
    // Agar user ne kuch bhi nahi likha toh alert show hoga aur function yahin ruk jayega

    let li = document.createElement("li");
    // Yeh ek new <li> (list item) bana raha hai jo task list me add hoga.

    let span = document.createElement("span");
    span.innerText = taskText;

    // Check/Uncheck
    span.onclick = function () {
        span.classList.toggle("checked");
    };
    // span me task ka text store ho raha hai
    // Yeh text user ko screen par dikhega
    /////////////////////////////// OR ///////////////////////////////////
    // Jab user task par click karega:
    // checked class add/remove hogi
    // Is se task par line-through ya style change ho sakta hai (CSS par depend karta hai)

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.style.marginRight = "10px";
    // Edit button banaya gaya hai aur thodi spacing di gayi hai

    editBtn.onclick = function () {
        let newTask = prompt("Edit task:", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask;
        }
    };
    // prompt open hota hai jahan user task edit kar sakta hai
   // Agar user valid text likhta hai, toh task update ho jata hai

    // Delete Button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };
    // Delete button par click karne se poora task (li) remove ho jata hai

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    // Task text + Edit + Delete sab ko ek <li> me add kiya gaya

    document.getElementById("taskList").appendChild(li);
    // Yeh new task ko list me display karta hai

    input.value = "";
    // Task add hone ke baad input box empty ho jata hai
}