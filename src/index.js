import todoList from './modules/todo-list.js';
import './style.css';
import {appendTodoList} from './modules/appendToDoList.js'

todoList.forEach((task, index) => {
  appendTodoList(task);
});
