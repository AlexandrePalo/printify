import { connect } from 'react-redux'
import Header from '../pres/Header'

const mapStateToProps = state => ({
  temperatures: state.temperatures,
  print: state.print
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
