const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function getFormattedDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(); // Format: MM/DD/YYYY
    const time = now.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
    return `${time} ${date}`;
}


function addTask(){
    if(inputBox.value ===''){
        alert("You must type something");//If the input field is empty it shows an alert
    }
    else {
        let newTask = document.createElement("li");// a variable to create a new element
        newTask.innerHTML = inputBox.value;//anytime a value is written in to the input box it is inserted into the html file
        listContainer.appendChild(newTask);//this is a method to keep adding new entries into the parent file
        let span = document.createElement("span");//used to markup a part of a text 
        span.innerHTML = "\u00d7";//a type of span to show an x mark
        newTask.appendChild(span);//AppendChild keeps adding it with each new entry

        let taskTime = document.createElement('p');//created the time of entry using a p tag

        taskTime.innerHTML = 'task-time';
        taskTime.textContent = getFormattedDateTime();

        newTask.appendChild(taskTime);
        listContainer.appendChild(newTask);

        listContainer.insertBefore(newTask, listContainer.firstChild);
        saveData();//to save the data each time a change is made to this function

}
    inputBox.value = ""// to clear the input Box after the function has been used 
    
}

listContainer.addEventListener("click", function(e){//an event listener waits and checks for the function i.e click to happen
    if(e.target.tagName === "LI"){//if there is a click in the tagName "li" it would toggle it between checked and unchecked
        e.target.classList.toggle("checked");
        saveData();//saves data each time this function is changed
    }
    else if(e.target.tagName === "SPAN"){//listens for when the span is clicked
        e.target.parentElement.remove();//when it is clicked it removes the whole parent element i.e. List
        saveData();//saves data each time this function is changed
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

