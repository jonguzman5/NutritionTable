import React, { Component }from 'react';
import { Link } from 'react-router';
import butlers from './butlers.js'

class ButlersShow extends Component {
  render(){
    const imageStyles = {maxWidth: '500px', maxHeight: '400px'}
    const divStyles= {paddingLeft: '50px', paddingTop: '50px'}
    const currentButler = this.props.params.butlerName;
    const { name, img } = butlers[currentButler];
    let nextButler = butlers[currentButler].nextButler ? `/butlers/${butlers[currentButler].nextButler}` : "/"
    return (
      <div style={divStyles} className="room_show">
        <img style={ imageStyles } alt="room" src={img} />
        <h3>{ name }</h3>
        <Link to={`${nextButler}`}> Next Butler </Link>
      </div>
    );
  }
}

export default ButlersShow;
