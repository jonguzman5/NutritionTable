import React from 'react';

export default (props) => {
  const imgStyles = { maxWidth: '500px', maxHeight: '500px', paddingTop: '30px'}
  return (
    <div style={{paddingLeft: '100px'}}>
      <h5 style={{ paddingTop: '20px'}} > Master Mytko is an instructor at General Assembly. He is also a ninja, clearly. </h5>
      <img alt="mytko" style={imgStyles} src="https://v.cdn.vine.co/v/avatars/3394d6c7-b13e-41f3-be4c-49362c8966c9.jpg?versionId=ncdrsa8DNpVbPac0dMkSDiHzoXW1I8xX" />
    </div>

  )
}
