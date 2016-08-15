import { connect } from 'react-redux'
import { setEquipmentFilter } from '../actions'
import FilterExercises from '../components/FilterExercises'

const mapStateToProps = (state) => {
  return{
    activeFilter: state.equipmentFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onClick: (filter) => {
      dispatch(setEquipmentFilter(filter))
    }
  }
}

const FilterExercisesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterExercises)

export default FilterExercisesContainer