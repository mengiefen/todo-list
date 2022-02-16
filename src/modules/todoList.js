import { descInput } from './elements.js';

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
    const completedTodos = this.todos.filter((todo) => todo.completed === true);
    const { length } = completedTodos;
    completedTodos.forEach((todo) => {
      this.removeTodo(todo.index);
    });
    return length;
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
}

export default TODO;
