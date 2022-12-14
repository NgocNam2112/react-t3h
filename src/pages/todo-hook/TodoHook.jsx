import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ListTodoHook from "../../components/ListTodoHook/ListTodoHook";
import TodoHookFilter from "../../components/TodoHookFilter/TodoHookFilter";
import { fetchListTodo } from "../../store/todoApp/todoAppActions";
import { addTodo } from "../../store/todoApp/todoAppSlice";
import "../todo-app/TodoApp.css";

const TodoHook = () => {
  const BASE_URL = "https://63a44da3821953d4f2b051c3.mockapi.io/list";
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  const fetchTodoList = async () => {
    // const { data } = await axios.get(
    //   "https://63a44da3821953d4f2b051c3.mockapi.io/list"
    // );

    dispatch(fetchListTodo(BASE_URL));
  };

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleCreateTodo = (e) => {
    const todo = {
      content: todoInput,
      isActive: true,
      isComplete: false,
    };
    if (e.key === "Enter") {
      dispatch(addTodo(todo));
    }
  };

  // const createTodo = async (e) => {
  //   if (e.key === "Enter") {
  //     const data = await axios.post(
  //       "https://63a44da3821953d4f2b051c3.mockapi.io/list",
  //       {
  //         content: todoInput,
  //         isActive: true,
  //         isComplete: false,
  //       }
  //     );

  //     if (data.status === 201) {
  //       fetchTodoList();
  //     }

  //     // setListTodo([...listTodo, { ...data }]);
  //   }
  // };

  useEffect(() => {
    fetchTodoList();
  }, []);

  // const handleCreateTodo = (e) => {
  //   const todo = {
  //     content: todoInput,
  //     isActive: true,
  //     isComplete: false,
  //   };
  //   if (e.key === "Enter") {
  //     dispatch(createTodo(todo));
  //   }
  // };

  return (
    <section className="todoapp">
      <div data-reactid=".0">
        <header className="header" data-reactid=".0.0">
          <h1 data-reactid=".0.0.0">todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            data-reactid=".0.0.1"
            value={todoInput}
            onChange={handleChangeInput}
            onKeyDown={(e) => handleCreateTodo(e)}
          />
        </header>
        <ListTodoHook />
        <TodoHookFilter />
      </div>
    </section>
  );
};

export default TodoHook;
