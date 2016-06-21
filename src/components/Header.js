import React from 'react'

const Header = ({ muscle }) => {
  if(muscle !== '/')
    return <h1>{muscle}</h1>
  else
    return <h1>Select a muscle group</h1>
}

export default Header