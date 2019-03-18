import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> NoMouse </h2>
        </header>
        <Testr />
      </div>
    );
  }
}
class Testr extends React.Component {
  render() {
    return (
      <p id="testr"> I'm a component </p>
    )
  }
}
export default App;
