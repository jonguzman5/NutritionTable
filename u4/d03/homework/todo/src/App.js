import React, { Component } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import Content from './components/content';

class App extends Component {
  constructor(){
    super()
    this.addtask = this.addtask.bind(this);
    this.updateInput = this.updateInput.bind(this);
    console.log(this.crossout);
    this.crossout = this.crossout.bind(this);

      this.state = {
        tasks: [],
        input: '',
          style: {
            color: 'black',
            textDecoration: 'none',
          }
      }
  }

updateInput(string){
  this.setState({
    input: string
  })
}

addtask(){
  const newtask = this.state.tasks.filter((item)=>{return true});
  newtask.push(this.state.input)
  this.setState({tasks: newtask, input:''})
}

crossout(){
  const style = {color: 'red', textDecoration: 'line-through'}
  this.setState({
    style
  });
}

  render() {
    return (
      <div className="App">
        <h1>Todo list</h1>
        <h3>Create New Todo</h3>
        <InputBox input={this.state.input} updateInput={this.updateInput} addtask={this.addtask} />
        {
          this.state.tasks.map((item, key) =>
                  <Content key={key}
                  crossout={this.crossout}
                  tasks={this.state.tasks}
                  index={key}
                  style={this.state.style}
                  />
                )
        }
      </div>
    );
  }
}

export default App;
