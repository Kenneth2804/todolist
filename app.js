document.getElementById('add-task-btn').addEventListener('click', function () {

	var taskInput = document.getElementById('task-input');
	if (taskInput.value.trim() !== '') {
		var tasks = document.getElementById('tasks');
		var newTask = document.createElement('li');
		newTask.textContent = taskInput.value;
		newTask.addEventListener('click', function () {
			this.parentNode.removeChild(this);
		});
		tasks.appendChild(newTask);
		taskInput.value = ''
	}else{
		alert('Por favor, ingresa una tarea')
	}
})