import React, { Component } from 'react';

class Name extends Component{
  render(){
    return(
      <div className="rangerNames">
        <div className="whiteRangerName">
          <h1>{this.props.whiteRangerName}</h1>
        </div>
        <div className="redRangerName">
          <h1>{this.props.redRangerName}</h1>
        </div>
        <div className="blueRangerName">
          <h1>{this.props.blueRangerName}</h1>
        </div>
      </div>
      );
  }
}
export default Name;
