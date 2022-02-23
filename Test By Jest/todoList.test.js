/**
 * @jest-environment jsdom
 */

const TODO = require('./todoList.js');
const appendTodoList = require('./__mock__/appendToDOList.js');

describe('Test for add function and remove function', () => {
  const todoItem = { index: 0, description: 'New Task', completed: false };
  const todo = new TODO(todoItem);
  test('Add one new item to the list', () => {
    appendTodoList(todoItem);
    todo.addTodo();
    const list = document.querySelectorAll('.row-elements');
    expect(list).toHaveLength(1);
  });

  test('remove element at index 0', () => {
    expect(todo.removeTodo(0)).toHaveLength(0);
  });
});
