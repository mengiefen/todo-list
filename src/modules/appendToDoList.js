import { todoList } from './elements.js';

const addChild = (parent, children) => {
  children.forEach((child) => {
    parent.appendChild(child);
  });
};

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

  const nameList = [
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
  const nameList2 = [btnEdit, btnDelete, iconThreeDots, iconTrash];
  const classNames2 = ['btn-edit', 'btn-delete', 'bi-three-dots-vertical', 'bi-trash'];

  nameList.forEach((name, index) => {
    name.classList.add(classNames[index]);
  });

  nameList2.forEach((name, index) => {
    name.classList.add(classNames2[index]);
  });

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

  addChild(rowLeft, [todoInputCheckBox, todoPara]);
  addChild(btnDelete, [iconTrash]);
  addChild(btnEdit, [iconThreeDots]);
  addChild(rowElements, [rowLeft, btnEdit, btnDelete]);
  rowElements.setAttribute('id', todoItem.index);
  rowElements.draggable = true;

  addChild(rowHolder, [rowElements]);
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