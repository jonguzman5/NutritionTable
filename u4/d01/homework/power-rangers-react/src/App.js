import React, { Component } from 'react';
import './App.css';
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="https://media.giphy.com/media/5onfLEgLIddOU/giphy.gif" className="App-logo" alt="logo" />
          <h2>Go Go Power Rangers!</h2>
        </div>
        <About />
      </div>
    );
  }
}

export default App;
