import React from 'react'
import RadioButtonChangeDiagram from '../containers/RadioButtonChangeDiagram'

const ChangeDiagram = () => (
  <div>
    <RadioButtonChangeDiagram filter="front">Front</RadioButtonChangeDiagram>
    <RadioButtonChangeDiagram filter="back">Back</RadioButtonChangeDiagram>
  </div>
)

export default ChangeDiagram