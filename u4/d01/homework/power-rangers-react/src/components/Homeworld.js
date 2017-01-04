import React, { Component } from 'react';

class Homeworld extends Component{
  render(){
    return(
      <div>
        <h3>Homeworld: {this.props.whiteRangerHomeworld}</h3>
        <h3>Homeworld: {this.props.redRangerHomeworld}</h3>
        <h3>Homeworld: {this.props.blueRangerHomeworld}</h3>
      </div>
      );
  }
}
export default Homeworld;
