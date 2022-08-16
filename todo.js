const task_el = document.createElement("div");
const task_content_el = document.createElement("div");
const task_input_el = document.createElement("input");
const task_actions_el = document.createElement("div");
const task_edit_el = document.createElement("button");
const task_delete_el = document.createElement("button");

window.addEventListener("load", function () {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const task = input.value;
		task_input_el.value = task;

		if (!task) {
			alert("Please add a task");
			return;
		}
		createTask();

		list_el.appendChild(task_el);
		input.value = "";
	});
});

function createTask() {
	task_el.classList.add("task");
	createTaskContent();
	createTaskInput();
	createTaskActions();
	checkEvent();
	// createTask();
}

function createTaskContent() {
	task_content_el.classList.add("content");
	task_actions_el.appendChild(task_edit_el);
	task_actions_el.appendChild(task_delete_el);
	task_el.appendChild(task_content_el);
}

function createTaskInput() {
	task_input_el.classList.add("text");
	task_input_el.type = "text";
	task_input_el.setAttribute("readonly", "readonly");

	task_content_el.appendChild(task_input_el);
}

function createTaskActions() {
	task_actions_el.classList.add("actions");
	createEditButton();
	createDeleteButton();
	task_el.appendChild(task_actions_el);
}

function createEditButton() {
	task_edit_el.classList.add("edit");
	task_edit_el.innerHTML = "Edit";
}

function createDeleteButton() {
	task_delete_el.classList.add("delete");
	task_delete_el.innerHTML = "Delete";
}

function editFunction() {
	if (task_edit_el.innerText.toLowerCase() == "edit") {
		task_input_el.removeAttribute("readOnly");
		task_input_el.focus();
		task_edit_el.innerHTML = "Save";
	} else {
		task_input_el.setAttribute("readonly", "readonly");
		task_edit_el.innerText = "Edit";
	}
}

function deleteFunction() {
	if (task_delete_el.innerText.toLowerCase() == "delete") {
		task_el.remove();
	}
}

function checkEvent() {
	task_edit_el.addEventListener("click", function () {
		editFunction();
	});

	task_delete_el.addEventListener("click", function () {
		deleteFunction();
	});
}
