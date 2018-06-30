import { connect } from 'react-redux'
import Header from '../pres/Header'
import { logout } from '../../redux/actions/login'

const mapStateToProps = state => ({
  temperatures: state.temperatures,
  print: state.print,
  name: state.login.user.name
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
