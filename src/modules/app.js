import TODO from './todoList.js';
import {
  form,
} from './elements.js';

import { appendTodoList, removeChildNodes } from './appendToDoList.js';

const newTodo = new TODO();

function renderPage() {
  const todoListItems = newTodo.readTodo();
  removeChildNodes();
  todoListItems.forEach((todoItem) => {
    appendTodoList(todoItem);
  });
}

renderPage();

const eventHandler = (eventType, selector, callback) => {
  document.addEventListener(eventType, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};

eventHandler('keypress', '#todo-input', (e) => {
  if (e.key === 'Enter' && e.target.value !== '') {
    newTodo.addTodo();
    renderPage();
    e.preventDefault();
    form.reset();
  }
});

eventHandler('click', '.btn-clear', () => {
  newTodo.clearCompleted();
  renderPage();
});

eventHandler('change', '.status', (ev) => {
  const id = ev.target.id.split('-')[1];
  newTodo.changeStatus(id, ev.target.checked);
  const { parentNode } = ev.target;
  parentNode.querySelector('.description').classList.toggle('strike-through');
});

eventHandler('click', '.bi-three-dots-vertical', (event) => {
  const { parentNode } = event.target.parentNode;
  const deleteButton = parentNode.getElementsByClassName('btn-delete')[0];
  const editButton = parentNode.querySelector('.btn-edit');
  const desc = parentNode.querySelector('.description');
  desc.contentEditable = true;
  desc.focus();
  desc.style.border = '2px solid #bfcaca';
  desc.style.borderRadius = '5px';
  editButton.style.display = 'none';
  deleteButton.style.display = 'block';
});

eventHandler('click', '.bi-trash', (e) => {
  const { parentNode } = e.target.parentNode;
  const { id } = parentNode;
  newTodo.removeTodo(id);
  renderPage();
});

eventHandler('click', '.bi-arrow-repeat', () => {
  renderPage();
});

let dragIndex;

const handleSwap = (fromIndex, toIndex) => {
  newTodo.swapTodos(fromIndex, toIndex);
  renderPage();
};

eventHandler('dragstart', '.row-elements', (e) => {
  dragIndex = Number(e.target.closest('div').getAttribute('id'));
});

eventHandler('dragover', '.row-elements', (e) => {
  e.preventDefault();
});

eventHandler('drop', '.row-elements', (e) => {
  const end = +e.target.parentNode.getAttribute('data-id');
  handleSwap(dragIndex, end);
  e.target.classList.remove('over');
});

eventHandler('dragenter', '.row-elements', (e) => {
  e.target.classList.add('over');
});

eventHandler('dragleave', '.row-elements', (e) => {
  e.target.classList.remove('over');
});

eventHandler('mouseover', '.bi-three-dots-vertical', (e) => {
  e.target.style.color = '#43bee5';
});

eventHandler('mouseout', '.bi-three-dots-vertical', (e) => {
  e.target.style.color = '#555';
});

eventHandler('mouseover', '.bi-trash', (e) => {
  e.target.style.color = '#ee0000';
});

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
        element.style.border = '2px solid #161b40';
        element.blur();
        element.contentEditable = false;
      }, 5000);
    });
  }
});
eventHandler('keypress', '.description', (e) => {
  if (e.key === 'Enter') {
    const { id, parentNode } = e.target.parentNode;
    const btnD = parentNode.querySelector('.btn-delete');
    const btnE = parentNode.querySelector('.btn-edit');
    e.target.style.border = '2px solid #161b40';
    e.target.blur();
    e.target.contentEditable = false;
    let val = e.target.innerText;
    val = val.substring(0, val.length - 1);
    newTodo.updateDescription(val, id);
    btnD.style.display = 'none';
    btnE.style.display = 'block';
  }
});
