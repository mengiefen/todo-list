const appendTodoList = (todoItem) => {
  document.body.innerHTML = `
  <div class = 'row-elements'>
  <div class="todo-left">
    <input type="checkbox" class="status" id = ${todoItem.index}  ${
  todoItem.completed ? 'checked' : ''
} />
    <p class="description ${todoItem.completed ? 'strike-through' : ''}">${
  todoItem.description
}</p>
  </div>
  <button class="btn btn-edit">
    <i class="bi bi-three-dots-vertical"></i>
  </button>  
  <button class="btn btn-delete">  
    <i class="bi bi-trash"></i>
  </button>
  </div>`;
};

module.exports = appendTodoList;
