import { connect } from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state) => {
  return {
    muscle: state.showMuscleGroup
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer