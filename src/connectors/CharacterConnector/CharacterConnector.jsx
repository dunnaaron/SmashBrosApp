import { connect } from 'react-redux'
import Characters from '../../presenters/Characters';

const mapStateToProps = state => ({
  selectedCurrentFighter: state.selectedCurrentFighter,
});

const mapDispatchToProps = dispatch => ({
  setCurrentFighter: selectedFighter => dispatch({ type: 'SET_CURRENT_FIGHTER', value: selectedFighter}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
