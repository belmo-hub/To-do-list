window.addEventListener("load", function () {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const task = input.value;
		if (!task) {
			alert("Please add a task");
			return;
		}
		createTask(task);
	});
});

function createTask(task) {
	const list_el = document.querySelector("#tasks");
	const task_el = document.createElement("div");
	const input = document.querySelector("#new-task-input");
	const task_input_el = document.createElement("input");
	const task_actions_el = document.createElement("div");
	const task_edit_el = document.createElement("button");
	const task_delete_el = document.createElement("button");
	const task_content_el = document.createElement("div");

	task_input_el.value = task;
	createTaskContent(task_content_el, task_el);
	createTaskInput(task_content_el, task_input_el);
	createTaskActions(
		task_actions_el,
		task_delete_el,
		task_edit_el,
		task_input_el,
		list_el,
		task_el
	);
	// checkEvent(task_edit_el, task_delete_el, task_input_el, list_el, task_el);
	task_el.appendChild(task_actions_el);
	list_el.appendChild(task_el);
	input.value = "";
}

function createTaskContent(task_content_el, task_el) {
	task_content_el.classList.add("content");
	task_el.classList.add("task");

	task_el.appendChild(task_content_el);
}

function createTaskInput(task_content_el, task_input_el) {
	task_input_el.classList.add("text");
	task_input_el.type = "text";
	task_input_el.setAttribute("readonly", "readonly");
	task_content_el.appendChild(task_input_el);
}

function createTaskActions(
	task_actions_el,
	task_delete_el,
	task_edit_el,
	task_input_el, list_el, task_el
) {
	task_actions_el.classList.add("actions");
	createEditButton(task_edit_el, task_input_el);
	createDeleteButton(task_delete_el, list_el, task_el);
	task_actions_el.appendChild(task_edit_el);
	task_actions_el.appendChild(task_delete_el);
}

function createEditButton(task_edit_el, task_input_el) {
	task_edit_el.classList.add("edit");
	task_edit_el.innerHTML = "Edit";
	task_edit_el.addEventListener("click", function () {
		editFunction(task_edit_el, task_input_el);
	});
}

function createDeleteButton(task_delete_el, list_el, task_el) {
	task_delete_el.classList.add("delete");
	task_delete_el.innerHTML = "Delete";

	task_delete_el.addEventListener("click", function () {
		deleteFunction(task_delete_el, list_el, task_el);
	});
}

// function checkEvent(
// task_edit_el,
// task_delete_el,
// task_input_el,
// 	list_el,
// 	task_el
// ) {
// }

function editFunction(task_edit_el, task_input_el) {
	if (task_edit_el.innerText.toLowerCase() == "edit") {
		task_input_el.removeAttribute("readOnly");
		task_input_el.focus();
		task_edit_el.innerHTML = "Save";
	} else {
		task_input_el.setAttribute("readonly", "readonly");
		task_edit_el.innerText = "Edit";
	}
}

function deleteFunction(task_delete_el, list_el, task_el) {
	if (task_delete_el.innerText.toLowerCase() == "delete") {
		list_el.removeChild(task_el);
	}
}
