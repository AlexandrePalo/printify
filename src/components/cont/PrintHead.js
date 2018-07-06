import { connect } from 'react-redux'
import PrintHead from '../pres/PrintHead'
import {
  enableAxisStepper,
  disableAxisStepper,
  goToAxisHome,
  goToAxisPosition
} from '../../redux/actions/control'

const mapStateToProps = state => ({
  ...state.position,
  breakpoint: state.breakpoint
})

const mapDispatchToProps = dispatch => ({
  enableStepper: axis => dispatch(enableAxisStepper(axis)),
  disableStepper: axis => dispatch(disableAxisStepper(axis)),
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
  goToHome: axis => dispatch(goToAxisHome(axis)),
  goToPosition: (axis, value) => dispatch(goToAxisPosition(axis, value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrintHead)
