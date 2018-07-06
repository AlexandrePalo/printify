import { GraphQLClient } from 'graphql-request'
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

// WIP
const disconnectFromPrinter = () => {
  return dispatch => {}
}

const startPrint = (printerId, file) => {
  return dispatch => {
    // Loading state, to send first information
    dispatch({
      type: 'START_PRINTING',
      fetching: true
    })
    // Request a print to server
    const query = `mutation() {}` // TBC
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(endpoint, query, {}) // TBC
      .then(data => {
        // Server is ok, and started to print
        // Start in state
        dispatch({
          type: 'START_PRINTING',
          payload: { id: file.id }
        })
      })
      .catch(err => {
        // Server is not ok
        dispatch({
          type: 'START_PRINTING',
          error: true,
          message: 'Error during printing initialization'
        })
      })
  }
}

const getPrintState = printingId => {
  return dispatch => {}
}

const stopPrint = printingId => {
  return dispatch => {}
}

const pausePrint = printingId => {
  return dispatch => {}
}

const resumePrint = printingId => {
  return dispatch => {}
}

export {
  getAvailablePorts,
  connectToPrinter,
  disconnectFromPrinter,
  getPrintState,
  startPrint,
  stopPrint,
  pausePrint,
  resumePrint
}
