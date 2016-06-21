import React from 'react'
import Radium from 'radium'
import RadioButtonChangeDiagram from '../containers/RadioButtonChangeDiagram'

const styles = {
  gray: {
    color: '#919191'
  }
}

const ChangeDiagram = () => (
  <div style={[styles.gray]}>
    <RadioButtonChangeDiagram filter="front">Front</RadioButtonChangeDiagram>
    <RadioButtonChangeDiagram filter="back">Back</RadioButtonChangeDiagram>
  </div>
)

export default Radium(ChangeDiagram)