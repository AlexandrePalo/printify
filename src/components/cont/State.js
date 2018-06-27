import { connect } from 'react-redux'
import State from '../pres/State'

const mapStateToProps = state => ({
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
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(State)
