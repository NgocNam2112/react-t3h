import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAsync } from "../../store/todoApp/todoAppActions";
import { deleteTodo } from "../../store/todoApp/todoAppSlice";

const ListTodoHook = (props) => {
  const BASE_URL = "https://63a44da3821953d4f2b051c3.mockapi.io/list";
  const dispatch = useDispatch();
  const listTodo = useSelector((state) => state.todoApp);

  const handleDeleteTodo = (id) => {
    dispatch(
      deleteTodoAsync({
        url: BASE_URL,
        id,
      })
    );
  };
  return (
    <section className="main" data-reactid=".0.1">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        data-reactid=".0.1.0"
      />
      <label htmlFor="toggle-all" data-reactid=".0.1.1" />
      <ul className="todo-list" data-reactid=".0.1.2">
        {listTodo &&
          listTodo.length &&
          listTodo.map((item, index) => {
            return (
              <li
                className=""
                data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654"
                key={index}
              >
                <div
                  className="view"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0"
                >
                  <input
                    className="toggle"
                    type="checkbox"
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.0"
                  />
                  <label data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.1">
                    {item.content}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => handleDeleteTodo(item.id)}
                    data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.0.2"
                  />
                </div>
                <input
                  className="edit"
                  defaultValue="ăn sáng"
                  data-reactid=".0.1.2.$bb632cfd-6960-41f0-a68e-5387c4a20654.1"
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default ListTodoHook;
