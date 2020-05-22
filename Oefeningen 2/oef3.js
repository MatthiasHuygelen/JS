let enterButton = document.getElementById("toDoButton"),
    input = document.getElementById("userInput"),
    ul = document.querySelector("ul"),
    item = document.getElementsByTagName("li");

function CreateTodoItem(text) {
	if(text === "")
	{
		return;
	}

	let li = document.createElement("li"); 
	li.appendChild(document.createTextNode(text)); 
	ul.appendChild(li); 
	input.value = ""; 

	function done() {
		li.classList.toggle("done");
		saveLocal();
    }
	li.addEventListener("click",done);

    let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
    dBtn.addEventListener("click", deleteListItem);
    li.appendChild(dBtn);

	function deleteListItem(){
		ul.removeChild(li);
		saveLocal();
	}

	saveLocal()
}

function saveLocal()
{
	localStorage.setItem("todo", JSON.stringify((Array.from(item).filter(x=> !x.classList.contains('done'))).map(x=> x.childNodes[0].nodeValue)));
}

enterButton.addEventListener("click", function() {CreateTodoItem(input.value)});

JSON.parse(localStorage.getItem("todo")).forEach(x => CreateTodoItem(x));