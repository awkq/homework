import { todoKeys } from "./constants.js";
import { setToLS } from "./storage.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";

const form = document.querySelector(`.form`);
const input = document.querySelector(`.input`);
const todosItem = document.querySelector(`.todos`);

const createTodoElement = (todo) => {
  const li = document.createElement("li");
  li.className = "todo";
  li.dataset.id = todo[todoKeys.id];
  // todosItem.append(li);
  li.innerHTML = `<div class="todo-text">${todo[todoKeys.text]}</div>
          <div class="todo-actions">
            <button class="button-complete button">&#10004;</button>
            <button class="button-delete button">&#10006;</button>
          </div>`;
  return li;
};

export const renderTodos = (todos) => {
  todosItem.innerHTML = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);
    if (todo[todoKeys.is_completed]) {
      todoElement.classList.add("completed");
    }
    todosItem.prepend(todoElement);
  });
};

const handleCreateTodo = (todos, text) => {
  const todo = createTodo(todos, text);
  const todoElement = createTodoElement(todo);
  setToLS(todos);
  todosItem.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    handleCreateTodo(todos, text);
    input.value = "";
  });

  todosItem.addEventListener("click", ({ target }) => {
    const todo = target.closest(".todo");
    //  button = target.closest(".button");
    // if (!button) return;
    if (!todo) return;

    const todoId = Number(todo.dataset.id);

    if (target.matches(".button-complete")) {
      completeTodoById(todos, todoId);
      setToLS(todos);
      todo.classList.toggle("completed");
    }
    if (target.matches(".button-delete")) {
      deleteTodoById(todos, todoId);
      setToLS(todos);
      todo.remove();
    }
    console.log(todo);
  });
};
