import React from 'react'
import RadioButtonFilterExercises from '../containers/RadioButtonFilterExercises'

const FilterExercises = () => (
  <div>
    <h4>Filter By:</h4>
    <RadioButtonFilterExercises filter="all">All </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="barbell">Barbell </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="dumbbell">Dumbbell </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="machine">Machine </RadioButtonFilterExercises>
  </div>
)

export default FilterExercises