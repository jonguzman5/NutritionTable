import React, { Component } from 'react';

class Status extends Component{
  render(){
    return(
      <div>
        <h4>Occupation: {this.props.whiteRangerStatus}</h4>
        <h4>Occupation: {this.props.redRangerStatus}</h4>
        <h4>Occupation: {this.props.blueRangerStatus}</h4>
      </div>
      );
  }
}
export default Status;
