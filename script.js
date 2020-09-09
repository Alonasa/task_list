var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var elements = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var buttonDelete = document.createElement('button');
		buttonDelete.classList.add('btn');
		buttonDelete.classList.add('btn--delete');
		buttonDelete.textContent = 'Delete';
		li.appendChild(buttonDelete);

		buttonDelete.onclick = removeParent;
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", function(e) {
	e.target.classList.toggle("done");
});

function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addButtons() {
	for(var i = 0; i < elements.length; i++){
		var buttonDelete = document.createElement('button');
		buttonDelete.classList.add('btn');
		buttonDelete.classList.add('btn--delete');
		buttonDelete.textContent = 'Delete';
		elements[i].appendChild(buttonDelete);
		buttonDelete.onclick = removeParent;

	}
};

addButtons();



