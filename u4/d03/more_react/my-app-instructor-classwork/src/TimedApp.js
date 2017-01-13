import React, { Component } from 'react';
import {sep, plabeled} from './helpers.jsx';
import './App.css';

class CTest extends Component {
  // constructor(){
  //   super({});
  //   sep();
  //   console.log('In CTest constructor. Receiving these props: ');
  //   //console.log(props);
  // }

  // componentWillUpdate(nextProps, nextState){
  //   sep();
  //   console.log("In CTest componentWillUpdate.");
  //   plabeled("nextProps", nextProps);
  //   plabeled("nextState", nextState);
  // }

  render(){
    return(
	<div>{
	  // "I am a squid"
	  this.props.content
	}</div>
    );
  }
}

class App extends Component {

  constructor(){
    super({});  
    console.log('------------------------------------------------------------');
    console.log('In App constructor. Receiving these props: ');
    //console.log(props);
    this.state = {clickNum: 0,
		  counting: false,
		  intervalID: false};
    //this.setMyInterval = this.setMyInterval.bind(this);
  }

  clearMyInterval(){
    if(this.state.intervalID){
      clearInterval(this.state.intervalID);
    }
  }

  setMyInterval(interval){
    this.setState({intervalID: interval});
  }

  incrementClicknum(){
    const interval = setInterval(
      () => {
	if(this.state.counting){
	  this.setState({clickNum: this.state.clickNum + 1})
	}
      },
      1000);
    this.setMyInterval(interval);
    this.setState({counting: !this.state.counting});
  }

  clickHandler(e){
      this.clearMyInterval();
      this.incrementClicknum();
  }

  render() {
    return (
	<div className="App">
        <p className="App-intro">
        Edit <code>src/App.js</code> and save to reload.
        </p>
	<p>{'clickNum:'} {this.state.clickNum}</p>
	<button onClick={() => this.clickHandler()}>click me</button>
	<p>{'CTest:'}</p>
	<CTest content={"Here is some content for CTest: " + this.state.clickNum}/>
	</div>
    );
  }
}

export default App;
