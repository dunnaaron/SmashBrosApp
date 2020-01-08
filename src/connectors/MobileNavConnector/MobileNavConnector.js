import MobileNav from '../../presenters/MobileNav'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  navOpen: state.isMobileNavOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch({type: 'TOGGLE_MOBILE_NAV'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);