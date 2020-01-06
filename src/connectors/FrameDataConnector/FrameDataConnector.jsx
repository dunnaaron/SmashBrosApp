import { connect } from 'react-redux'
import FrameData from '../../presenters/FrameData'

const mapStateToProps = state => ({
  fighter: state.selectedCurrentFighter,
})

export default connect(mapStateToProps)(FrameData)