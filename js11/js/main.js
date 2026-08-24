import { getFromLS } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";
const todos = getFromLS() || [];

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(todos);
  initTodoHandlers(todos);
});
