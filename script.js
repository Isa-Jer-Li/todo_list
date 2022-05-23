let addTodoButton = document.getElementById('addTodo');
let todoContainer = document.getElementById('todoContainer');
let inputFeild = document.getElementById('inputFeild');

addTodoButton.addEventListener('click', function(){
	var paragraph = document.createElement('p');
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputFeild.value;
	todoContainer.appendChild(paragraph);
	inputFeild.value = "";
	paragraph.addEventListener('click', function(){
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function(){
		todoContainer.removeChid(paragraph);
	})
})
