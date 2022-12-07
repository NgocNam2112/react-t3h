import React from "react";
import "./App.css";
import CrudAxiosExample from "./pages/crud-axios-example";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  render() {
    return (
      <>
        <CrudAxiosExample />
      </>
    );
  }
}

export default App;
