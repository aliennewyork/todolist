const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You Must Write Something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Крестик
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();