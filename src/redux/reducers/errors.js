const initial = { error: false, message: null }

const errors = (state = initial, action) => {
  switch (action.type) {
    case 'GET_FILES':
    case 'DELETE_FILE':
    case 'ADD_FILE':
      if (action.payload.error) {
        return { error: true, message: action.payload.message }
      }
      return state

    case 'GET_AVAILABLE_PORTS':
    case 'CONNECT_TO_PRINTER':
      if (action.payload.error) {
        return { error: true, message: action.payload.message }
      }
      return state

    case 'LOGIN':
      if (action.payload.error) {
        return { error: true, message: action.payload.message }
      }
      return state

    case 'ENABLE_AXIS_STEPPER':
    case 'DISABLE_AXIS_STEPPER':
    case 'GO_TO_AXIS_HOME':
    case 'GO_TO_AXIS_POSITION':
      if (action.payload.error) {
        return { error: true, message: action.payload.message }
      }

    case 'AMEND_ERROR': {
      return { error: false, message: null }
    }

    default: {
      return state
    }
  }
}

export default errors
