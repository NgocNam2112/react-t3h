import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ListTodoHook from "../../components/ListTodoHook/ListTodoHook";
import TodoHookFilter from "../../components/TodoHookFilter/TodoHookFilter";
import "../todo-app/TodoApp.css";
import { createTodo } from "../../store/actions/todoActions";

const TodoHook = () => {
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  // const fetchTodoList = async () => {
  //   const { data } = await axios.get(
  //     "https://63a44da3821953d4f2b051c3.mockapi.io/list"
  //   );
  //   setListTodo(data);
  // };

  const handleChangeInput = (e) => {
    setTodoInput(e.target.value);
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

  // useEffect(() => {
  //   fetchTodoList();
  // }, []);

  const handleCreateTodo = (e) => {
    const todo = {
      content: todoInput,
      isActive: true,
      isComplete: false,
    };
    if (e.key === "Enter") {
      console.log("123");
      dispatch(createTodo(todo));
    }
  };

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
