const todoList = document.querySelector('.todo-lists-holder');

const createTodoListRow = (todoItem) => {
  const rowHTML = `
  <div class="todo-left">
    <input type="checkbox" class="status" ${
  todoItem.completed ? 'checked' : ''
} />
    <p class="description ${todoItem.completed ? 'strike-through' : ''}">${
  todoItem.description
}</p>
  </div>
  <button class="btn three-dots">
  <i class="bi bi-three-dots-vertical"></i>
  <i class="bi bi-trash"></i>
  </button>`;
  return rowHTML;
};

const appendTodoList = (todoItem) => {
  const todoListRow = document.createElement('div');
  todoListRow.classList.add('todo-list-row');
  const rowHTML = createTodoListRow(todoItem);
  todoListRow.innerHTML = rowHTML;
  todoList.appendChild(todoListRow);
};

export default appendTodoList;