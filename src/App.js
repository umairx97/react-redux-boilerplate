import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AuthMiddleware from './Store/middlewares/authMiddleware';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>This app is Bootstrapped with Redux and Thunk starter code</h1>
        <h2>
          Edit src/App.js and save to reload. (App Component is connected to
          store)
        </h2>
        <h3>Redux Development tool is also connected.</h3>

        <h3><u>Structure:</u></h3>

        <p>
          <b>All the redux starter code is in /src/Store </b>
          <br />
          <b>CreateStore</b> is in src/Store/index.js <br />
          <b>Action Types </b> are in src/Store/actions/ActionTypes.js <br />
          <b>Dummy Action</b> are in src/Store/actions/authActions <br />
          <b>Root Reducer</b> is in src/Store/reducers/index.js <br />
          <b>Dummy Reducer</b> is in src/Store/reducers/authReducer.js
          <br />
          <b>Dummy Middleware</b> is in src/Store/middlewares/authMiddleware.js
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authenticate: data => dispatch(AuthMiddleware.userLoginMiddleware(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
