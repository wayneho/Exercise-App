import React from 'react'
import Radium from 'radium'
import FrontViewContainer from '../containers/FrontViewContainer'
import VisibleMuscleContainer from '../containers/VisibleMuscleContainer'
import FilterExercises from './FilterExercises'
import Header from '../containers/HeaderContainer'

var styles = {
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },
  item: {
    width: '50%'
  },
  center: {
    textAlign: 'center'
  }
}

const App = () => (
  <div style={[styles.container]}>
    <div style={[styles.item, styles.center]}>
      <FrontViewContainer />
    </div>
    <div style={[styles.item]}>
      <Header />
      <FilterExercises />
      <VisibleMuscleContainer />
    </div>
  </div>
)

export default Radium(App)
