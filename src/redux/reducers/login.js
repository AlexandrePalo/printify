const initial = {
  user: null,
  logged: false,
  logging: false,
  message: '',
  username: '',
  password: ''
}

const login = (state = initial, action) => {
  switch (action.type) {
    case 'SET_FORM_USERNAME': {
      return { ...state, username: action.payload.value }
    }

    case 'SET_FORM_PASSWORD': {
      return { ...state, password: action.payload.value }
    }

    case 'LOGIN': {
      console.log(action.payload)
      if (action.payload.fetching) {
        return { ...state, logging: true, message: '' }
      }
      if (!action.payload.user.username) {
        return { ...state, logging: false, message: 'Bad credentials' }
      }
      return {
        ...initial,
        user: action.payload.user,
        logged: true
      }
    }

    default: {
      return state
    }
  }
}

export default login
