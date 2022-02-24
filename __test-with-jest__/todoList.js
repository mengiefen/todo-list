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
    this.index = todoList.length;
    const task = {
      index: this.index,
      description: this.description,
      completed: this.completed,
    };
    this.storeTodo(task);
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
    this.todos = [...todoList];
    this.arrangeIndex();
    this.storeTodo();
    return this.todos;
  }

  storeTodo(task) {
    todoList.push(task);
    this.todos = [...todoList];
  }

  updateDescription(val, id) {
    todoList[Number(id)].description = val;
    this.storeTodo();
  }

  arrangeIndex() {
    this.todos.forEach((todo, index) => {
      todo.index = index;
    });
    todoList = [...this.todos];
  }
}

module.exports = TODO;
