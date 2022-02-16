import todoList from "./modules/todo-list.js";
import "./style.css";
import appendTodoList from "./modules/appendToDoList.js";
import TODO from "./modules/todoList.js";
import { descInput, clearCompleted, statusInput } from "./modules/elements.js";

todoList.forEach((task) => {
  appendTodoList(task);
});

const newTodo = new TODO();

descInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && descInput.value !== "") {
    newTodo.addTodo();
  }
});

clearCompleted.addEventListener("click", () => {
  newTodo.clearCompleted();
});

statusInput.forEach((input) => {
  input.addEventListener("change", (event) => {
    const parentNode = event.taget.parentNode;
    const 
  });
});
