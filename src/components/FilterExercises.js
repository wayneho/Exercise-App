import React from 'react'
import Radium from 'radium'
import RadioButtonFilterExercises from '../containers/RadioButtonFilterExercises'

const styles = {
  gray: {
    color: '#919191'
  }
}

const FilterExercises = () => (
  <div style={[styles.gray]}>
    <h4>Filter By:</h4>
    <RadioButtonFilterExercises filter="all">All </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="barbell">Barbell </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="dumbbell">Dumbbell </RadioButtonFilterExercises>
    <RadioButtonFilterExercises filter="machine">Machine </RadioButtonFilterExercises>
  </div>
)

export default Radium(FilterExercises)