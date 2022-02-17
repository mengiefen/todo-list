import './style.css';
import TODO from './modules/todoList.js';
import {
  descInput,
  clearCompleted,
  statusInput,
  editButton,
  deleteButton,
  form,
  refreshButton,
} from './modules/elements.js';

import { appendTodoList, removeChildNodes } from './modules/appendToDoList.js';

const newTodo = new TODO();

function renderPage() {
  const todoListItems = newTodo.readTodo();
  removeChildNodes();
  todoListItems.forEach((todoItem) => {
    appendTodoList(todoItem);
  });
}

renderPage();

descInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && descInput.value !== '') {
    newTodo.addTodo();
    renderPage();
    e.preventDefault();
    form.reset();
  }
});

clearCompleted.addEventListener(
  'click',
  (e) => {
    newTodo.clearCompleted();
    renderPage();
    e.preventDefault();
    e.stopPropagation();
  },
  { once: true },
);

for (let i = 0; i < statusInput.length; i += 1) {
  statusInput[i].addEventListener('change', (ev) => {
    const id = ev.target.id.split('-')[1];
    newTodo.changeStatus(id, ev.target.checked);
    const { parentNode } = ev.target;
    parentNode.querySelector('.description').classList.toggle('strike-through');
  });
}

for (let i = 0; i < editButton.length; i += 1) {
  editButton[i].addEventListener('click', (event) => {
    const { parentNode } = event.target.parentNode;
    const deleteButton = parentNode.getElementsByClassName('btn-delete')[0];
    const desc = parentNode.querySelector('.description');
    desc.contentEditable = true;
    editButton[i].style.display = 'none';
    deleteButton.style.display = 'block';
  });
}

const description = document.querySelectorAll('.description');

description.forEach((element) => {
  if (element.contentEditable) {
    element.classList.add('editable');
    const { id } = element.parentNode;
    let { innerText: val } = element.parentNode.querySelector('.status');

    element.addEventListener('input', () => {
      val = element.innerText;

      setTimeout(() => {
        newTodo.updateDescription(val, id);
        element.contentEditable = false;
      }, 10000);
    });

    element.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        element.contentEditable = false;
        val = val.substring(0, val.length - 1);
        newTodo.updateDescription(val, id);
      }
    });
  }
});

for (let i = 0; i < deleteButton.length; i += 1) {
  if (deleteButton[i]) {
    deleteButton[i].addEventListener('click', (e) => {
      const { parentNode } = e.target.parentNode;
      const { id } = parentNode;
      newTodo.removeTodo(id);
      renderPage();
    });
  }
}

const handleReload = () => {
  window.location.reload();
};

refreshButton.addEventListener('click', handleReload);

let dragIndex;

const handleSwap = (fromIndex, toIndex) => {
  newTodo.swapTodos(fromIndex, toIndex);
  renderPage();
};

