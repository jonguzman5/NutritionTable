import React, { Component } from 'react';
import {sep, plabeled} from './helpers.jsx';
import './App.css';

class CTest extends Component {
  constructor(props){
    super(props);
    sep();
    console.log('In CTest constructor. Receiving these props: ');
    console.log(props);
  }

  // componentWillUpdate(nextProps, nextState){
  //   sep();
  //   console.log("In CTest componentWillUpdate.");
  //   plabeled("nextProps", nextProps);
  //   plabeled("nextState", nextState);
  // }
 
  render(){
    return(
	<div>{this.props.content}</div>
    );
  }
}

class App extends Component {

  constructor(props){
    super(props);
    console.log('------------------------------------------------------------');
    console.log('In App constructor. Receiving these props: ');
    console.log(props);
    this.state = {clickNum: 0,
		  running: false,
		  intervalID: null};
  }

  componentDidMount(){
    console.log("I MOUNTTTTTED!!!!!");
  }

  stopTimer(){
      if(this.state.intervalID !== null){
	clearInterval(this.state.intervalID);
	this.setState({running: false});
      }
    };

  startTimer (){
      if(!this.state.running){
	const intervalID = setInterval(
	  () => {this.setState({clickNum: this.state.clickNum + 1});},
	  100);
	this.setState({running: true,
		       intervalID: intervalID});
      }
    }

    clickhandler (e){
      if(this.state.running){
	this.stopTimer();
      }else{
	this.startTimer();
      }
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Edit <code>src/App.js</code> and save to reload.
        </p>
	<p>{'clickNum:'} {this.state.clickNum}</p>
	<button onClick={this.clickhandler.bind(this)}>click me</button>
	<p>{'CTest:'}</p>
	<CTest content={"Here is some content for CTest: " + this.state.clickNum}/>
      </div>
    );
  }
}

export default App;
