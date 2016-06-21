import { SET_MUSCLE_GROUP } from '../constants/ActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'

// This initial state is *copied* from react-router-redux's
// routerReducer (the property name 'locationBeforeTransitions' is
// because this is designed for use with react-router)
const initialState = { locationBeforeTransitions: null }

function routing(state = initialState, action) {
  // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
  if (action.type === LOCATION_CHANGE) {
    return { ...state, locationBeforeTransitions: action.payload }
  }

  if (action.type === SET_MUSCLE_GROUP) {
    const { muscle } = action
    let location = state.locationBeforeTransitions
    const pathname = muscle
    location = { ...location, pathname, action: 'PUSH' }
    return { ...state, locationBeforeTransitions: location }
  }

  return state
}

export default routing