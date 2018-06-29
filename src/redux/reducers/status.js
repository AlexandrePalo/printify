const initial = {
  ports: [],
  fetchingPorts: false,
  port: 1,
  baudRate: 124000,
  connected: false,
  connecting: false
}

const statusReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_DIALOG_PORT':
      return { ...state, port: action.payload.port }

    case 'SET_DIALOG_BAUDRATE':
      return { ...state, baudRate: action.payload.baudRate }

    case 'CONNECT_TO_PRINTER':
      if (action.payload.fetching) {
        return { ...state, connecting: true }
      }
      console.log(action.payload)
      return { ...state, connecting: false }

    case 'DISCONNECT_FROM_PRINTER':
      return { ...state, connected: false }

    case 'GET_AVAILABLE_PORTS':
      if (action.payload.fetching) {
        return {
          ...state,
          fetchingPorts: true
        }
      }
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
