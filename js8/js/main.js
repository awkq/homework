"use strict";

const todoKeys = { id: "id", text: "text", isCompleted: "isCompleted" };

const todos = [];

const errTodoNotFound = (id) => {
  console.error(`Todo with id ${id} not found`);
};

const getNewTodoId = (todos) =>
  todos.reduce((MaxId, todo) => Math.max(MaxId, todo[todoKeys.id]), 0) + 1;

const createToDo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.isCompleted]: false,
  };
  todos.push(newTodo);
  return todos;
};

const completeTodoById = (todos, id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    errTodoNotFound(id);
    return null;
  }
  todo[todoKeys.isCompleted] = !todos[todoKeys.isCompleted];
};

const deleteTodoById = (todos, id) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === id);
  if (todoIndex === -1) {
    errTodoNotFound(id);
    return todos;
  }
  todos.splice(todoIndex, 1);
  //   todos.splice(id - 1, 1);
  return todos;
};
createToDo(todos, "Новвая здач");
console.log(todos);
