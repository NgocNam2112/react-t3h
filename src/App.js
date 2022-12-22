import React from "react";
import "./App.css";
import EffectHook from "./components/EffectHook/EffectHook";
import CrudAxiosExample from "./pages/crud-axios-example/crud-axios-example";
import Form from "./pages/form/Form";
import Hook from "./pages/hooks/Hook";
import TodoApp from "./pages/todo-app/TodoApp";
import TodoHook from "./pages/todo-hook/TodoHook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        {/* <CrudAxiosExample /> */}
        {/* <Form /> */}
        {/* <TodoApp /> */}
        {/* <Hook /> */}
        <TodoHook />
        {/* <EffectHook /> */}
      </>
    );
  }
}

export default App;
