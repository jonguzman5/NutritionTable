import React, { Component } from 'react';

class Exprience extends Component{
  render(){
    return(
      <div className="experienceContent">
        <h1>{this.props.experienceHeader}</h1>
        <p>{this.props.experienceInitP}</p>
      </div>
      )
  }
}

export default Exprience;
