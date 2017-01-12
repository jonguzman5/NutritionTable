import React, { Component }from 'react';
import Tile from './Tile';
import data from '../data';


class NumberPad extends Component{
  constructor(){
    super();

    this.calcing = this.calcing.bind(this);
  }

  calcing(sym){
    //check if input is between 0 and 9
    // check if input is a value
    //check if input = '=''

    if(parseInt(sym, 10)>=0 && parseInt(sym, 10)<=9){
      var num = parseInt(sym,10);
      this.props.numinput(num);
    }else if(sym === '+'||sym === '-'|| sym === '*'|| sym === '/'){
      this.props.operator(sym)
    }else if(sym === '='){
      this.props.calc(this.props.state.number[0], this.props.state.currSym, this.props.state.number[1])
    }
  }

 renderTiles() {
   return data.map((tile,i) => {
     return (
      <Tile calcing={this.calcing} key={i} size={tile.size ? tile.size : ''} symbol={tile.symbol} />
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
