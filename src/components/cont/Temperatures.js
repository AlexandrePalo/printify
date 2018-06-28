import Temperatures from '../pres/Temperatures'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  bed: state.temperatures.bed,
  extruder: state.temperatures.extruder,
  breakpoint: state.breakpoint
})

const mapDispatchToProps = dispatch => ({
  setTemperatureTarget: (probe, value) =>
    dispatch({
      type: 'SET_TEMPERATURE_TARGET',
      payload: {
        probe,
        value
      }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Temperatures)
