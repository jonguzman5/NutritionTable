import React from 'react';

function Choice(props){
  const {to, label} = props.details;

  return (
    <a className="button" onClick={() => { props.changeAdventure(to) }}>
      {label}
    </a>
  )
}

export default Choice;
