import { connect } from 'react-redux'
import Header from '../pres/Header'

const mapStateToProps = state => ({
  temperatures: state.temperatures,
  print: state.print,
  name: state.login.user.name
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
