let todoItems = [];


//push every item into the array
function addTodo (text) {
   let todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems);
};


//event listener to the form
let form = document.getElementById("myForm");

form.addEventListener ("submit", e=> {
    e.preventDefault();
    let input = document.getElementsByClassName("todoInput");
    let text = input.value;

   if (text !== "") {
       addTodo(text);
    

    
}});




if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }