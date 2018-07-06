const initial = {
  x: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false,
    fetchingPower: false,
    fetchingPosition: false
  },
  y: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false,
    fetchingPower: false,
    fetchingPosition: false
  },
  z: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false,
    fetchingPower: false,
    fetchingPosition: false
  }
}

const positionReducer = (state = initial, action) => {
  switch (action.type) {
    case 'SET_POSITION_TARGET':
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          target: action.payload.value
        }
      }
    case 'SET_AXIS_SPEED':
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          speed: action.payload.value
        }
      }
    case 'ENABLE_AXIS_STEPPER':
      if (action.payload.fetching) {
        return {
          ...state,
          [action.payload.axis]: {
            ...state[action.payload.axis],
            fetchingPower: true
          }
        }
      }
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          stepper: true,
          fetchingPower: false
        }
      }
    case 'DISABLE_AXIS_STEPPER':
      if (action.payload.fetching) {
        return {
          ...state,
          [action.payload.axis]: {
            ...state[action.payload.axis],
            fetchingPower: true
          }
        }
      }
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          stepper: false,
          fetchingPower: false
        }
      }
    case 'GO_TO_AXIS_HOME':
      if (action.payload.fetching) {
        return {
          ...state,
          [action.payload.axis]: {
            ...state[action.payload.axis],
            fetchingPosition: true
          }
        }
      }
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          current: 0,
          fetchingPosition: false
        }
      }
    case 'GO_TO_AXIS_POSITION':
      if (action.payload.fetching) {
        return {
          ...state,
          [action.payload.axis]: {
            ...state[action.payload.axis],
            fetchingPosition: true
          }
        }
      }
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          current: action.payload.value,
          fetchingPosition: false
        }
      }
    default:
      return state
  }
}

export default positionReducer
