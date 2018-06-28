const initial = { name: 'default', size: null }

const breakpoint = (state = initial, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_BREAKPOINT': {
      return { name: action.breakpointName, size: action.breakpointSize }
    }
    default: {
      return state
    }
  }
}

export default breakpoint
