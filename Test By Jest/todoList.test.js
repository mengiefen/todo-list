const TODO = require('./todoList.js');

const todo = new TODO();

describe('Test for add function and remove function', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = `
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
    </button>`;
    todo.addTodo();
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  });
});