const initial = {
  user: null,
  logged: false,
  logging: false,
  username: '',
  password: '',
  session: !!sessionStorage.jwt,
  relogging: false
}

const login = (state = initial, action) => {
  switch (action.type) {
    case 'SET_FORM_USERNAME':
      return { ...state, username: action.payload.value }

    case 'SET_FORM_PASSWORD':
      return { ...state, password: action.payload.value }

    case 'LOGIN':
      if (action.payload.error) {
        return { ...state, logging: false }
      }

      if (action.payload.fetching) {
        return { ...state, logging: true }
      }

      sessionStorage.setItem('jwt', action.payload.token)
      return {
        ...initial,
        user: action.payload.user,
        logged: true,
        session: !!sessionStorage.jwt
      }

    case 'RE_LOGIN':
      if (action.payload.fetching) {
        return { ...state, relogging: true }
      }
      if (!action.payload.user) {
        sessionStorage.removeItem('jwt')
        return {
          ...state,
          user: null,
          logged: false,
          relogging: false,
          session: !!sessionStorage.jwt
        }
      }

      sessionStorage.setItem('jwt', action.payload.token)
      return {
        ...initial,
        user: action.payload.user,
        logged: true,
        relogging: false
      }

    case 'LOGOUT':
      sessionStorage.removeItem('jwt')
      return {
        ...initial,
        session: !!sessionStorage.jwt
      }

    default:
      return state
  }
}

export default login
