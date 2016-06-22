import React from 'react'
import Radium from 'radium'

import DiagramViewContainer from '../containers/DiagramViewContainer'
import VisibleMuscleContainer from '../containers/VisibleMuscleContainer'
import FilterExercises from './FilterExercises'
import Header from '../containers/HeaderContainer'
import ChangeDiagram from './ChangeDiagram'

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

const App = () => {

  return(
    <div style={[styles.container]}>
      <div style={[styles.item, styles.center]}>
        <DiagramViewContainer />
        <ChangeDiagram />
      </div>
      <div style={[styles.item]}>
        <Header />
        <FilterExercises />
        <VisibleMuscleContainer />
      </div>
    </div>
  )
}

export default Radium(App)
