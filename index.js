
function start() {
    console.log('Hi!')
    alert('52')
}

const addButton = document.getElementById("add-btn");
const tasklistEl = document.getElementById("task-list");
const inputtasklistEl = document.getElementById("input-task");
addButton.addEventListener('click', addTask);


//addButton.onclick = start;



function addTask() {
    const taskTitle = inputtasklistEl.value;

    if (taskTitle) {
        const newTaskEl = document.createElement('li');
        newTaskEl.classList.add("item");
        newTaskEl.classList.add("low-priority");
        newTaskEl.addEventListener('click', (ev) => {
            ev.current.classList.toggle('completed');
        });
        newTaskEl.innerHTML = `
    <span class="task-content"> ${taskTitle} </span>
    <div class="actions">
        <button class="btn" onclick="this.parentNode.parentNode.remove()">
            <span class="material-symbols-outlined">
                delete
            </span> </button> 
    </div>
    `

        tasklistEl.append(newTaskEl)
        inputtasklistEl.value=null
    }
}


