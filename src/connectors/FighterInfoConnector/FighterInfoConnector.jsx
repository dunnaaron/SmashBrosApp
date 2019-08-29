import { connect } from 'react-redux'
import FighterInfo from '../../presenters/FighterInfo';


const mapStateToProps = state => ({
  fighter: state.selectedCurrentFighter,
});

export default connect(mapStateToProps)(FighterInfo)