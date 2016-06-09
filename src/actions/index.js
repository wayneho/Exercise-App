import { SET_MUSCLE_GROUP, SET_EQUIPMENT_FILTER, TOGGLE_DIAGRAM_VIEW } from '../constants/ActionTypes'

export function setMuscleGroup(muscle){
  return{
    type: SET_MUSCLE_GROUP,
    muscle
  }
}

export function setEquipmentFilter(filter){
  return{
    type: SET_EQUIPMENT_FILTER,
    filter
  }
}

export function toggleDiagramView(view){
  return{
    type: TOGGLE_DIAGRAM_VIEW,
    view
  }
}