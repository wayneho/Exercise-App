import { connect } from 'react-redux'
import VisibleMuscle from '../components/VisibleMuscle'

const getMuscleGroup = (muscleGroups, targetMuscle) => {
  return muscleGroups.find(muscle => {
    return targetMuscle === muscle.name
  })
}


const mapStateToProps = (state) => {
  return{
    muscle: getMuscleGroup(state.muscleGroups, state.showMuscleGroup)
  }
}

const VisibleMuscleContainer = connect(
  mapStateToProps
)(VisibleMuscle)

export default VisibleMuscleContainer

