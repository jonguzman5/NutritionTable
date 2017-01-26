import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoList: [{text: "First Todo", done: false}],
      inputValue: ''
    }
  }
  updateInput(text) {
    this.setState({inputValue: text});
  }
  createToDo(text) {
    let toDos = this.state.toDoList;
    toDos.push({text: text, done: false});
    this.setState({ toDoList: toDos });
    this.updateInput("");
  }
  completeTodo(itemKey) {
    let toDoList = this.state.toDoList;
    let completedItem = toDoList[itemKey];
    completedItem.done === false? completedItem.done = true : completedItem.done = false;
    this.setState({
      toDoList
    })
  }
  renderTodoList() {
    return this.state.toDoList.map((todo, i) => {
      return(
        <li className={todo.done ? "done" : "" } key={i}>
          <p>task: {todo.text} </p>
          <span> { todo.done ? " " : "Done?" } </span>
          <input type="checkbox" value={todo.done} onChange={() => {this.completeTodo(i)} } />
        </li>
      );
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Todo List</h1>
        <div>
          <h3>Create New Todo</h3>
        </div>
        <input type="text" value={this.state.inputValue} onChange={(event) => { this.updateInput(event.target.value) }} />
        <button onClick={() => {this.createToDo(this.state.inputValue)} }>
          Submit
        </button>
        <ul>
          { this.renderTodoList() }
        </ul>
      </div>
    );
  }
}
export default App;
