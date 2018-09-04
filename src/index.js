import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import "./scss/styles.css";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
