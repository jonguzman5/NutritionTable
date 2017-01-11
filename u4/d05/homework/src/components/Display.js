import React from 'react';

const Display = (props) => {
  var displaynum = '';
  displaynum +- props.currInt;

  return (
    <div className="display">
      <h5 key="h1" className="display_text">
        {displaynum}
      </h5>
    </div>
  );
}

export default Display;

