import { connect } from 'react-redux'
import Header from '../pres/Header'

const mapStateToProps = state => ({
  temperatures: state.temperatures
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
