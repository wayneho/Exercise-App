import { connect } from 'react-redux'
import { toggleDiagramView, setMuscleGroup } from '../actions'
import RadioButton from '../components/RadioButton'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.diagramView === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleDiagramView(ownProps.filter))
      dispatch(setMuscleGroup("none"))
    }
  }
}

const RadioButtonChangeDiagram = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButton)

export default RadioButtonChangeDiagram