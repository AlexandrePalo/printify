import { request, GraphQLClient } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const getAvailablePorts = () => {
  return dispatch => {
    dispatch({ type: 'GET_AVAILABLE_PORTS', payload: { fetching: true } })
    const query = `query {serieports {name}}`
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(endpoint, query)
      .then(data => {
        dispatch({
          type: 'GET_AVAILABLE_PORTS',
          payload: { data }
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_AVAILABLE_PORTS',
          payload: { error: true, message: 'Error during fetching data' }
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
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(endpoint, query, { port, baudRate })
      .then(data => {
        dispatch({
          type: 'CONNECT_TO_PRINTER',
          payload: { data }
        })
      })
      .catch(err => {
        dispatch({
          type: 'CONNECT_TO_PRINTER',
          payload: {
            error: true,
            message: 'Error during connecting to printer'
          }
        })
      })
  }
}

export { getAvailablePorts, connectToPrinter }
