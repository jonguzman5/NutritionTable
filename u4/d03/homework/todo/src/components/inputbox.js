import React, {Component} from 'react';

class InputBox extends Component{
  render(){
    return(
      <div>
        <input value={this.props.input} type="text" onChange={(e) => {this.props.updateInput(e.target.value)}}/>
        <button onClick={this.props.addtask} type="submit">Submit</button>
      </div>
      )
  }
}

export default InputBox;
