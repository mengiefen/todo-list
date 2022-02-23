class TODO {
  constructor() {
    this.index = 0;
    this.completed = false;
    this.description = '';
    this.todos = [];
  }

  addTodo() {
    const descInput = document.querySelector('#todo-input');
    this.description = descInput.value;
    this.index = this.todos.length;
    this.todos.push({
      index: this.index,
      description: this.description,
      completed: this.completed,
    });
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

export default TODO;
