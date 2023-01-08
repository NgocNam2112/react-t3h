export const createTodo = (todoItem) => {
  return {
    type: "CREATE_TODO",
    payload: todoItem,
  };
};
