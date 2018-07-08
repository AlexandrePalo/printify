const initial = {
  ports: [],
  fetchingPorts: false,
  port: 1,
  baudRate: 9600,
  printer: {
    connected: false,
    port: null,
    baudRate: null
  },
  connecting: false
}

const statusReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_DIALOG_PORT':
      return { ...state, port: action.payload.port }

    case 'SET_DIALOG_BAUDRATE':
      return { ...state, baudRate: action.payload.baudRate }

    case 'CONNECT_TO_PRINTER':
      // Error
      // Disconnect printer
      if (action.payload.error) {
        return {
          ...state,
          connecting: false,
          printer: {
            connected: false,
            port: null,
            baudRate: null
          }
        }
      }
      // Fetching
      if (action.payload.fetching) {
        return { ...state, connecting: true }
      }
      // OK
      console.log(action.payload)
      return {
        ...state,
        connecting: false,
        printer: {
          connected: action.payload.connected, // Should be true
          port: action.payload.port,
          baudRate: action.payload.baudRate
        }
      }

    case 'DISCONNECT_FROM_PRINTER':
      return { ...state, connected: false }

    case 'GET_AVAILABLE_PORTS':
      // Error
      if (action.payload.error) {
        return {
          ...state,
          fetchingPorts: false
        }
      }
      // Fetching
      if (action.payload.fetching) {
        return {
          ...state,
          fetchingPorts: true
        }
      }
      // OK
      return {
        ...state,
        fetchingPorts: false,
        ports: action.payload.data.serieports.map(p => p.name)
      }

    default:
      return state
  }
}

export default statusReducer
