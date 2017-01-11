import React, { Component }from 'react';
import Tile from './Tile';
import data from '../data';

class NumberPad extends Component{
    constructor(){
    super();
    this.calcing = this.calcing.bind(this);
  }

calcing(sym){
  if(Number(sym) === sym){
    var num = Number.parseInt(sym);
    this.props.numinput;
  }
  else if(sym === '='){
    this.props.calc(this.props.state.number[0], this.props.state.currSym, this.props.state.number[1])
  }
}

 renderTiles() {
   return data.map((tile,i) => {
     console.log(typeof(tile.symbol))
     return (
      <Tile key={i} size={tile.size ? tile.size : ''} symbol={tile.symbol} />
     )
   });
 }

 render(){
  return (
    <div className="number_pad">
      { this.renderTiles() }
    </div>
  )
 }
}

export default NumberPad;
