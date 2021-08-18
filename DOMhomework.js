var toDoItems = [];


document.querySelector('#createdBy').innerHTML += ' Agustin Arenas';



function ToDo(description){
  this.description = description;
  this.complete = false;
}



ToDo.prototype.completeToDo = function(){
  this.complete = true;
}



function buildToDo(todo, index){
  var toDoShell = document.createElement("div");
  toDoShell.setAttribute("class", "toDoShell");

  var toDoText = document.createElement("span");
  toDoText.innerHTML = todo.description;
  //toDoText.setAttribute("id", index);
  //toDoText.addEventListener("click", completeToDo);

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", index);
  checkbox.addEventListener("click", completeToDo);

  if(todo.complete){
    toDoText.setAttribute("class", "completeText");
    checkbox.setAttribute("class", "completeCheckbox");
    checkbox.setAttribute("checked", true);
  }

  toDoShell.appendChild(toDoText);
  toDoShell.appendChild(checkbox);

  return toDoShell;
}



function buildToDos(toDos){
  var arrayToDos = [];

  arrayToDos = toDos.map(buildToDo);

  return arrayToDos;
}



function displayToDos(){
  var toDoContainer = document.getElementById("toDoContainer");
  toDoContainer.innerHTML = "";

  var resultado = buildToDos(toDoItems);

  for(let i=0; i< resultado.length; i++){
    toDoContainer.appendChild(resultado[i]);
  }
}



function addToDo(){
  var input = document.getElementById("toDoInput");
  var newToDo = new ToDo(input.value);

  toDoItems.push(newToDo);

  input.value = "";

  displayToDos();
}



var bottom = document.getElementById('addButton');
bottom.addEventListener('click', addToDo);



function completeToDo(event){
  const index = event.target.id;

  toDoItems[index].completeToDo();

  displayToDos();
}



displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
