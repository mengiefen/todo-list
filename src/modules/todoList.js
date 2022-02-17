import { descInput } from './elements.js';

class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo() {
    this.description = descInput.value;
    this.index = this.todos.length;
    this.todos.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    this.storeTodo();
  }

  readTodo() {
    const TODOS = JSON.parse(localStorage.getItem('todos'));
    if (TODOS) {
      this.todos = TODOS;
    } else {
      this.todos = [];
    }
    return this.todos;
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.arrangeIndex();
    this.storeTodo();
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.index !== Number(id));
    this.arrangeIndex();
    this.storeTodo();
    return this.todos;
  }

  storeTodo() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  arrangeIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index;
    });
  }

  changeStatus(id, status) {
    this.todos[Number(id)].completed = status;
    this.storeTodo();
  }

  updateDescription(val, id) {
    this.todos[Number(id)].description = val;
    this.storeTodo();
  }

  swapTodos(fromIndex, toIndex) {
    const firstTodo = this.todos[fromIndex];
    const secondTodo = this.todos[toIndex];
    firstTodo.index = toIndex;
    secondTodo.index = fromIndex;
    this.todos[toIndex] = firstTodo;
    this.todos[fromIndex] = secondTodo;
    this.storeTodo();
  }
}

export default TODO;
