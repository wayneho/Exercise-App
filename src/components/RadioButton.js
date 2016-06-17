import React, { PropTypes } from 'react'

const RadioButton = ({ active, children, onClick }) => (
  <span>
    <input type="radio" id={children} checked={active} onChange={()=>{onClick()}}/>
    <label htmlFor={children}>{children}</label>
  </span>
)

RadioButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default RadioButton