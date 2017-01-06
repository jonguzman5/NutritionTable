import React, { Component } from 'react';
import '../css/App.css';

import adventures from '../adventures';

import Choice from './Choice';
import Lose from './Lose';

class App extends Component {
  constructor(){
    super();

    this.state = {
      current_adventure: 0,
      adventures
    };

    this.changeAdventure = this.changeAdventure.bind(this);
  }

  changeAdventure(to){
    this.setState({
      current_adventure: to
    });
  }

  resetGame(){
    this.setState({
      current_advnture: 0
    });
  }

  showOptions(options){
    if(options){
      return options.map(o => {
        return <Choice key={o.label} details={o} changeAdventure={this.changeAdventure} />
      });
    }
    else {
      return <Lose />
    }
  }

  render() {
    const data = this.state.adventures[this.state.current_adventure];
    const text = data.text.split("\n").map(el => {
              return(<p key={el}>{el}</p>);
            });

    return(
      <div className="main-container" style={{ backgroundImage: 'url(' + data.image + ')' }}>
        <nav>
          <h1 onClick={this.resetGame}>
            <span className="title">ReactJS</span> Choose Your Own Adventure
          </h1>
        </nav>
        <div className="current-adventure">
          {text}
          <div className="choices">
            {this.showOptions(data.options)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
