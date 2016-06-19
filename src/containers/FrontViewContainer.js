import { connect } from 'react-redux'
import { setMuscleGroup } from '../actions'
import FrontView from '../components/FrontView'

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

const FrontViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontView)

export default FrontViewContainer