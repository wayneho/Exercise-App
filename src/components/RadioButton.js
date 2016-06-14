import React, { PropTypes } from 'react'

const RadioButton = ({ active, children, onClick }) => (
  <div>
    <label htmlFor={children}>{children}</label>
    <input type="radio" id={children} checked={active} onChange={()=>{onClick()}}/>
  </div>
)

RadioButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default RadioButton