import { connect } from 'react-redux'
import { setMuscleGroup } from '../actions'
import FrontView from '../components/FrontView'

const mapStateToProps = (state) => {
  return {
    active: state.showMuscleGroup
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