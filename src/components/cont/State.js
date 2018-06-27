import { connect } from 'react-redux'
import State from '../pres/State'

const mapStateToProps = state => ({
  port: state.status.port,
  baudRate: state.status.baudRate,
  connected: state.status.connected
})

const mapDispatchToProps = dispatch => ({
  connect: (port, baudRate) =>
    dispatch({
      type: 'CONNECT_TO_PRINTER',
      payload: { port, baudRate }
    }),
  disconnect: () =>
    dispatch({
      type: 'DISCONNECT_FROM_PRINTER'
    }),
  setBaudRate: baudRate =>
    dispatch({ type: 'SET_DIALOG_BAUDRATE', payload: { baudRate } }),
  setPort: port => dispatch({ type: 'SET_DIALOG_PORT', payload: { port } })
})

export default connect(mapStateToProps, mapDispatchToProps)(State)
