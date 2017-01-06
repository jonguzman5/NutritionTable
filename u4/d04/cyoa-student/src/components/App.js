import React, { Component } from 'react';
import '../css/App.css';

import adventures from '../adventures';

// import Choice from './Choice';
// import Lose from './Lose';

class App extends Component {
  constructor(){
    super();
    this.state = {
      adventures
    };
  }

  changeAdventure(to){ }

  resetGame(){ }

  showOptions(options){ }

  render() {
    const data = this.state.adventures[0]; // hard-coded adventure

    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
          Lorem Ipsum Dolor Sit.
          <div className="choices">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
