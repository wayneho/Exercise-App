import React from 'react'
import Radium from 'radium'

import DiagramViewContainer from '../containers/DiagramViewContainer'
import VisibleMuscleContainer from '../containers/VisibleMuscleContainer'
import FilterExercisesContainer from '../containers/FilterExercisesContainer'
import Header from '../containers/HeaderContainer'
import ChangeDiagram from './ChangeDiagram'

var styles = {
  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },
  item1: {
    width: '40%'
  },
  center: {
    textAlign: 'center'
  },
  item2: {
    width: '60%',
    marginLeft: '5%'
  }
}

const App = () => {

  return(
    <div style={[styles.container]}>
      <div style={[styles.item1, styles.center]}>
        <DiagramViewContainer />
        <ChangeDiagram />
      </div>
      <div style={[styles.item2]}>
        <Header />
        <FilterExercisesContainer />
        <VisibleMuscleContainer />
      </div>
    </div>
  )
}

export default Radium(App)
