import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This app is Bootstrapped with Redux starter code</h1>
        <h2>Edit src/App.js and save to reload.</h2>
        <h3>
          <u>Structure:</u>
        </h3>

        <p>
          <b>Provider / CreateStore</b> is in src/index.js <br />
          <b>Action Types </b> are in src/actions/types.js <br />
          <b>Actions</b> are in src/actions/index.js <br />
          <b>Root Reducer</b> is in src/reducers/index.js <br />
          <b>Reducers</b> are in src/reducers/dummy.js
        </p>
      </div>
    );
  }
}

export default App;
