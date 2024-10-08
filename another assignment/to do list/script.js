document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');
        li.textContent = taskValue;

        // Create a "Complete" button
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create a "Delete" button
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = ''; // Clear input
    } else {
        alert('Please enter a task.');
    }
}
