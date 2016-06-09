import { connect } from 'react-redux'
import { setMuscleGroup } from '../actions'
import FrontView from '../components/FrontView'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (muscle) => {
      dispatch(setMuscleGroup(muscle))
    }
  }
}

const FrontViewContainer = connect(
  null,
  mapDispatchToProps
)(FrontView)

export default FrontViewContainer