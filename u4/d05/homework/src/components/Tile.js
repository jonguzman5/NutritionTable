import React, {Component } from 'react';

class Tile extends Component {

Tile = (props) =>{
  const double = props.size === 2 ? '200px' : '';
  return (
    <div
      style={{width: double}}
      className='tile'
      onClick={() => {props.calcing(props.symbol)}}
    >
      <h5>
        { props.symbol }
      </h5>
    </div>
  );
}
}
export default Tile;
