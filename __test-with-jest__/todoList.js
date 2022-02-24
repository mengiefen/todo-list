/**
 * @jest-environment jsdom
 */
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
    const task = {
      index: this.index,
      description: this.description,
      completed: this.completed,
    };
    this.todos.push(task);
    return this.todos;
  }

  readTodo() {
    return this.todos;
  }

  removeTodo(id) {
    todoList = this.todos.filter((todo) => todo.index !== Number(id));
    this.todos = [...todoList];
    // document.body.remove();
    return this.todos;
  }

  changeStatus(id, status) {
    this.todos[Number(id)].completed = status;
    return this.todos[Number(id)].completed;
  }

  updateDescription(val, id) {
    this.todos[id].description = val;
    return this.todos;
  }
}

module.exports = TODO;
