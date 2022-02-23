class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo() {
    this.description = 0;
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
}

module.exports = TODO;
