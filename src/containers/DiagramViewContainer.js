import { connect } from 'react-redux'
import { setMuscleGroup } from '../actions'
import DiagramView from '../components/DiagramView'

const mapStateToProps = (state) => {
  return {
    activeMuscle: state.showMuscleGroup,
    diagramView: state.diagramView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (muscle) => {
      dispatch(setMuscleGroup(muscle))
    }
  }
}

const DiagramViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DiagramView)

export default DiagramViewContainer