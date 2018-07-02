const initial = { error: false, message: null }

const errors = (state = initial, action) => {
  switch (action.type) {
    case ('GET_FILES',
    'DELETE_FILE',
    'GET_AVAILABLE_PORTS',
    'CONNECT_TO_PRINTER'): {
      if (action.payload.error) {
        return { error: true, message: action.payload.message }
      }
      return state
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
