const initial = {
  extruder: {
    current: 100,
    target: 200
  },
  bed: {
    current: 30,
    target: 60
  }
}

const temperaturesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_TEMPERATURE_TARGET':
      return {
        ...state,
        [action.payload.probe]: {
          ...state[action.payload.probe],
          target: action.payload.value
        }
      }
    default:
      return state
  }
}

export default temperaturesReducer
