import { TOGGLE_DIAGRAM_VIEW } from '../constants/ActionTypes'

const toggleDiagramView = (state = 'front', action) => {
  switch(action.type){
    case TOGGLE_DIAGRAM_VIEW:
      return action.view
    default: 
      return state
  }
}

export default toggleDiagramView