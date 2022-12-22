import React, { Component } from "react";
import ListTodoHook from "../../components/ListTodoHook/ListTodoHook";
import TodoHookFilter from "../../components/TodoHookFilter/TodoHookFilter";
import "./TodoApp.css";
import axios from "axios";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [],
    };
  }

  fetchTodoList = async () => {
    const { data } = await axios.get(
      "https://63a44da3821953d4f2b051c3.mockapi.io/list"
    );
    this.setState({ listTodo: data });
  };

  componentDidMount() {
    console.log("running on componentDidMount");
    this.fetchTodoList();
  }

  render() {
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
          <ListTodoHook listTodo={this.state.listTodo} />
          <TodoHookFilter />
        </div>
      </section>
    );
  }
}
