export const getFromLS = () => {
  return JSON.parse(localStorage.getItem("todos"));
};

export const setToLS = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
