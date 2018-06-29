import { request } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const getAvailablePorts = () => {
  return dispatch => {
    dispatch({ type: 'GET_AVAILABLE_PORTS', payload: { fetching: true } })
    const query = `query {serieports {name}}`
    request(endpoint, query).then(data => {
      dispatch({
        type: 'GET_AVAILABLE_PORTS',
        payload: { data }
      })
    })
  }
}

const connectToPrinter = (port, baudRate) => {
  return dispatch => {
    dispatch({ type: 'CONNECT_TO_PRINTER', payload: { fetching: true } })
    const query = `mutation($port: String, $baudRate: Int) {
      connectToPrinter(port: $port, baudRate: $baudRate) {status message}
    }`
    request(endpoint, query, { port, baudRate }).then(data => {
      dispatch({
        type: 'CONNECT_TO_PRINTER',
        payload: { data }
      })
    })
  }
}

export { getAvailablePorts, connectToPrinter }
