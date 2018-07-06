import { GraphQLClient } from 'graphql-request'
const endpoint = 'http://localhost:4000'

const getFiles = dir => {
  return dispatch => {
    dispatch({ type: 'GET_FILES', payload: { fetching: true } })
    const query = `mutation($dir: String) {
      readDir(dir: $dir) {
        path duration date
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

const deleteFile = (id, path) => {
  return dispatch => {
    dispatch({ type: 'DELETE_FILE', payload: { id, fetching: true } })

    const query = `mutation($path: String) {
      deleteFile(path: $path) {
        path
      }
    }`
    const gqlc = new GraphQLClient(endpoint, {
      headers: { authorization: 'Bearer ' + sessionStorage.jwt }
    })
    gqlc
      .request(query, { path })
      .then(data => {
        dispatch({ type: 'DELETE_FILE', payload: { id } })
      })
      .catch(err => {
        dispatch({
          type: 'DELETE_FILE',
          payload: { error: true, message: 'Error during deleting file', id }
        })
      })
  }
}

export { getFiles, deleteFile }
