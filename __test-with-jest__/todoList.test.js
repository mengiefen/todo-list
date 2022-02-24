/**
 * @jest-environment jsdom
 */

const todoList = require('./__mock__/storage.js');
const TODO = require('./todoList.js');
const appendTodoList = require('./__mock__/appendToDOList.js');

describe('Test for add function and remove function', () => {
  const todo = new TODO();
  test('Add one new item to the list', () => {
    todo.addTodo('New Task1');
    appendTodoList(todoList);
    const list = document.querySelectorAll('.row-elements');
    expect(list).toHaveLength(1);
  });

  test('remove element at index 0', () => {
    expect(todo.removeTodo(0)).toHaveLength(0);
  });

  test('test update description', () => {
    // const descInput = document.querySelector('#todo-input');
    todo.addTodo('New Task2')
    const description = document.querySelectorAll('.description');
    const descriptionText = description.textContent;
    console.log(descriptionText);
  });
});
