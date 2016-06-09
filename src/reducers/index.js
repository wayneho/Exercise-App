import { combineReducers } from 'redux'
import equipmentFilter from './equipmentFilter'
import diagramView from './diagramView'
import muscleGroups from './muscleGroups'
import showMuscleGroup from './showMuscleGroup'

const exerciseApp = combineReducers({
  equipmentFilter,
  diagramView,
  muscleGroups,
  showMuscleGroup
})

export default exerciseApp