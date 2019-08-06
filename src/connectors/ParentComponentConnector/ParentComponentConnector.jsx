import { connect } from 'react-redux'
import Characters from '../../presenters/Characters';

const mapDispatchToProps = dispatch => ({
  buttonAction: () => dispatch({ type: 'REDUCER', value: 'state changed from connector' })
})

export default connect(null, mapDispatchToProps)(Characters)
