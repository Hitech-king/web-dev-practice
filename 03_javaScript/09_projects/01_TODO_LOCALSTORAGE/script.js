document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("toto-input")
    const addTaskBUtton = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")

    let tasks = JSON.parse(localStorage.getItem('tasks'))|| [];

    tasks.forEach((task) => renderTask(task));

    addTaskBUtton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;
        

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }
        tasks.push(newTask) //to push the data in array
        saveTask(); //saving the task in local storage
        renderTask(newTask);
        todoInput.value = ""//clear input
        console.log(tasks);

    })

    function saveTask() {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }

    function renderTask(task) {
        const  li = document.createElement('li')
        li.setAttribute('data-id',task.id)
        if(task.completed) li.classList.add('completed')
        li.innerHTML=`
        <span>${task.text}</span>
        <button>Delete</button>
        `;
        todoList.appendChild(li)
        li.addEventListener('click',(e)=>{
            if(e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed
            li.classList.toggle('completed')
            saveTask();
        })

        li.querySelector('button').addEventListener('click',(e)=>{
            e.stopPropagation() // to stop bubbling up. prevent toggle from firing
            tasks = tasks.filter(t =>t.id!== task.id ) //to filter out the task 
            li.remove();
            saveTask();
        })


    }
})