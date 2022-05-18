window.addEventListener('load', () => {
	const form = document.querySelector(".card-heading");
	const button = document.querySelector(".card-heading button")
	const input = document.querySelector(".card-heading input");
	const list_el = document.querySelector("#tasks");

	console.log(form);

	button.addEventListener('click', (e) => {
		e.preventDefault();

		const task = input.value;

		if (!task) {
			alert("Fill the task name first, pls!");
			return;
		}

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;

		task_content_el.appendChild(task_input_el);

		list_el.appendChild(task_el);

		input.value = '';

		console.log(button);
	});
});