import { connect } from "react-redux"
import Hamburger from "../../presenters/Hamburger/Hamburger"

const mapStateToProps = state => ({
  mobileNavIsOpen: state.isMobileNavOpen
})

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch({type: 'TOGGLE_MOBILE_NAV'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)