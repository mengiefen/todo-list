import './style.css';
import TODO from './modules/todoList.js';
import { descInput, clearCompleted, statusInput } from './modules/elements.js';

const newTodo = new TODO();

newTodo.renderPage();

descInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && descInput.value !== '') {
    newTodo.addTodo();
  }
});

clearCompleted.addEventListener('click', () => {
  newTodo.clearCompleted();
});

for (let i = 0; i < statusInput.length; i += 1) {
  statusInput[i].addEventListener('change', (ev) => {
    newTodo.changeStatus(ev.target.id, ev.target.checked);
    newTodo.renderPage();
  });
}
