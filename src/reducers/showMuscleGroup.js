import { SET_MUSCLE_GROUP } from '../constants/ActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'

const showMuscleGroup = (state = '/', action) => {
  switch(action.type){
    case SET_MUSCLE_GROUP:
      return action.muscle
    case LOCATION_CHANGE:
      const pathname = action.payload.pathname
      let muscle = pathname.split('/')
      muscle = muscle[muscle.length-1]

      // fix muscles with spaces in their names
      muscle = muscle.split('%20').join(' ')

      muscle===''?muscle='/':muscle
      return muscle
    default: 
      return state
  }
}

export default showMuscleGroup