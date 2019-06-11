import React, { Component } from 'react';
import './App.css';
import Home from "../Home/Home";
import { Provider } from 'react-redux';
import store from '../../store/Store';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Home/>
      </Provider>
    );
  }
}


export default App;
