import React, { PropTypes } from 'react'

const Header = ({ muscle }) => {
  if(muscle !== '/')
    return <h1>{muscle}</h1>
  else
    return <h1>Select a muscle group</h1>
}

Header.propTypes = {
  muscle: PropTypes.string.isRequired
}

export default Header