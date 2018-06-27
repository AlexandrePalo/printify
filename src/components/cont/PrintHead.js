import { connect } from 'react-redux'
import PrintHead from '../pres/PrintHead'

const mapStateToProps = state => ({
  x: state.position.x,
  y: state.position.y,
  z: state.position.z
})

const mapDispatchToProps = dispatch => ({
  enableStepper: axis =>
    dispatch({
      type: 'ENABLE_AXIS_STEPPER',
      payload: { axis }
    }),
  disableStepper: axis =>
    dispatch({
      type: 'DISABLE_AXIS_STEPPER',
      payload: { axis }
    }),
  setPositionTarget: (axis, value) =>
    dispatch({
      type: 'SET_POSITION_TARGET',
      payload: { axis, value }
    }),
  setSpeed: (axis, value) =>
    dispatch({
      type: 'SET_AXIS_SPEED',
      payload: { axis, value }
    }),
  goToHome: axis => dispatch({ type: 'GO_TO_AXIS_HOME', payload: { axis } }),
  goToPosition: (axis, value) =>
    dispatch({ type: 'GO_TO_AXIS_POSITION', payload: { axis, value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(PrintHead)
