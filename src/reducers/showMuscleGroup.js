import { SET_MUSCLE_GROUP } from '../constants/ActionTypes'

const showMuscleGroup = (state = 'none', action) => {
  switch(action.type){
    case SET_MUSCLE_GROUP:
      return action.muscle
    default: 
      return state
  }
}

export default showMuscleGroup