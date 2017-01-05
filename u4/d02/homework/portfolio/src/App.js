import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';

class App extends Component {
  constructor(){
    super();
      this.experienceRender = this.experienceRender.bind(this);
    this.state = {
      aboutHeader: 'About Jonathan',
      aboutInitP: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      experienceHeader: '',
      experienceInitP: '',
    }
  }
experienceRender(){
  this.setState({
      experienceHeader: 'My Exprience is as follows',
      experienceInitP: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  })
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Jonathan</h2>
        </div>
        <button onClick=""></button>
        <div className = "profileimage">
        <img src ='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAhsAAAAJDRhNmNjZmNlLWJjZGMtNGViOS1hYTU5LTQ3ZDA3MmYxNTJkMg.jpg' alt='#' />
        </div>
        <div className="portofoliopieces">
          <a className="project1" href="#"><img src="project1.png"/></a>
          <a className="project2" href="#"><img src="project2.png"/></a>
          <a className="project3" href="#"><img src="project3.png"/></a>
        </div>
        <About
        aboutHeader={this.state.aboutHeader}
        aboutInitP={this.state.aboutInitP}
        />
        <Experience
        experienceHeader={this.state.experienceHeader}
        experienceInitP={this.state.experienceInitP}
         />
      </div>
    );
  }
}

export default App;
