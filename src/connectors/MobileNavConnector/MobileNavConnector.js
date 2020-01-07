import MobileNav from '../../presenters/MobileNav'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  navOpen: state.isMobileNavOpen,
});

export default connect(mapStateToProps)(MobileNav);