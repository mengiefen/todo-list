import './style.css';
import TODO from './modules/todoList.js';
import {
  descInput,
  clearCompleted,
  statusInput,
  editButton,
  deleteButton,
  form,
} from './modules/elements.js';

const newTodo = new TODO();

newTodo.renderPage();

descInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && descInput.value !== '') {
    newTodo.addTodo();
    e.preventDefault();
    form.reset();
  }
});

clearCompleted.addEventListener('click', () => {
  newTodo.clearCompleted();
});

clearCompleted.addEventListener('click', () => {
  newTodo.clearCompleted();
});
for (let i = 0; i < statusInput.length; i += 1) {
  statusInput[i].addEventListener('change', (ev) => {
    newTodo.changeStatus(ev.target.id, ev.target.checked);
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
    const { id } = element.parentNode.querySelector('.status');
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
      const { id } = parentNode.querySelector('.status');
      parentNode.style.display = 'none';
      newTodo.removeTodo(id);
    });
  }
}
