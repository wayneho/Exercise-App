import { combineReducers } from 'redux'
import equipmentFilter from './equipmentFilter'
import diagramView from './diagramView'
import muscleGroups from './muscleGroups'
import showMuscleGroup from './showMuscleGroup'
import routing from './routing'

const exerciseApp = combineReducers({
  equipmentFilter,
  diagramView,
  muscleGroups,
  showMuscleGroup,
  routing
})

export default exerciseApp