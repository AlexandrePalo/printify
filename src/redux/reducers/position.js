const initial = {
  x: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false
  },
  y: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false
  },
  z: {
    speed: 3000,
    target: null,
    current: 1.0,
    stepper: false
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
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          stepper: true
        }
      }
    case 'DISABLE_AXIS_STEPPER':
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          stepper: false
        }
      }
    case 'GO_TO_AXIS_HOME':
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          current: 0
        }
      }
    case 'GO_TO_AXIS_POSITION':
      return {
        ...state,
        [action.payload.axis]: {
          ...state[action.payload.axis],
          current: action.payload.value
        }
      }
    default:
      return state
  }
}

export default positionReducer
