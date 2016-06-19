import { connect } from 'react-redux'
import { setEquipmentFilter } from '../actions'
import RadioButton from '../components/RadioButton'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.equipmentFilter === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setEquipmentFilter(ownProps.filter))
    }
  }
}

const RadioButtonFilterExercises = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButton)

export default RadioButtonFilterExercises