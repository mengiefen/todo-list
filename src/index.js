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
    window.location.reload();
    e.preventDefault();
    form.reset();
  }
});

const clearCompletedTasks = () => {
  newTodo.clearCompleted();
  renderPage();
  window.location.reload();
};

clearCompleted.addEventListener('click', clearCompletedTasks);

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

description.forEach((element, index) => {
  if (element.contentEditable) {
    element.classList.add('editable');
    const { id } = element.parentNode;
    let { innerText: val } = element.parentNode.querySelector('.status');

    element.addEventListener('input', () => {
      val = element.innerText;

      setTimeout(() => {
        const btnD = document.querySelectorAll('.btn-delete');
        const btnE = document.querySelectorAll('.btn-edit');
        newTodo.updateDescription(val, id);
        btnD[index].style.display = 'none';
        btnE[index].style.display = 'block';
        element.contentEditable = false;
      }, 5000);
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

function dragStart() {
  dragIndex = Number(this.closest('div').getAttribute('id'));
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const end = +this.getAttribute('data-id');
  handleSwap(dragIndex, end);
  this.classList.remove('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragEnter() {
  this.classList.add('over');
}

const todoItems = document.querySelectorAll('.row-elements');
const rowHolder = document.querySelectorAll('.todo-list-row');

todoItems.forEach((row) => {
  row.addEventListener('dragstart', dragStart);
});

rowHolder.forEach((holder) => {
  holder.addEventListener('dragover', dragOver);
  holder.addEventListener('drop', dragDrop);
  holder.addEventListener('dragenter', dragEnter);
  holder.addEventListener('dragleave', dragLeave);
});
