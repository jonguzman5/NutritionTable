import React, {Component } from 'react';

class Tile extends Component {

 render(){
   const double = this.props.size === 2 ? '200px' : '';
   return (
     <div
      style={{width: double}}
      className='tile'
      onClick={() => {this.props.calcing(this.props.symbol)}}
    >
      <h5>
        {this.props.symbol }
      </h5>
    </div>
  );
 }

}
export default Tile;
