import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
constructor(){
  super();
  this.state = {
    number: [],
    currInt: 0,
    currSym: ''
  }
  this.numinput = this.numinput.bind(this);
  this.operator = this.operator.bind(this);
  this.calc = this.calc.bind(this);
}

numinput(number){
  var operand = this.state.number;
  operand.push(number);
  this.setState({
    number: operand,
    currInt: number,
  })
}
operator(sym){
  this.setState({
    currSym: sym
  })
}
calc(operator, num1, num2){
  var total = 0;
  if(operator === '+'){
    total = num1 + num2;
  }
  else if(operator === '-'){
    total = num1 - num2;
  }
  else if(operator === '*'){
    total = num1 * num2;
  }
  else if(operator === '/'){
    total = num1 / num2;
  }
  this.setState({
    currInt: total
  })
}

  render() {
    return (
      <div className="calculator">
        <Display currInt={this.state.currInt} />
        <NumberPad numinput={this.numinput} operator={this.operator} calc={this.calc}/>
      </div>
    );
  }
}

export default Calculator;
