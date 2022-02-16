const descInput = document.querySelector('#todo-input');
const clearCompleted = document.querySelector('.btn-clear');
const statusInput = document.getElementsByClassName('status');
const todoList = document.querySelector('.todo-lists-holder');
const editButton = document.getElementsByClassName('btn-edit');
const deleteButton = document.getElementsByClassName('btn-delete');
const form = document.getElementsByTagName('form')[0];
const refreshButton = document.querySelector('.btn-refresh');

export {
  descInput, clearCompleted, statusInput, todoList, editButton, deleteButton, form, refreshButton,
};
