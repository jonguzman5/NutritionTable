import React, {Component} from 'react';

class Content extends Component{
  render(){
    return(
      <div>
        <p style={this.props.style}>Task:{this.props.tasks[this.props.index]}</p>
        <label>Done?<input onClick={(e)=>this.props.crossout(e)} type="checkbox"/></label>
      </div>
      )
  }
}

export default Content;
