/**
 * @jest-environment jsdom
 */

const TODO = require('./todoList.js');
const appendTodoList = require('./__mock__/appendToDOList.js');

describe('Test for add function and remove function', () => {
  const todo = new TODO();
  test('Add one new item to the list', () => {
    todo.addTodo('New Task1');
    const todoList = todo.readTodo();
    appendTodoList(todoList);
    const list = document.querySelectorAll('.row-elements');
    expect(list).toHaveLength(1);
  });

  test('remove element at index 0', () => {
    expect(todo.removeTodo(0)).toHaveLength(0);
  });

  test('test update description', () => {
    // const descInput = document.querySelector('#todo-input');
    todo.addTodo('New Task2');

    appendTodoList(todo.readTodo()[0]);
    const input = document.querySelector('.status');
    const { id } = input;
    todo.updateDescription('New Task3', Number(id));
    appendTodoList(todo.readTodo()[0]);
    const description = document.querySelector('.description');
    expect(description.textContent).toBe('New Task3');
  });

  test('Completed Status Update', () => {
    let input = document.querySelector('.status');
    const { id } = input;
    todo.changeStatus(id, true);
    appendTodoList(todo.readTodo()[0]);
    input = document.querySelector('.status');
    expect(input.checked).toBeTruthy();
  });

  test('clear all completed', () => {
    todo.addTodo('New Task4');
    todo.clearCompleted();
    appendTodoList(todo.readTodo()[0]);
    const input = document.querySelector('.status');
    expect(input.checked).toBeFalsy();
  });
});
