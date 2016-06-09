import React, { PropTypes } from 'react'

const VisibleMuscle = ({ muscle }) => (
  <div>
    <h1>{muscle?muscle.name:""}</h1>
  </div>
)

/*
VisibleMuscle.propTypes = {
  muscle: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(PropTypes.shape({
      equipment: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    name: PropTypes.string.isRequired
  })
}
*/
export default VisibleMuscle
