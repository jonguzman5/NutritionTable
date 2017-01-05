import React, { Component } from 'react';

class About extends Component{
  render(){
    return(
      <div className="aboutContent">
        <h1>{this.props.aboutHeader}</h1>
        <p>{this.props.aboutInitP}</p>
      </div>
      )
  }
}

export default About;
