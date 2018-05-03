import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {
    const { increment } = this.props 
    console.log(this.props)
    return (
      <div>     
        <h1>number:</h1>
        <div>{}</div> 
        <button>Push to increment</button>
      </div>
    );
  }
}

export default App; //DEFAAAAAAAAAAAAAAAULT
