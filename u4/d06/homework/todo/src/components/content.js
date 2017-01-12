import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setActiveTask } from '../actions/index'
import { bindActionCreators } from 'redux'

class Content extends Component{
  render(){
    return(
      <div>
        <p style={this.props.style}>Task:{this.props.tasks[this.props.index]}</p>
        <label>Done?<input onClick={(e)=>this.props.crossout(e)} type="checkbox"/></label>
      </div>
      )
  }
}

function MapStateToProps (list){
  return{
    list: list.tasks
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({setActiveTask: setActiveTask}, dispatch)
}

export default connect(MapStateToProps, mapDispatchToProps)(Content);
