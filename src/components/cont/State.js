import { connect } from 'react-redux'
import State from '../pres/State'
import {
  getAvailablePorts,
  connectToPrinter
} from '../../redux/actions/printer'

const mapStateToProps = state => ({
  ...state.status
})

const mapDispatchToProps = dispatch => ({
  connect: (port, baudRate) => dispatch(connectToPrinter(port, baudRate)),
  disconnect: () =>
    dispatch({
      type: 'DISCONNECT_FROM_PRINTER'
    }),
  setBaudRate: baudRate =>
    dispatch({ type: 'SET_DIALOG_BAUDRATE', payload: { baudRate } }),
  setPort: port => dispatch({ type: 'SET_DIALOG_PORT', payload: { port } }),
  getAvailablePorts: () => dispatch(getAvailablePorts())
})

export default connect(mapStateToProps, mapDispatchToProps)(State)
