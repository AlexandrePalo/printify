import { request } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const login = (username, password) => {
  return dispatch => {
    console.log(username, password)
    dispatch({ type: 'LOGIN', payload: { fetching: true } })
    const query = `mutation($username: String, $password: String) {
      login(username: $username, password: $password) {
        username
        name
      }
    }`
    request(endpoint, query, { username, password }).then(data => {
      console.log(data)
      dispatch({
        type: 'LOGIN',
        payload: {
          user: data.login
        }
      })
    })
  }
}

export { login }
