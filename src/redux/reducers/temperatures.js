const initial = {
  extruder: {
    current: 100,
    target: 200,
    fetchingTarget: false
  },
  bed: {
    current: 30,
    target: 60,
    fetchingTarget: false
  }
}

const temperaturesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_PROBE_TEMPERATURE_TARGET':
      if (action.payload.fetching) {
        return {
          ...state,
          [action.payload.probe]: {
            ...state[action.payload.probe],
            fetchingTarget: true
          }
        }
      }
      return {
        ...state,
        [action.payload.probe]: {
          ...state[action.payload.probe],
          target: action.payload.value,
          fetchingTarget: false
        }
      }
    default:
      return state
  }
}

export default temperaturesReducer
