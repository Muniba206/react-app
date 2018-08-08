import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

/** Renders text on waiting **/
const WaitingScreen = (props) => {
  return (
    <div className='waiting-screen'>
      {props.text}
    </div>
  )
}

WaitingScreen.propTypes = {
  text: PropTypes.string
}

export default WaitingScreen;