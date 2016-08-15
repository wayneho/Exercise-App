import React, { PropTypes } from 'react'
import Radium from 'radium'

const styles = {
  heading: {
    color: '#00d8ff',
    '@media (min-width: 800px)': {
      fontSize: '68px'
    },  
  },

}

const Header = ({ muscle }) => {
  if(muscle !== '/')
    return <h1 style={[styles.heading]}>{muscle}</h1>
  else
    return <h1 style={[styles.heading]}>Select a muscle group</h1>
}

Header.propTypes = {
  muscle: PropTypes.string.isRequired
}

export default Radium(Header)