import React, { PropTypes } from 'react'

const VisibleMuscle = ({ muscle }) => {
  if(muscle){
    return (
      <div>
        <h1>{muscle.name}</h1>
         <ul>
          {muscle.exercises.map(exercise => {
            return <li key={exercise.name}>{exercise.name}</li>
          })}
         </ul>
      </div>
    )
  }else{
    return <h1>Select a muscle group</h1>
  }
}

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

export default VisibleMuscle
