import React from 'react';

export default (props) => {
  const styles = {
      container: { paddingLeft: '100px'},
      img: {maxHeight: '500px', maxWidth: '500px'}
  }
  return (
    <div style={styles.container} >
      <h1 className="flow-text">Mytko's Mystery Mansion</h1>
      <img
        alt="mytko"
        style={styles.img}
        src="https://s-media-cache-ak0.pinimg.com/736x/5e/4f/d1/5e4fd16a971093d0329dd3181ed9edc7.jpg"
        className="z-depth-2 hoverable"
      />

    </div>
  )
}


