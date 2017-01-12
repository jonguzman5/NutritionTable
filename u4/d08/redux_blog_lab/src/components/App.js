import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
          <h1 style={{fontFamily: "Pacifico"}}>Redux Blawwg</h1>
        </Link>

      </div>
    );
  }
}

export default App;
