const initial = {
  port: 1,
  baudRate: 124000,
  connected: false
}

const statusReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_DIALOG_PORT':
      return { ...state, port: action.payload.port }
    case 'SET_DIALOG_BAUDRATE':
      return { ...state, baudRate: action.payload.baudRate }
    case 'CONNECT_TO_PRINTER':
      return { ...state, connected: true }
    case 'DISCONNECT_FROM_PRINTER':
      return { ...state, connected: false }
    default:
      return state
  }
}

export default statusReducer
