import React from 'react'
import RadioButtonContainer from '../containers/RadioButtonContainer'

const FilterExercises = () => (
  <div>
    <RadioButtonContainer filter="all">All </RadioButtonContainer>
    <RadioButtonContainer filter="barbell">Barbell </RadioButtonContainer>
    <RadioButtonContainer filter="dumbbell">Dumbbell </RadioButtonContainer>
    <RadioButtonContainer filter="machine">Machine </RadioButtonContainer>
  </div>
)

export default FilterExercises