import React, { Component } from 'react';

class Image extends Component{
  render(){
    return(
      <div className="rangerImages">
        <div className="whiteRangerImage">
          <img onClick={() => this.props.whiteRangerProps} src={this.props.whiteRangerImage} alt="#" height="200px" width="200px"/>
        </div>
        <div className="redRangerImage">
          <img onClick={() => this.props.redRangerProps} src={this.props.redRangerImage} alt="#" height="200px" width="200px"/>
        </div>
        <div className="blueRangerImage">
          <img onClick={() => this.props.blueRangerProps} src={this.props.blueRangerImage} alt="#" height="200px" width="200px"/>
        </div>
      </div>
      );
  }
}

export default Image;
