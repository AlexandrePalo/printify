import { request } from 'graphql-request'
import jwt from 'jsonwebtoken'
const endpoint = 'http://localhost:4000'

const login = (username, password) => {
  return dispatch => {
    dispatch({ type: 'LOGIN', payload: { fetching: true } })
    const query = `mutation($username: String, $password: String) {
      login(username: $username, password: $password) {
        token
      }
    }`
    request(endpoint, query, { username, password }).then(data => {
      if (!data.login.token) {
        dispatch({
          type: 'LOGIN',
          payload: {
            user: null,
            token: null
          }
        })
      } else {
        const user = jwt.decode(data.login.token)
        dispatch({
          type: 'LOGIN',
          payload: {
            user,
            token: data.login.token
          }
        })
      }
    })
  }
}

const reLogin = token => {
  return dispatch => {
    dispatch({ type: 'RE_LOGIN', payload: { fetching: true } })
    const query = `mutation($token: String) {
      reLogin(token: $token) {
        username
        name
        id
      }
    }`

    request(endpoint, query, { token }).then(data => {
      if (!data.reLogin.id) {
        dispatch({
          type: 'RE_LOGIN',
          payload: {
            user: null,
            token: null
          }
        })
      } else {
        console.log(data)
        dispatch({
          type: 'RE_LOGIN',
          payload: {
            user: data.reLogin,
            token
          }
        })
      }
    })
  }
}

const logout = () => {
  return dispatch => {
    dispatch({ type: 'LOGOUT' })
  }
}

export { login, reLogin, logout }
