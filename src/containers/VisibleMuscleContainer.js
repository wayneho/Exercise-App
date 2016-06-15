import { connect } from 'react-redux'
import VisibleMuscle from '../components/VisibleMuscle'

const getMuscleGroup = (muscleGroups, targetMuscle, equipmentFilter) => {
  let muscle

  if(targetMuscle === 'none') return

  muscle = Object.assign({},muscleGroups.find(muscle => {
    return targetMuscle === muscle.name
  }))

  if(equipmentFilter !== 'all'){
    muscle.exercises = muscle.exercises.filter(exercise => {
      return exercise.equipment === equipmentFilter
    })
  }
  return muscle 
}

const mapStateToProps = (state) => {
  return{
    muscle: getMuscleGroup(state.muscleGroups, state.showMuscleGroup, state.equipmentFilter)
  }
}

const VisibleMuscleContainer = connect(
  mapStateToProps
)(VisibleMuscle)

export default VisibleMuscleContainer

