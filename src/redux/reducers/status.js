const initial = {
  connected: false
}

const statusReducer = (state = initial, action) => {
  switch (action.type) {
    case 'CONNECT_TO_PRINTER':
      return { ...state, connected: true }
    case 'DISCONNECT_FROM_PRINTER':
      return { ...state, connected: false }
    default:
      return state
  }
}

export default statusReducer
