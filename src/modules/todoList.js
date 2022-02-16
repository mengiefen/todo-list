import { descInput, todoList } from './elements.js';
import appendTodoList from './appendToDoList.js';

class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo() {
    this.todos = this.readTodo();
    this.description = descInput.value;
    this.index = this.todos.length;
    this.todos.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    this.storeTodo();
    appendTodoList({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    window.location.reload();
    return this.todos;
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
    this.todos = this.readTodo();
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.arrangeIndex();
    this.storeTodo();
    window.location.reload();
  }

  removeTodo(id) {
    this.todos = this.readTodo();
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
    this.todos = this.readTodo();
    this.todos[Number(id)].completed = status;
    this.storeTodo();
  }

  renderPage() {
    todoList.innerHTML = '';
    this.todos = this.readTodo();
    this.todos.forEach((task) => {
      appendTodoList(task);
    });
  }

  updateDescription(val, id) {
    this.todos = this.readTodo();
    this.todos[Number(id)].description = val;
    this.storeTodo();
  }
}

export default TODO;
