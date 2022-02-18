import { todoList } from './elements.js';

const createTodoListRow = (todoItem) => {
  const rowLeft = document.createElement('div');
  const todoInputCheckBox = document.createElement('input');
  const todoPara = document.createElement('p');
  const btnEdit = document.createElement('button');
  const iconThreeDots = document.createElement('i');
  const btnDelete = document.createElement('button');
  const iconTrash = document.createElement('i');
  const rowElements = document.createElement('div');
  const rowHolder = document.createElement('div');

  const names = [
    rowLeft,
    todoInputCheckBox,
    todoPara,
    btnEdit,
    iconThreeDots,
    btnDelete,
    iconTrash,
    rowElements,
    rowHolder,
  ];

  const classNames = [
    'todo-left',
    'status',
    'description',
    'btn',
    'bi',
    'btn',
    'bi',
    'row-elements',
    'todo-list-row',
  ];

  names.forEach((name, index) => {
    name.classList.add(classNames[index]);
  });

  btnEdit.classList.add('btn-edit');
  btnDelete.classList.add('btn-delete');
  iconThreeDots.classList.add('bi-three-dots-vertical');
  iconTrash.classList.add('bi-trash');

  if (todoItem.completed) {
    todoPara.classList.add('strike-through');
  } else {
    todoPara.classList.remove('strike-through');
  }

  todoPara.innerText = todoItem.description;

  todoInputCheckBox.setAttribute('type', 'checkbox');
  todoInputCheckBox.setAttribute('id', `input-${todoItem.index}`);
  if (todoItem.completed) {
    todoInputCheckBox.checked = true;
  } else {
    todoInputCheckBox.checked = false;
  }

  rowLeft.appendChild(todoInputCheckBox);
  rowLeft.appendChild(todoPara);

  btnEdit.appendChild(iconThreeDots);
  btnDelete.appendChild(iconTrash);

  rowElements.appendChild(rowLeft);
  rowElements.appendChild(btnEdit);
  rowElements.appendChild(btnDelete);
  rowElements.setAttribute('id', todoItem.index);
  rowElements.draggable = true;
  rowHolder.appendChild(rowElements);
  rowHolder.setAttribute('data-id', todoItem.index);
  return rowHolder;
};

const appendTodoList = (todoItem) => {
  const todoListRow = createTodoListRow(todoItem);
  todoList.appendChild(todoListRow);
};

const removeChildNodes = () => {
  let child = todoList.firstChild;
  while (child) {
    todoList.removeChild(child);
    child = todoList.firstChild;
  }
};

export { removeChildNodes, appendTodoList };