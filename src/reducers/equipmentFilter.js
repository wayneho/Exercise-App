import { SET_EQUIPMENT_FILTER } from '../constants/ActionTypes'

const equipmentFilter = (state = 'all', action) => {
  switch(action.type){
    case SET_EQUIPMENT_FILTER:
      return action.filter
    default: 
      return state
  }
}

export default equipmentFilter