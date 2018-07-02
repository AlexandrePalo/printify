import { GraphQLClient, request } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const getFiles = dir => {
  return dispatch => {
    dispatch({ type: 'GET_FILES', payload: { fetching: true } })
    const query = `mutation($dir: String) {
      readDir(dir: $dir) {
        name duration date
      }
    }`
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(query, { dir })
      .then(data => {
        dispatch({ type: 'GET_FILES', payload: { files: data.readDir } })
      })
      .catch(err => {
        dispatch({
          type: 'GET_FILES',
          payload: { error: true, message: 'Error during fetching data' }
        })
      })
  }
}

export { getFiles }
