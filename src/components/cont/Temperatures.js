import Temperatures from '../pres/Temperatures'
import { connect } from 'react-redux'
import { setProbeTemperatureTarget } from '../../redux/actions/temperatures'

const mapStateToProps = state => ({
  bed: state.temperatures.bed,
  extruder: state.temperatures.extruder,
  breakpoint: state.breakpoint
})

const mapDispatchToProps = dispatch => ({
  setTemperatureTarget: (probe, value) =>
    dispatch(setProbeTemperatureTarget(probe, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Temperatures)
