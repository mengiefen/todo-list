let todoList = require('./__mock__/storage.js');

class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo(desc) {
    this.description = desc;
    this.index = this.todos.length;
    todoList.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
    this.storeTodo();
    return todoList;
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

  removeTodo(id) {
    todoList = todoList.filter((todo) => todo.index !== Number(id));
    this.arrangeIndex();
    this.storeTodo();
    return this.todos;
  }

  storeTodo() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateDescription(val, id) {
    todoList[Number(id)].description = val;
    this.storeTodo();
  }

  arrangeIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index;
    });
  }
}

module.exports = TODO;
