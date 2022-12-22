import React, { useState } from "react";
import ListTodoHook from "../../components/ListTodoHook/ListTodoHook";
import TodoHookFilter from "../../components/TodoHookFilter/TodoHookFilter";
import "../todo-app/TodoApp.css";

const TodoHook = () => {
  const [listTodo, setListTodo] = useState([
    {
      id: 1,
      content: "ăn sáng",
      isActive: false,
      isComplete: true,
    },
    {
      id: 2,
      content: "thay quần áo",
      isActive: false,
      isComplete: true,
    },
    {
      id: 3,
      content: "ghé thăm Mr.Wick",
      isActive: false,
      isComplete: true,
    },
  ]);
  return (
    <section className="todoapp">
      <div data-reactid=".0">
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            defaultValue=""
            data-reactid=".0.0.1"
          />
        </header>
        <ListTodoHook listTodo={listTodo} />
        <TodoHookFilter />
      </div>
    </section>
  );
};

export default TodoHook;
