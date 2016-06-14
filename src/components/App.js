import React from 'react'
import Radium from 'radium'
import FrontViewContainer from '../containers/FrontViewContainer'
import VisibleMuscleContainer from '../containers/VisibleMuscleContainer'
import FilterExercises from './FilterExercises'

var styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
}

const App = () => (
  <div style={[styles.container]}>
    <FrontViewContainer />
    <div>
      <VisibleMuscleContainer />
      <FilterExercises />
    </div>
  </div>
)

export default Radium(App)
